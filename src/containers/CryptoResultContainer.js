import React from 'react';
import { connect } from 'react-redux';
import CryptoResult from '../components/CryptoResult';


class CrypoResulContainer extends React.Component {
    componentDidMount() {
        console.log("component is mounted !")
    }

    render() {
        return (
            <CryptoResult
                item={this.props.item}
            />
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        item: state.watcherReducer,
    }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(CrypoResulContainer);