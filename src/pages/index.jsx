const axios = require('axios');
import { useDispatch } from "react-redux";
import CryptoResultContainer from "../containers/CryptoResultContainer";
import { GET_CRYPTO_INFOMRATION } from '../sara/action/watcherActions';

export default function Home() {
  const dispatch = useDispatch();
  /*axios
    .get("https://api.nomics.com/v1/currencies/ticker?key=fef2e52bddb3338a1c392d574b1b5741df7a4b0d&ids=BTC,ETH,XRP&interval=2h,1h,1d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
    .then(response => console.log(response));
    */
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 italic">
      <CryptoResultContainer />
      test
      </div>
  )
}
