import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getCryptoInformation } from '../sara/action/watcherActions';
import CryptoResult from '../components/CryptoResult';

const acceptedCryptos = ["ETH","ADA","BTC","SOL","EGLD","BNB","XRP","DOGE"];

class CrypoResulContainer extends React.Component {
    render() {
        return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[10%]">
            <h4 className="mt-6 text-3xl font-normal leading-normal mb-2 text-gray-800">
                CryptoWatcher
            </h4>
            {this.props.isFetched &&
                <CryptoResult
                    cryptoInformation={this.props.cryptoInformation}
                />
            }
            <div className="p-2 pt-6">
                <div className="group inline-block relative">
                    <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" >
                        <span className="mr-1">{this.props.cryptoInformation.name || 'Select'}</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </button>
                    <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                        {acceptedCryptos.map((element, i) => {
                            return (
                                <li key={element} className="">
                                    <a 
                                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" 
                                        onClick={(e) => this.props.fetchCryptoInformation(element)}
                                    >{element}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </aside>
        )
    }
}


function mapStateToProps(state) {
    return {
        cryptoInformation: state.watcherReducer.cryptoInformation,
        isFetched: state.watcherReducer.isFetched,
        
    }
}

function mapDispatchToProps(dispatch) {
    return {fetchCryptoInformation: bindActionCreators(getCryptoInformation, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CrypoResulContainer);