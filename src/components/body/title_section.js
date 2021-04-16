import React from 'react';
import './style/body.scss'

function TitleSection(props) {

    return (
        <div className="title__section__container">
            <div className="title__section">
                {props.name}
            </div>
        </div>
    );
}

export default TitleSection;