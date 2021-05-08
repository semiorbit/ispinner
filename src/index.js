import React from 'react';
import styles from "./ISpinner.module.scss";
import * as PropTypes from "prop-types";
const ISpinner = props => {

    const {animating, size, large, white, color, className, style, ...otherProps} = props;

    const spinnerStyle = size ? {
        width: size.toString() + 'px',
        height: size.toString() + 'px'
    } : {};

    const bladeStyle = color ? {
        backgroundColor: color
    } : {};

    // noinspection CheckTagEmptyBody
    return (
        <div
            {...otherProps}
            className={[
                styles.ISpinner,
                animating ? styles.Animating : '',
                large || props.size >= 35 ? styles.Large : '',
                white ? styles.White : styles.Gray,
                className
            ].join(' ')}
            style={Object.assign(spinnerStyle, style)}
        >
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
            <div className={styles.ISpinnerBlade} style={bladeStyle}></div>
        </div>
    );

};

ISpinner.defaultProps = {
    color: '',
    white: false,
    large: false,
    animating: true,
    style: {}
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
