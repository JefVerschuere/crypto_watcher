import React from "react";
import propTypes from "prop-types";
import numeral from "numeral";

class CryptoResult extends React.Component {

    render() {
        let information = this.props.cryptoInformation;
        return(
            <div>
                <div className="flex justify-center mt-10">
                    <img className="w-24 h-24 rounded-full mx-auto" src={information.logo_url} alt="logo not found" width="384" height="512" />
                </div>

                <div className="text-center mt-2">
                    <h1 className="text-gray-900 font-bold text-2xl">{information.name}</h1>
                    <p className="text-gray-500 mt-3">
                        Price now
                    </p>
                    <div className="py-8 border-b border-indigo-50 mr-2 ml-2">
                        {numeral(information.price).format('0.00')} €
                    </div>
                </div>
            </div>
        )
    }
}

CryptoResult.propTypes = {
    cryptoInformation: propTypes.shape().isRequired,
}

export default CryptoResult;