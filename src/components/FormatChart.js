// Format crypto graphs
export const formatChart = (data) => {
  let finalData = {
    labels: [],
    datasets: [
      {
        label: "USD price",
        data: [],
        backgroundColor: "rgb(114, 99, 230, 0.8)",
        borderColor: "rgba(152, 141, 242, 0.2)",
        fill: false
      }
    ]
  };

  // format date data coming in from coinbase api 
  let dates = data.map((val) => {
    const ts = val[0];
    let date = new Date(ts * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();


    let final = `${month}-${day}-${year}`;
    return final;
  });

  // grab return values from coinbase api 
  let priceArr = data.map((val) => {
    return val[4];
  });

  // reverse prices and dates 
  // this will ensure it goes from past to present 
  priceArr.reverse();
  dates.reverse();

  // set labels to dates
  finalData.labels = dates;

  // set data to prices 
  finalData.datasets[0].data = priceArr;

  return finalData;
};


