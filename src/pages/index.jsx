const axios = require('axios');

export default function Home() {
  axios
    .get("https://api.nomics.com/v1/currencies/ticker?key=fef2e52bddb3338a1c392d574b1b5741df7a4b0d&ids=BTC,ETH,XRP&interval=2h,1h,1d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
    .then(response => console.log(response));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 italic">
      test
      </div>
  )
}