import React from 'react';
import style from "./ISpinner.module.scss";
import * as PropTypes from "prop-types";
const ISpinner = props => {

    const spinnerStyle = props.size ? {
        width: props.size.toString() + 'px',
        height: props.size.toString() + 'px'
    } : {};

    const bladeStyle = props.color ? {
        backgroundColor: props.color
    } : {};

    // noinspection CheckTagEmptyBody
    return (
        <div
            {...props}
            className={[
                style.ISpinner,
                props.animating ? style.Animating : '',
                props.large || props.size >= 35 ? style.Large : '',
                props.white ? style.White : style.Gray,
                props.className
            ].join(' ')}
            style={spinnerStyle}
        >
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
            <div className={style.ISpinnerBlade} style={bladeStyle}></div>
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
