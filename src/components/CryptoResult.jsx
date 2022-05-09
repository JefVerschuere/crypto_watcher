import React from "react";
import propTypes from "prop-types";

class CryptoResult extends React.Component {

    render() {
        return(
            <div>
                {this.props.item}
            </div>
        )
    }
}

CryptoResult.propTypes = {
    item: propTypes.string.isRequired,
}

export default CryptoResult;