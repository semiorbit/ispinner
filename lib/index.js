import React from 'react';
import * as PropTypes from 'prop-types';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

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

var css_248z = ".ISpinner-module_ISpinner__s-v31 {\n  position: relative;\n  width: 20px;\n  height: 20px;\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt {\n  position: absolute;\n  left: 44.5%;\n  top: 37%;\n  width: 10%;\n  height: 25%;\n  border-radius: 50%/20%;\n  -webkit-animation: ISpinner-module_ISpinnerFade__vuq-p 1s linear infinite;\n  animation: ISpinner-module_ISpinnerFade__vuq-p 1s linear infinite;\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(1) {\n  -webkit-animation-delay: -1.66667s;\n  animation-delay: -1.66667s;\n  -webkit-transform: rotate(30deg) translate(0, -150%);\n  transform: rotate(30deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(2) {\n  -webkit-animation-delay: -1.58333s;\n  animation-delay: -1.58333s;\n  -webkit-transform: rotate(60deg) translate(0, -150%);\n  transform: rotate(60deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(3) {\n  -webkit-animation-delay: -1.5s;\n  animation-delay: -1.5s;\n  -webkit-transform: rotate(90deg) translate(0, -150%);\n  transform: rotate(90deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(4) {\n  -webkit-animation-delay: -1.41667s;\n  animation-delay: -1.41667s;\n  -webkit-transform: rotate(120deg) translate(0, -150%);\n  transform: rotate(120deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(5) {\n  -webkit-animation-delay: -1.33333s;\n  animation-delay: -1.33333s;\n  -webkit-transform: rotate(150deg) translate(0, -150%);\n  transform: rotate(150deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(6) {\n  -webkit-animation-delay: -1.25s;\n  animation-delay: -1.25s;\n  -webkit-transform: rotate(180deg) translate(0, -150%);\n  transform: rotate(180deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(7) {\n  -webkit-animation-delay: -1.16667s;\n  animation-delay: -1.16667s;\n  -webkit-transform: rotate(210deg) translate(0, -150%);\n  transform: rotate(210deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(8) {\n  -webkit-animation-delay: -1.08333s;\n  animation-delay: -1.08333s;\n  -webkit-transform: rotate(240deg) translate(0, -150%);\n  transform: rotate(240deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(9) {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n  -webkit-transform: rotate(270deg) translate(0, -150%);\n  transform: rotate(270deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(10) {\n  -webkit-animation-delay: -0.91667s;\n  animation-delay: -0.91667s;\n  -webkit-transform: rotate(300deg) translate(0, -150%);\n  transform: rotate(300deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(11) {\n  -webkit-animation-delay: -0.83333s;\n  animation-delay: -0.83333s;\n  -webkit-transform: rotate(330deg) translate(0, -150%);\n  transform: rotate(330deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31 .ISpinner-module_ISpinnerBlade__EqgAt:nth-child(12) {\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n  -webkit-transform: rotate(360deg) translate(0, -150%);\n  transform: rotate(360deg) translate(0, -150%);\n}\n.ISpinner-module_ISpinner__s-v31.ISpinner-module_Animating__jpwGG .ISpinner-module_ISpinnerBlade__EqgAt {\n  -webkit-animation-play-state: running;\n  animation-play-state: running;\n}\n.ISpinner-module_ISpinner__s-v31.ISpinner-module_White__sYox8 .ISpinner-module_ISpinnerBlade__EqgAt {\n  background-color: #FFF;\n}\n.ISpinner-module_ISpinner__s-v31.ISpinner-module_Gray__A1Poz .ISpinner-module_ISpinnerBlade__EqgAt {\n  background-color: #8C8C8C;\n}\n.ISpinner-module_ISpinner__s-v31.ISpinner-module_Large__hr4Km {\n  width: 35px;\n  height: 35px;\n}\n.ISpinner-module_ISpinner__s-v31.ISpinner-module_Large__hr4Km .ISpinner-module_ISpinnerBlade__EqgAt {\n  width: 8.57143%;\n  height: 25.71429%;\n  border-radius: 50%/16.67%;\n}\n\n@-webkit-keyframes ISpinner-module_ISpinnerFade__vuq-p {\n  0% {\n    opacity: 0.85;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}\n@keyframes ISpinner-module_ISpinnerFade__vuq-p {\n  0% {\n    opacity: 0.85;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 0.25;\n  }\n}";
var styles = {"ISpinner":"ISpinner-module_ISpinner__s-v31","ISpinnerBlade":"ISpinner-module_ISpinnerBlade__EqgAt","ISpinnerFade":"ISpinner-module_ISpinnerFade__vuq-p","Animating":"ISpinner-module_Animating__jpwGG","White":"ISpinner-module_White__sYox8","Gray":"ISpinner-module_Gray__A1Poz","Large":"ISpinner-module_Large__hr4Km"};
styleInject(css_248z);

var _excluded = ["animating", "size", "large", "white", "color", "className", "style"];
var ISpinner = function ISpinner(props) {
  var animating = props.animating,
    size = props.size,
    large = props.large,
    white = props.white,
    color = props.color,
    className = props.className,
    style = props.style,
    otherProps = _objectWithoutProperties(props, _excluded);
  var spinnerStyle = size ? {
    width: size.toString() + 'px',
    height: size.toString() + 'px'
  } : {};
  var bladeStyle = color ? {
    backgroundColor: color
  } : {};

  // noinspection CheckTagEmptyBody
  return /*#__PURE__*/React.createElement("div", _extends({}, otherProps, {
    className: [styles.ISpinner, animating ? styles.Animating : '', large || props.size >= 35 ? styles.Large : '', white ? styles.White : styles.Gray, className].join(' '),
    style: Object.assign(spinnerStyle, style)
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.ISpinnerBlade,
    style: bladeStyle
  }));
};
ISpinner.defaultProps = {
  color: '',
  white: false,
  large: false,
  animating: true,
  style: {}
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

export { ISpinner as default };
