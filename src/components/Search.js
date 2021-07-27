import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardGroup, Alert, Button } from "react-bootstrap"

const Coin = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
  }) => {
    return (
      
      <div className='coin-container'>
        <div className='coin-row'>
          <div className='coin'>
          <CardGroup style={{width: '81rem'}}>
            <Card>
              <Card.Footer style={{height: '4rem'}}>
                <h6><img src={image} alt='crypto' width="20%"/>   {name}</h6>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Footer style={{height: '4rem'}}>
                <small  class="text-uppercase">{symbol}</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Footer style={{height: '4rem'}}>
                <small>${price}</small>
              </Card.Footer>
              </Card>
              <Card>
              <Card.Footer style={{height: '4rem'}}>
                <small>${volume.toLocaleString()}</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Footer style={{height: '4rem'}}>
                <small>{priceChange < 0 ? (
                  <p className='text-danger'>{priceChange.toFixed(2)}%</p>
                    ) : (
                  <p className='text-success'>+{priceChange.toFixed(2)}%</p>
                    )}</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Footer style={{height: '4rem'}}>
                <small>${marketcap.toLocaleString()}</small>
              </Card.Footer>
            </Card>
          </CardGroup>  
          </div>
        </div>
      </div>
    );
  };

export const Search = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=225&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
    <div className='coin-app'>
      <div className='coin-search'>
      <Card.Header as="h4"> Cryptocurrency Search</Card.Header> 
      <br></br>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
        <br></br>
        <CardGroup style={{width: '81rem'}}>
          <Card>
            <Card.Header>
              <h6>Coin</h6>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <h6>Symbol</h6>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <h6>Coin Price</h6>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <h6>Coin Volume</h6>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <h6>Percent Change</h6>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <h6>Market Cap</h6>
            </Card.Header>
          </Card>
        </CardGroup>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Card><Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          /></Card>
        );
      })}
    </div>
  );
}

