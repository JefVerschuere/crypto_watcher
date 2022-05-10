import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getCryptoInformation } from '../sara/action/watcherActions';
import TwitterResult from '../components/TwitterResult';

class TwitterResultContainer extends React.Component {
    render() {
        return (
            <TwitterResult
                twitterInformation={this.props.twitterInformation}
                isTwitterFetched={this.props.isTwitterFetched}
            />
        )
    }
}


function mapStateToProps(state) {
    return {
        twitterInformation: state.watcherReducer.twitterInformation,
        isTwitterFetched: state.watcherReducer.isTwitterFetched,
    }
}

function mapDispatchToProps(dispatch) {
    return {fetchCryptoInformation: bindActionCreators(getCryptoInformation, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterResultContainer);