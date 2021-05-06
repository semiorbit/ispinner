import React from 'react';
import * as PropTypes from 'prop-types';

var ISpinner = function ISpinner(props) {
  var style = props.size ? {
    width: props.size.toString() + 'px',
    height: props.size.toString() + 'px'
  } : {};
  var bladeStyle = props.color ? {
    backgroundColor: props.color
  } : {}; // noinspection CheckTagEmptyBody

  return /*#__PURE__*/React.createElement("div", {
    className: ["ispinner", props.animating ? 'animating' : '', props.large || props.size >= 35 ? 'large' : '', props.white ? 'white' : 'gray', props.className].join(' '),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: "ispinner-blade",
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
