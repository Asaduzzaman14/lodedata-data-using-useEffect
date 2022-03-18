import React, { useState } from 'react';
import './Country.css'
const Country = (props) => {
    const [count, setCount] = useState(1)

    const boostPower = () => {
        const newPewer = count * 2
        setCount(newPewer)
    }

    return (
        <div className='distric'>
            <h2>Bivag name: {props.name}</h2>
            <h3>Distric: {props.dist}</h3>
            <p>power :{count}</p>
            <button onClick={boostPower} className='btn'>Bost Power  </button>

        </div>
    );
};

export default Country;