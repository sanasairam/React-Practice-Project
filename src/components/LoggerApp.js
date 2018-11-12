import React, { Component } from 'react';

function LoggerApp(WrappedComponent) {

    let originals = {};

    const methodsToLog = ["componentWillMount", "componentDidMount"];

    methodsToLog.forEach((method) => {
        if (WrappedComponent.prototype[method]) {

            originals[method] = WrappedComponent.prototype[method];
            console.log("method in option", originals);
        }

        

        WrappedComponent.prototype[method] = function (...args) {
            let original = originals[method];

            console.groupCollapsed(`${WrappedComponent.displayName} called ${method}`);

            console.groupEnd();

            if(original){
                original = original.bind(this);
                original(...args);
            }
        }
    });

    return class extends Component {

        render() {
            return (

                <div>
                    <h1>{LoggerApp.displayName} is now logiffied</h1>
                    <WrappedComponent  {...this.props} />
                </div>

            );
        }
    }
};

LoggerApp.displayName = "loggfiedSairam";

export default LoggerApp;