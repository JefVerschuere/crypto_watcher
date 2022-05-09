import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getCryptoInformation } from '../sara/action/watcherActions';
import CryptoResult from '../components/CryptoResult';


class CrypoResulContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCryptoInformation();
    }

    render() {
        return (
            <CryptoResult
                item={this.props.item}
                fetchCryptoInformation={this.props.fetchCryptoInformation}
            />
        )
    }
}


function mapStateToProps(state) {
    return {
        item: state.watcherReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {fetchCryptoInformation: bindActionCreators(getCryptoInformation, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CrypoResulContainer);