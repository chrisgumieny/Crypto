import React, { useState, useEffect, useRef } from "react";
import CryptoChartHeader from "./CryptoChartHeader"
import { formatChart } from "./FormatChart.js"
import { Card, Form, Button } from "react-bootstrap"

export default function CryptoChart() {
    const [currencies, setcurrencies] = useState([]); // all cryptos
    const [pair, setpair] = useState(""); // current pair of crypto we are looking at
    const [price, setprice] = useState("0.00"); // current price
    const [pastData, setpastData] = useState({}); //array of all historical data
    const webSocket = useRef(null); // websocket for websocket object
    let first = useRef(false);

    // url we are using for api calls 
    const url = "https://api.pro.coinbase.com";

    // first hook which only runs on first render
    useEffect(() => {
        // create websocket object
        webSocket.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

        // create empty arrays for currency pairs
        let currencyPairs = [];

        // call api with aync function
        const callAPI = async () => {
            // fetch all of coin bases currency pairs 
            await fetch(url + "/products")
                .then((res) => res.json())
                .then((data) => (currencyPairs = data));

            // filter so only get currencies in USD
            let filteredCoins = currencyPairs.filter((pair) => {
                if (pair.quote_currency === "USD") {
                    return pair;
                }
            });

            // sort the currencies alphabetically
            filteredCoins = filteredCoins.sort((a, b) => {
                if (a.base_currency < b.base_currency) {
                    return -1;
                }
                if (a.base_currency > b.base_currency) {
                    return 1;
                }
                return 0;
            });

            // set our new list of currencies
            setcurrencies(filteredCoins);

            // set to true so second hook works
            first.current = true;
        };

        // call our async function to make sure it works
        callAPI();
    }, []); // keep this so no infinite loop



    // second hook will only run on state changes
    useEffect(() => {
        // check to make sure we dont make api call
        // when we dont have state selected on first render
        if (!first.current) {
            return;
        }

        // create message object
        // subscribe and get ticker data for webhook
        let message = {
            type: "subscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };

        // convert javascript object to json
        let jsonMessage = JSON.stringify(message);

        // use websocket to send that so we subscribe 
        webSocket.current.send(jsonMessage);

        // make API call to get historical data 
        // product, current pair, candles, granularity (giving us a ddaily price chart)
        let historicalData = `${url}/products/${pair}/candles?granularity=86400`;


        const fetchHistoricalData = async () => {
            // assign response to array
            let dataArray = [];
            // wait for data to be fetched 
            await fetch(historicalData)
                .then((res) => res.json())
                .then((data) => (dataArray = data));

            //call formatChart to format data   
            let formattedData = formatChart(dataArray);
            setpastData(formattedData);
        };

        fetchHistoricalData();

        // update what happens when price change
        webSocket.current.onmessage = (e) => {
            // convert obj
            let data = JSON.parse(e.data);

            // check to make sure its ticker event
            if (data.type !== "ticker") {
                return;
            }

            // make sure matches current pair
            if (data.product_id === pair) {
                // update current price 
                setprice(data.price);
            }
        };
    }, [pair]); // only runs when we get a pair update 


    // Event handler
    const handleSelect = (e) => {

        // unsubscribe from coin we were on before 
        let unsubscribeMessage = {
            type: "unsubscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        // send 
        let unsubscribe = JSON.stringify(unsubscribeMessage);

        // send message to coinbase to unsubscribe
        webSocket.current.send(unsubscribe);

        // activate our hook thats listening for pair state change 
        setpair(e.target.value);
    };

    return (
        <>
            <Card>
                <Card.Header><h4>Cryptocurrency Charts</h4></Card.Header>
                <Card.Body >
                    <Card.Body >
                        {
                            <select backgroundcolor='blue' value={pair} onChange={handleSelect}>
                                {currencies.map((currency, idx) => {
                                    return (
                                        <option key={idx} value={currency.id}>
                                            {currency.display_name}
                                        </option>
                                    );
                                })}
                            </select>
                        }
                    </Card.Body>
                    <Card.Body className="text-center mb-3">
                        <CryptoChartHeader price={price} data={pastData} />
                    </Card.Body>
                </Card.Body>
            </Card>
        </>
    );
}