import React from 'react';

const Services = (props) => {
    return (
        <div>
             <div className='container-services'>
                    <span class="material-symbols-outlined">{props.image}</span>
                    <h3>{props.heading}</h3>
                    <p>{props.paragraph}</p>
                </div>
        </div>
    );
}

export default Services;
