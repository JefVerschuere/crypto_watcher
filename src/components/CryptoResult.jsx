import React from "react";
import propTypes from "prop-types";

class CryptoResult extends React.Component {

    render() {
        return(
            <div>
                {this.props.item.cryptoName}
                <br />
            </div>
        )
    }
}

CryptoResult.propTypes = {
    item: propTypes.shape().isRequired,
    fetchCryptoInformation: propTypes.func.isRequired,
}

export default CryptoResult;