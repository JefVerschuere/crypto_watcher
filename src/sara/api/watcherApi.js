import axios from "axios";



export function getCryptoInformation(value) {
    return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=fef2e52bddb3338a1c392d574b1b5741df7a4b0d&ids=${value}&interval=1h,1d&convert=EUR&per-page=100&page=1`)
}
