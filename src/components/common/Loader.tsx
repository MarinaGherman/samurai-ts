import React from 'react';
import loader from './../../assets/images/loader.gif'

const Loader = () => {
    return (
        <div>
            <img style={{width: '50px'}} src={loader} alt="loader"/>
        </div>
    );
};

export default Loader;