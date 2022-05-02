import React from 'react'

const date = () => {
    const dt = new Date();
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"];

    const fullDate = ((dt.getDate() < 10 ? "0" : "") + dt.getDate());
    const day = weekDays[dt.getDay()];
    const month = mon[dt.getMonth()];
    const year = dt.getFullYear()

    return (<>
        <div>
            <h1>
                {day}, {fullDate} {month} {year}
            </h1>
        </div>
    </>
    )
}

export default date

