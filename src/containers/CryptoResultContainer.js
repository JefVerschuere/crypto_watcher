import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getCryptoInformation } from '../sara/action/watcherActions';
import CryptoResult from '../components/CryptoResult';


class CrypoResulContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <CryptoResult
            cryptoInformation={this.props.cryptoInformation}
                fetchCryptoInformation={this.props.fetchCryptoInformation}
            />
        )
    }
}


function mapStateToProps(state) {
    return {
        cryptoInformation: state.watcherReducer.cryptoInformation,
    }
}

function mapDispatchToProps(dispatch) {
    return {fetchCryptoInformation: bindActionCreators(getCryptoInformation, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CrypoResulContainer);