import React from "react";

class App extends React.Component {
    constructor() {
        super();

        const dt = new Date();
        const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];

        const fullDate = ((dt.getDate() < 10 ? "0" : "") + dt.getDate());
        const day = weekDays[dt.getDay()];
        const month = mon[dt.getMonth()];
        const year = dt.getFullYear(),

        date = day + ', ' + fullDate + ' ' + month + ' ' + year;

        this.state = {
            date: date
        };
    }

    render() {
        return (<>
            <div>
                <h2>
                    {this.state.date}
                </h2>
            </div>
        </>
        );
    }
}
export default App