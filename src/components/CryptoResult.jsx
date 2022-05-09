import React from "react";
import propTypes from "prop-types";

class CryptoResult extends React.Component {

    render() {
        return(
            <div>
                {this.props.item}
                <button onClick={this.props.fetchCryptoInformation}>b</button>
            </div>
        )
    }
}

CryptoResult.propTypes = {
    item: propTypes.string.isRequired,
    fetchCryptoInformation: propTypes.func.isRequired,
}

export default CryptoResult;