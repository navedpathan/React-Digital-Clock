import React from 'react';

class Time extends React.Component {
    componentDidMount() {
        setInterval(() => {
            this.getTime();
        })
    }
    constructor() {
        super();
        this.state = {
            time: "00 : 00 : --",
        }
    }

    getTime() {
        setInterval(() => {
            let date = new Date();
            let hour = date.getHours();
            let minute = date.getMinutes();
            // let seconds = date.getSeconds();
            let ampm = hour <= 12 ? 'AM' : 'PM';
            let hr = hour <= 12 ? hour : hour - 12
            let fullHour = ((hr < 10 ? "0" : "") + hr);

            minute = fullTime(minute);
            // seconds = fullTime(seconds); 
            function fullTime(n) { return n < 10 ? "0" + n : n }
            
            this.setState({
                time: fullHour + " : " + minute + " " +
                    ampm,
            });

        }, 1000);
    }

    render() {
        return (
            <h2>
                {this.state.time}
            </h2>
        );
    }
};

export default Time
