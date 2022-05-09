const axios = require('axios');
import { useDispatch } from "react-redux";
import CryptoResultContainer from "../containers/CryptoResultContainer";
import SideBarContainer from "../containers/sideBarContainer";

export default function Home() {
  return (
    <div>
      <SideBarContainer />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 italic">

      <CryptoResultContainer />
      </div>
    </div>

  )
}
