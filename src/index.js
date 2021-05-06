import React from 'react';
import "./ispinner.css";
import * as PropTypes from "prop-types";
const ISpinner = props => {

    const style = props.size ? {
        width: props.size.toString() + 'px',
        height: props.size.toString() + 'px'
    } : {};

    const bladeStyle = props.color ? {
        backgroundColor: props.color
    } : {};

    // noinspection CheckTagEmptyBody
    return (
        <div className={[
            "ispinner",
            props.animating ? 'animating' : '',
            props.large || props.size >= 35 ? 'large' : '',
            props.white ? 'white' : 'gray',
            props.className
        ].join(' ')}
             style={style}
        >
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
            <div className="ispinner-blade" style={bladeStyle}></div>
        </div>
    );

};

ISpinner.defaultProps = {
    color: '',
    white: false,
    large: false,
    animating: true
}

ISpinner.propTypes = {
    white: PropTypes.bool,
    large: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number,
    animating: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object
}

export default ISpinner;
