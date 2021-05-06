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

var style = ".ISpinner {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n.ISpinner .ISpinnerBlade {\n  position: absolute;\n  left: 44.5%;\n  top: 37%;\n  width: 10%;\n  height: 25%;\n  border-radius: 50%/20%;\n  -webkit-animation: ISpinnerFade 1s linear infinite;\n  animation: ISpinnerFade 1s linear infinite;\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n.ISpinner .ISpinnerBlade:nth-child(1) {\n  -webkit-animation-delay: -1.66667s;\n  animation-delay: -1.66667s;\n  -webkit-transform: rotate(30deg) translate(0, -150%);\n  transform: rotate(30deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(2) {\n  -webkit-animation-delay: -1.58333s;\n  animation-delay: -1.58333s;\n  -webkit-transform: rotate(60deg) translate(0, -150%);\n  transform: rotate(60deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(3) {\n  -webkit-animation-delay: -1.5s;\n  animation-delay: -1.5s;\n  -webkit-transform: rotate(90deg) translate(0, -150%);\n  transform: rotate(90deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(4) {\n  -webkit-animation-delay: -1.41667s;\n  animation-delay: -1.41667s;\n  -webkit-transform: rotate(120deg) translate(0, -150%);\n  transform: rotate(120deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(5) {\n  -webkit-animation-delay: -1.33333s;\n  animation-delay: -1.33333s;\n  -webkit-transform: rotate(150deg) translate(0, -150%);\n  transform: rotate(150deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(6) {\n  -webkit-animation-delay: -1.25s;\n  animation-delay: -1.25s;\n  -webkit-transform: rotate(180deg) translate(0, -150%);\n  transform: rotate(180deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(7) {\n  -webkit-animation-delay: -1.16667s;\n  animation-delay: -1.16667s;\n  -webkit-transform: rotate(210deg) translate(0, -150%);\n  transform: rotate(210deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(8) {\n  -webkit-animation-delay: -1.08333s;\n  animation-delay: -1.08333s;\n  -webkit-transform: rotate(240deg) translate(0, -150%);\n  transform: rotate(240deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(9) {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n  -webkit-transform: rotate(270deg) translate(0, -150%);\n  transform: rotate(270deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(10) {\n  -webkit-animation-delay: -0.91667s;\n  animation-delay: -0.91667s;\n  -webkit-transform: rotate(300deg) translate(0, -150%);\n  transform: rotate(300deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(11) {\n  -webkit-animation-delay: -0.83333s;\n  animation-delay: -0.83333s;\n  -webkit-transform: rotate(330deg) translate(0, -150%);\n  transform: rotate(330deg) translate(0, -150%);\n}\n.ISpinner .ISpinnerBlade:nth-child(12) {\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n  -webkit-transform: rotate(360deg) translate(0, -150%);\n  transform: rotate(360deg) translate(0, -150%);\n}\n.ISpinner.Animating .ISpinnerBlade {\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n.ISpinner.White .ISpinnerBlade {\n  background-color: #FFF;\n}\n.ISpinner.Gray .ISpinnerBlade {\n  background-color: #8C8C8C;\n}\n.ISpinner.Large {\n  width: 35px;\n  height: 35px;\n}\n.ISpinner.Large .ISpinnerBlade {\n  width: 8.57143%;\n  height: 25.71429%;\n  border-radius: 50%/16.67%;\n}\n\n@-webkit-keyframes ISpinnerFade {\n  0% {\n    opacity: 0.85;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@keyframes ISpinnerFade {\n  0% {\n    opacity: 0.85;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}";

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
