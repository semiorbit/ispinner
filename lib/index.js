import React from 'react';
import * as PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".ispinner {\r\n    position : relative;\r\n    width    : 20px;\r\n    height   : 20px\r\n}\r\n\r\n.ispinner .ispinner-blade {\r\n    position                     : absolute;\r\n    left                         : 44.5%;\r\n    top                          : 37%;\r\n    width                        : 10%;\r\n    height                       : 25%;\r\n    border-radius                : 50%/20%;\r\n    -webkit-animation            : ispinner-fade 1s linear infinite;\r\n    animation                    : ispinner-fade 1s linear infinite;\r\n    -webkit-animation-play-state : paused;\r\n    animation-play-state         : paused\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(1) {\r\n    -webkit-animation-delay : -1.66667s;\r\n    animation-delay         : -1.66667s;\r\n    -webkit-transform       : rotate(30deg) translate(0, -150%);\r\n    transform               : rotate(30deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(2) {\r\n    -webkit-animation-delay : -1.58333s;\r\n    animation-delay         : -1.58333s;\r\n    -webkit-transform       : rotate(60deg) translate(0, -150%);\r\n    transform               : rotate(60deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(3) {\r\n    -webkit-animation-delay : -1.5s;\r\n    animation-delay         : -1.5s;\r\n    -webkit-transform       : rotate(90deg) translate(0, -150%);\r\n    transform               : rotate(90deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(4) {\r\n    -webkit-animation-delay : -1.41667s;\r\n    animation-delay         : -1.41667s;\r\n    -webkit-transform       : rotate(120deg) translate(0, -150%);\r\n    transform               : rotate(120deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(5) {\r\n    -webkit-animation-delay : -1.33333s;\r\n    animation-delay         : -1.33333s;\r\n    -webkit-transform       : rotate(150deg) translate(0, -150%);\r\n    transform               : rotate(150deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(6) {\r\n    -webkit-animation-delay : -1.25s;\r\n    animation-delay         : -1.25s;\r\n    -webkit-transform       : rotate(180deg) translate(0, -150%);\r\n    transform               : rotate(180deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(7) {\r\n    -webkit-animation-delay : -1.16667s;\r\n    animation-delay         : -1.16667s;\r\n    -webkit-transform       : rotate(210deg) translate(0, -150%);\r\n    transform               : rotate(210deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(8) {\r\n    -webkit-animation-delay : -1.08333s;\r\n    animation-delay         : -1.08333s;\r\n    -webkit-transform       : rotate(240deg) translate(0, -150%);\r\n    transform               : rotate(240deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(9) {\r\n    -webkit-animation-delay : -1s;\r\n    animation-delay         : -1s;\r\n    -webkit-transform       : rotate(270deg) translate(0, -150%);\r\n    transform               : rotate(270deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(10) {\r\n    -webkit-animation-delay : -.91667s;\r\n    animation-delay         : -.91667s;\r\n    -webkit-transform       : rotate(300deg) translate(0, -150%);\r\n    transform               : rotate(300deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(11) {\r\n    -webkit-animation-delay : -.83333s;\r\n    animation-delay         : -.83333s;\r\n    -webkit-transform       : rotate(330deg) translate(0, -150%);\r\n    transform               : rotate(330deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner .ispinner-blade:nth-child(12) {\r\n    -webkit-animation-delay : -.75s;\r\n    animation-delay         : -.75s;\r\n    -webkit-transform       : rotate(360deg) translate(0, -150%);\r\n    transform               : rotate(360deg) translate(0, -150%)\r\n}\r\n\r\n.ispinner.animating .ispinner-blade {\r\n    -webkit-animation-play-state : running;\r\n    animation-play-state         : running\r\n}\r\n\r\n.ispinner.white .ispinner-blade {\r\n    background-color : #FFF\r\n}\r\n\r\n.ispinner.gray .ispinner-blade {\r\n    background-color : #8C8C8C\r\n}\r\n\r\n.ispinner.large {\r\n    width  : 35px;\r\n    height : 35px\r\n}\r\n\r\n.ispinner.large .ispinner-blade {\r\n    width         : 8.57143%;\r\n    height        : 25.71429%;\r\n    border-radius : 50%/16.67%\r\n}\r\n\r\n@-webkit-keyframes ispinner-fade {\r\n    0% {\r\n        opacity : .85\r\n    }\r\n    50% {\r\n        opacity : .25\r\n    }\r\n    100% {\r\n        opacity : .25\r\n    }\r\n}\r\n\r\n@keyframes ispinner-fade {\r\n    0% {\r\n        opacity : .85\r\n    }\r\n    50% {\r\n        opacity : .25\r\n    }\r\n    100% {\r\n        opacity : .25\r\n    }\r\n}";
styleInject(css_248z);

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
