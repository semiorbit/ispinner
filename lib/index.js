import React from 'react';
import * as PropTypes from 'prop-types';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var style = '.ISpinner {  position: relative;  width: 20px;  height: 20px;}.ISpinner .ISpinnerBlade {  position: absolute;  left: 44.5%;  top: 37%;  width: 10%;  height: 25%;  border-radius: 50%/20%;  -webkit-animation: ISpinnerFade 1s linear infinite;  animation: ISpinnerFade 1s linear infinite;  -webkit-animation-play-state: paused;  animation-play-state: paused;}.ISpinner .ISpinnerBlade:nth-child(1) {  -webkit-animation-delay: -1.66667s;  animation-delay: -1.66667s;  -webkit-transform: rotate(30deg) translate(0, -150%);  transform: rotate(30deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(2) {  -webkit-animation-delay: -1.58333s;  animation-delay: -1.58333s;  -webkit-transform: rotate(60deg) translate(0, -150%);  transform: rotate(60deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(3) {  -webkit-animation-delay: -1.5s;  animation-delay: -1.5s;  -webkit-transform: rotate(90deg) translate(0, -150%);  transform: rotate(90deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(4) {  -webkit-animation-delay: -1.41667s;  animation-delay: -1.41667s;  -webkit-transform: rotate(120deg) translate(0, -150%);  transform: rotate(120deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(5) {  -webkit-animation-delay: -1.33333s;  animation-delay: -1.33333s;  -webkit-transform: rotate(150deg) translate(0, -150%);  transform: rotate(150deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(6) {  -webkit-animation-delay: -1.25s;  animation-delay: -1.25s;  -webkit-transform: rotate(180deg) translate(0, -150%);  transform: rotate(180deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(7) {  -webkit-animation-delay: -1.16667s;  animation-delay: -1.16667s;  -webkit-transform: rotate(210deg) translate(0, -150%);  transform: rotate(210deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(8) {  -webkit-animation-delay: -1.08333s;  animation-delay: -1.08333s;  -webkit-transform: rotate(240deg) translate(0, -150%);  transform: rotate(240deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(9) {  -webkit-animation-delay: -1s;  animation-delay: -1s;  -webkit-transform: rotate(270deg) translate(0, -150%);  transform: rotate(270deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(10) {  -webkit-animation-delay: -0.91667s;  animation-delay: -0.91667s;  -webkit-transform: rotate(300deg) translate(0, -150%);  transform: rotate(300deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(11) {  -webkit-animation-delay: -0.83333s;  animation-delay: -0.83333s;  -webkit-transform: rotate(330deg) translate(0, -150%);  transform: rotate(330deg) translate(0, -150%);}.ISpinner .ISpinnerBlade:nth-child(12) {  -webkit-animation-delay: -0.75s;  animation-delay: -0.75s;  -webkit-transform: rotate(360deg) translate(0, -150%);  transform: rotate(360deg) translate(0, -150%);}.ISpinner.Animating .ISpinnerBlade {  -webkit-animation-play-state: running;  animation-play-state: running;}.ISpinner.White .ISpinnerBlade {  background-color: #FFF;}.ISpinner.Gray .ISpinnerBlade {  background-color: #8C8C8C;}.ISpinner.Large {  width: 35px;  height: 35px;}.ISpinner.Large .ISpinnerBlade {  width: 8.57143%;  height: 25.71429%;  border-radius: 50%/16.67%;}@-webkit-keyframes ISpinnerFade {  0% {    opacity: 0.85;  }  50% {    opacity: 0.25;  }  100% {    opacity: 0.25;  }}@keyframes ISpinnerFade {  0% {    opacity: 0.85;  }  50% {    opacity: 0.25;  }  100% {    opacity: 0.25;  }}';

var ISpinner = function ISpinner(props) {
  var spinnerStyle = props.size ? {
    width: props.size.toString() + 'px',
    height: props.size.toString() + 'px'
  } : {};
  var bladeStyle = props.color ? {
    backgroundColor: props.color
  } : {}; // noinspection CheckTagEmptyBody

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: [style.ISpinner, props.animating ? style.Animating : '', props.large || props.size >= 35 ? style.Large : '', props.white ? style.White : style.Gray, props.className].join(' '),
    style: spinnerStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: style.ISpinnerBlade,
    style: bladeStyle
  }));
};

ISpinner.defaultProps = {
  color: '',
  white: false,
  large: false,
  animating: true
};
ISpinner.propTypes = {
  white: PropTypes.bool,
  large: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  animating: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default ISpinner;
