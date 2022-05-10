import React from "react";
import propTypes from "prop-types";
import numeral from "numeral";

class TwitterResult extends React.Component {

    render() {
        let information = this.props.twitterInformation;
        console.log(information)
        return(
            <>
            {this.props.isTwitterFetched &&
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    tweet
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    likes
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    retweets
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {information.result.map((element, i) => {
                                return (
                                    <tr key={element.name} className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {element.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {element.tweet}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.likes}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.retweets}
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                }
            </>
        )
    }
}

TwitterResult.propTypes = {
    twitterInformation: propTypes.shape().isRequired,
    isTwitterFetched: propTypes.bool.isRequired
}

export default TwitterResult;