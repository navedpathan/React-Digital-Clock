// import React from 'react'
// import { useState } from 'react'

// export default function Time() {
//     const [state, setState] = useState("00 : 00 : 00 : AM")

//         setInterval(() => {
//             let dt = new Date();
//             let hour = dt.getHours();
//             let minute = dt.getMinutes();
//             let seconds = dt.getSeconds();
//             let ampm = this.hour >= 12 ? 'AM' : 'PM';
//             hour = hour % 12;
//             hour = hour ? hour : 12;
//             hour = fullTime(hour);
//             minute = fullTime(minute);
//             seconds = fullTime(seconds); 
//             setState({
//                 time: hour + " : " + minute + " : " + seconds
//                  + " " + 
//              ampm,
//             });
//             function fullTime(n) { return n < 10 ? "0" + n : n }

//         }, 1000);


//       return (
//            <h1>{state}</h1>
//            )
// }

import React from 'react'
import { useState } from 'react'

export default function Time() {
    const [state, setState] = useState("00 : 00 : 00 : --")

    setInterval(() => {
        let dt = new Date();
        let hour = dt.getHours();
        let minute = dt.getMinutes();
        let seconds = dt.getSeconds();
        let ampm = hour <= 12 ? 'AM' : 'PM';
        let hr = hour <= 12 ? hour : hour - 12
        let fullHour = ((hr < 10 ? "0" : "") + hr);

        minute = fullTime(minute);
        seconds = fullTime(seconds);
        function fullTime(n) { return n < 10 ? "0" + n : n }

        setState({
            time: fullHour + " : " + minute + " : " + seconds + " " + ampm,
        });

    }, 1000);


    return (
        <h1>
            {state.time}
        </h1>
    )
}

