import React, { Component } from 'react'
import Widget from 'rasa-webchat';

export default class Rasa extends Component {
    render() {
        return (
            <div>
                    <Widget
      initPayload={"/get_started"}
      socketUrl={"https://bf-botfront.development.agents.botfront.cloud"}
      socketPath={"/socket.io/"}
      customData={{"language": "en"}} // arbitrary custom data. Stay minimal as this will be added to the socket
      title={"Title"}
    />
            </div>
        )
    }
}
