import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Card, Form, Button } from "react-bootstrap"

// header for crypto graph
export default function CryptoChartHeader({ price, data }) {

  // config
  const options = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // header for no coin selected
  if (price === "0.00") {
    return (
      <>
        <Card.Body>
          <Card.Text style={{ fontSize: '1.4em' }} > Select a cryptocurrency to see todays live price in USD and its price chart </Card.Text>
        </Card.Body>
      </>
    );
  }

  // what happens if coin is selected
  return (
    <>
      <Card.Body >

        <Card.Text style={{ fontSize: '1.6em' }}>{` Live Price: $${price}`}</Card.Text>

        <Card.Body className="text-center" style={{ flexdirection: 'column', alignitems: 'center', }}>
          <div display="flex">
            <Line data={data} options={options} />
          </div>
        </Card.Body>

      </Card.Body>
    </>
  );
}

