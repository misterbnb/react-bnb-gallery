import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { Portal } from 'react-portal';
import omit from 'lodash/omit';
import classnames from 'classnames';
import { forbidExtraProps, nonNegativeInteger } from 'airbnb-prop-types';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var DIRECTION_PREV = 'prev';
var DIRECTION_NEXT = 'next';
var FORWARDS = 'forwards';
var BACKWARDS = 'backwards';
var ARROW_LEFT_KEYCODE = 37;
var ARROW_RIGHT_KEYCODE = 39;
var ESC_KEYCODE = 27;
var THUMBNAIL_WIDTH = 100;
var THUMBNAIL_HEIGHT = 67;
var THUMBNAIL_OFFSET = 10;
var DEFAULT_OPACITY = 1;
var DEFAULT_COLOR = 'rgba(0,0,0,1)';
var NORMAL_COLOR = 'rgba(255,255,255,1)';
var INVERSE_COLOR = 'rgba(1,1,1,1)';
var DEFAULT_Z_INDEX = 2000;
var defaultPhotoProps = {
  photo: undefined,
  number: undefined,
  caption: undefined,
  subcaption: undefined,
  thumbnail: undefined
};

var SlideDirectionShape = PropTypes.oneOf([FORWARDS, BACKWARDS]);

var PhotoShape = PropTypes.shape({
  photo: PropTypes.string.isRequired,
  number: PropTypes.number,
  caption: PropTypes.string,
  subcaption: PropTypes.string,
  thumbnail: PropTypes.string
});

var PhotosShape = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.arrayOf(PhotoShape)]);

var noPhotosProvided = 'No photos to show';
var showPhotoList = 'Show photo list';
var hidePhotoList = 'Hide photo list';
var defaultPhrases = {
  noPhotosProvided: noPhotosProvided,
  showPhotoList: showPhotoList,
  hidePhotoList: hidePhotoList
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function defaultPhrases$1() {
  return Object.keys(defaultPhrases$1).reduce(function (phrases, key) {
    return _objectSpread({}, phrases, defineProperty({}, key, PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.node])));
  }, {});
}

var galleryPropTypes = forbidExtraProps({
  activePhotoIndex: nonNegativeInteger,
  activePhotoPressed: PropTypes.func,
  direction: SlideDirectionShape,
  nextButtonPressed: PropTypes.func,
  prevButtonPressed: PropTypes.func,
  showThumbnails: PropTypes.bool,
  photos: PhotosShape,
  preloadSize: nonNegativeInteger,
  wrap: PropTypes.bool,
  phrases: PropTypes.shape(defaultPhrases$1()),
  light: PropTypes.bool,
  backgroundColor: PropTypes.string,
  // custom props
  onThumbnailPress: PropTypes.func
});

var noop = (function () {});

var galleryDefaultProps = {
  activePhotoIndex: 0,
  activePhotoPressed: noop,
  direction: FORWARDS,
  nextButtonPressed: noop,
  prevButtonPressed: noop,
  showThumbnails: true,
  photos: [],
  preloadSize: 5,
  wrap: false,
  phrases: defaultPhrases,
  light: false,
  backgroundColor: DEFAULT_COLOR,
  // custom props
  onThumbnailPress: noop
};

var imagePropTypes = forbidExtraProps({
  onLoad: PropTypes.func,
  onError: PropTypes.func
});

var imageDefaultProps = {
  onLoad: noop,
  onError: noop
};

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

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
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

var objectWithoutProperties = _objectWithoutProperties;

var propTypes = forbidExtraProps({
  show: PropTypes.bool
});
var defaultProps = {
  show: true
};

var LoadingSpinner = function LoadingSpinner(_ref) {
  var show = _ref.show;
  return show && React.createElement("div", {
    className: "loading-spinner"
  });
};

LoadingSpinner.propTypes = propTypes;
LoadingSpinner.defaultProps = defaultProps;

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var propTypes$1 = forbidExtraProps(_objectSpread$1({}, imagePropTypes, {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}));

var defaultProps$1 = _objectSpread$1({}, imageDefaultProps, {
  style: null,
  className: null,
  alt: ''
});

var defaultState = {
  loading: true,
  withError: false
};

var Image =
/*#__PURE__*/
function (_Component) {
  inherits(Image, _Component);

  function Image(props) {
    var _this;

    classCallCheck(this, Image);

    _this = possibleConstructorReturn(this, getPrototypeOf(Image).call(this, props));
    var src = props.src;
    _this.state = _objectSpread$1({
      currentSrc: src
    }, defaultState);
    _this.onLoad = _this.onLoad.bind(assertThisInitialized(_this));
    _this.onError = _this.onError.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Image, [{
    key: "onLoad",
    value: function onLoad() {
      var _this2 = this;

      var onLoad = this.props.onLoad; // wait a bit to show the final picture

      setTimeout(function () {
        onLoad();

        _this2.setState({
          loading: false,
          withError: false
        });
      }, 100);
    }
  }, {
    key: "onError",
    value: function onError() {
      var onError = this.props.onError;
      onError();
      this.setState({
        loading: false,
        withError: true
      });
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var _this$props = this.props,
          alt = _this$props.alt,
          src = _this$props.src,
          style = _this$props.style,
          className = _this$props.className;
      var _this$state = this.state,
          loading = _this$state.loading,
          withError = _this$state.withError;
      var classNames = [className, 'media-image'];
      var components = []; // the loading spinner
      // TODO: make this 'LoadingSpinner' component customizable

      if (loading) {
        components.push(React.createElement(LoadingSpinner, {
          key: ".pictureLoadingSpinner"
        }));
      } // if no loading, then return the
      // picture only if no error ocurred


      if (!withError) {
        components.push(React.createElement("img", {
          alt: alt,
          key: ".pictureComponent",
          className: classnames(classNames),
          onLoad: this.onLoad,
          onError: this.onError,
          src: src,
          style: style
        }));
      } // TODO: show a custom message indicating the
      // error ocurred while loading the picture


      return components;
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      var wrapperClassNames = ['picture', loading && 'loading']; // render the picture element

      var picture = this.renderImage();
      return React.createElement("div", {
        className: classnames(wrapperClassNames)
      }, picture);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var src = nextProps.src;
      var currentSrc = prevState.currentSrc;

      if (src !== currentSrc) {
        return _objectSpread$1({
          currentSrc: src
        }, defaultState);
      }

      return null;
    }
  }]);

  return Image;
}(Component);

Image.propTypes = propTypes$1;
Image.defaultProps = defaultProps$1;

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var propTypes$2 = forbidExtraProps(_objectSpread$2({}, imagePropTypes, {
  photo: PhotoShape,
  onPress: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchEnd: PropTypes.func
}));

var defaultProps$2 = _objectSpread$2({}, imageDefaultProps, {
  photo: null,
  onPress: noop,
  onTouchStart: noop,
  onTouchMove: noop,
  onTouchEnd: noop
});

var Photo =
/*#__PURE__*/
function (_PureComponent) {
  inherits(Photo, _PureComponent);

  function Photo(props) {
    var _this;

    classCallCheck(this, Photo);

    _this = possibleConstructorReturn(this, getPrototypeOf(Photo).call(this, props));
    _this.onPress = _this.onPress.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Photo, [{
    key: "onPress",
    value: function onPress() {
      var onPress = this.props.onPress;
      onPress();
    }
  }, {
    key: "renderPhoto",
    value: function renderPhoto() {
      var _this$props = this.props,
          photo = _this$props.photo,
          onTouchStart = _this$props.onTouchStart,
          onTouchMove = _this$props.onTouchMove,
          onTouchEnd = _this$props.onTouchEnd,
          rest = objectWithoutProperties(_this$props, ["photo", "onTouchStart", "onTouchMove", "onTouchEnd"]);

      if (!photo) {
        return null;
      }

      var _omit = omit(rest, ['onPress']),
          onLoad = _omit.onLoad,
          onError = _omit.onError,
          style = _omit.style;

      return React.createElement("button", {
        type: "button",
        onClick: this.onPress,
        className: "photo-button",
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd
      }, React.createElement(Image, {
        alt: photo.caption || '',
        className: "photo",
        src: photo.photo,
        onLoad: onLoad,
        onError: onError,
        style: style
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var className = classnames('gallery-media-photo', 'gallery-media-photo--block', 'gallery-media-cover');
      var photoRendered = this.renderPhoto();
      return React.createElement("ul", {
        className: "gallery-images--ul"
      }, React.createElement("li", {
        className: className
      }, photoRendered));
    }
  }]);

  return Photo;
}(PureComponent);

Photo.propTypes = propTypes$2;
Photo.defaultProps = defaultProps$2;

var DimensionsShape = PropTypes.shape({
  height: PropTypes.number,
  width: PropTypes.number
});

var thumbnailStyle = {
  width: THUMBNAIL_WIDTH,
  height: THUMBNAIL_HEIGHT
};
var propTypes$3 = forbidExtraProps({
  active: PropTypes.bool,
  photo: PhotoShape,
  onPress: PropTypes.func,
  number: nonNegativeInteger,
  dimensions: DimensionsShape
});
var defaultProps$3 = {
  active: false,
  photo: null,
  onPress: noop,
  number: 0,
  dimensions: {
    height: 0,
    width: 0
  }
};

var Thumbnail =
/*#__PURE__*/
function (_PureComponent) {
  inherits(Thumbnail, _PureComponent);

  function Thumbnail() {
    classCallCheck(this, Thumbnail);

    return possibleConstructorReturn(this, getPrototypeOf(Thumbnail).apply(this, arguments));
  }

  createClass(Thumbnail, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          photo = _this$props.photo,
          onPress = _this$props.onPress,
          _onLoad = _this$props.onLoad,
          number = _this$props.number;
      var className = classnames('thumbnail-button', active && 'active');
      return React.createElement("button", {
        type: "button",
        "aria-label": photo.caption,
        className: className,
        "data-photo-index": number,
        onClick: onPress,
        disabled: false
      }, React.createElement(Image, {
        alt: photo.caption,
        src: photo.thumbnail || photo.photo,
        className: "thumbnail",
        style: thumbnailStyle,
        onLoad: function onLoad(e) {
          return _onLoad(e, number);
        }
      }));
    }
  }]);

  return Thumbnail;
}(PureComponent);

Thumbnail.propTypes = propTypes$3;
Thumbnail.defaultProps = defaultProps$3;

var propTypes$4 = forbidExtraProps({
  isOpened: PropTypes.bool,
  onPress: PropTypes.func,
  phrases: PropTypes.shape(defaultPhrases$1())
});
var defaultProps$4 = {
  isOpened: true,
  onPress: noop,
  phrases: defaultPhrases
};

var TogglePhotoList =
/*#__PURE__*/
function (_PureComponent) {
  inherits(TogglePhotoList, _PureComponent);

  function TogglePhotoList() {
    classCallCheck(this, TogglePhotoList);

    return possibleConstructorReturn(this, getPrototypeOf(TogglePhotoList).apply(this, arguments));
  }

  createClass(TogglePhotoList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isOpened = _this$props.isOpened,
          onPress = _this$props.onPress,
          _this$props$phrases = _this$props.phrases,
          showLabel = _this$props$phrases.showPhotoList,
          hideLabel = _this$props$phrases.hidePhotoList;
      var label = isOpened ? hideLabel : showLabel;
      var className = classnames('gallery-thumbnails--toggle', isOpened ? 'hide' : 'open');
      return React.createElement("button", {
        type: "button",
        className: className,
        onClick: onPress
      }, label);
    }
  }]);

  return TogglePhotoList;
}(PureComponent);

TogglePhotoList.propTypes = propTypes$4;
TogglePhotoList.defaultProps = defaultProps$4;

function calculateThumbnailsContainerDimension(total) {
  return THUMBNAIL_WIDTH * total + (THUMBNAIL_OFFSET * total - THUMBNAIL_OFFSET);
}

function calculateThumbnailsLeftScroll(current, total, bounding) {
  var half = bounding.width / 2 - THUMBNAIL_WIDTH / 2;
  var thumbnailsOffset = current * THUMBNAIL_WIDTH + current * THUMBNAIL_OFFSET - half;
  var calculatedScrollLeft = 0;

  if (thumbnailsOffset < 0) {
    return calculatedScrollLeft;
  }

  var thumbnailsPerRow = bounding.width / (THUMBNAIL_WIDTH + THUMBNAIL_OFFSET);
  var thumbnailsHalf = Math.round(thumbnailsPerRow / 2);
  var thumbnailsLeft = total - (current + 1);

  if (thumbnailsLeft < thumbnailsHalf) {
    calculatedScrollLeft = calculateThumbnailsContainerDimension(total) - bounding.width;
  } else {
    calculatedScrollLeft = thumbnailsOffset;
  }

  return -Math.abs(calculatedScrollLeft);
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var propTypes$5 = forbidExtraProps({
  showThumbnails: PropTypes.bool,
  current: nonNegativeInteger,
  photos: PhotosShape,
  onPress: PropTypes.func,
  phrases: PropTypes.shape(defaultPhrases$1())
});
var defaultProps$5 = {
  showThumbnails: true,
  current: 0,
  photos: [],
  onPress: noop,
  phrases: defaultPhrases
};

var Caption =
/*#__PURE__*/
function (_PureComponent) {
  inherits(Caption, _PureComponent);

  function Caption(props) {
    var _this;

    classCallCheck(this, Caption);

    _this = possibleConstructorReturn(this, getPrototypeOf(Caption).call(this, props));
    var _this$props = _this.props,
        showThumbnails = _this$props.showThumbnails,
        photos = _this$props.photos;
    _this.state = {
      showThumbnails: showThumbnails,
      dimensions: {}
    };
    _this.thumbnailsWrapperRef = null;
    _this.thumbnailsListRef = null;
    _this.hasMoreThanOnePhoto = photos.length > 1;
    _this.onThumbnailPress = _this.onThumbnailPress.bind(assertThisInitialized(_this));
    _this.setGalleryFigcaptionRef = _this.setGalleryFigcaptionRef.bind(assertThisInitialized(_this));
    _this.setGalleryThubmanilsRef = _this.setGalleryThubmanilsRef.bind(assertThisInitialized(_this));
    _this.toggleThumbnails = _this.toggleThumbnails.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Caption, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.photos = this.props.photos;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var current = this.props.current;

      if (current !== prevProps.current) {
        this.setThumbnailsWrapperScrollLeft(current);
      }
    }
  }, {
    key: "onThumbnailPress",
    value: function onThumbnailPress(event) {
      var _this$props2 = this.props,
          onPress = _this$props2.onPress,
          photos = _this$props2.photos;
      var index = parseInt(event.currentTarget.dataset.photoIndex, 10);

      if (index >= 0 && index <= photos.length - 1) {
        onPress(index);
      }
    }
  }, {
    key: "onThumbnailLoad",
    value: function onThumbnailLoad(_ref, index) {
      var image = _ref.target;
      this.setState(function (prevState) {
        return {
          dimensions: defineProperty({}, index, _objectSpread$3({}, prevState.dimensions[index], {
            height: image.offsetHeight,
            width: image.offsetWidth
          }))
        };
      });
    }
  }, {
    key: "setThumbnailsWrapperScrollLeft",
    value: function setThumbnailsWrapperScrollLeft(current) {
      console.log(this.state);
      var photos = this.props.photos;
      var bounding = this.thumbnailsWrapperRef.getBoundingClientRect();
      var scrollLeft = calculateThumbnailsLeftScroll(current, photos.length, bounding);
      this.thumbnailsListRef.style.marginLeft = "".concat(scrollLeft, "px");
    }
  }, {
    key: "getPhotoByIndex",
    value: function getPhotoByIndex(index) {
      var photos = this.props.photos;
      return photos[index];
    }
  }, {
    key: "setGalleryFigcaptionRef",
    value: function setGalleryFigcaptionRef(element) {
      this.thumbnailsWrapperRef = element;
    }
  }, {
    key: "setGalleryThubmanilsRef",
    value: function setGalleryThubmanilsRef(element) {
      this.thumbnailsListRef = element;
    }
  }, {
    key: "toggleThumbnails",
    value: function toggleThumbnails() {
      this.setState(function (prevState) {
        return {
          showThumbnails: !prevState.showThumbnails
        };
      });
    }
  }, {
    key: "renderThumbnail",
    value: function renderThumbnail(photo, index, onPress, onLoad) {
      var current = this.props.current;
      return React.createElement(Thumbnail, {
        active: index === current,
        photo: photo,
        onPress: onPress,
        onLoad: onLoad,
        number: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          current = _this$props3.current,
          photos = _this$props3.photos,
          phrases = _this$props3.phrases,
          onLoad = _this$props3.onLoad;
      var showThumbnails = this.state.showThumbnails;
      var className = classnames('gallery-figcaption', !showThumbnails && 'hide');
      var currentPhoto = this.getPhotoByIndex(current);
      var captionThumbnailsWrapperWidth = calculateThumbnailsContainerDimension(photos.length);
      return React.createElement("figcaption", {
        className: className
      }, React.createElement("div", {
        className: "gallery-figcaption--content"
      }, React.createElement("div", {
        className: "gallery-figcaption--inner"
      }, React.createElement("div", {
        className: "gallery-figcaption--info"
      }, React.createElement("div", {
        className: "caption-left"
      }, currentPhoto.caption && React.createElement("h3", {
        className: "photo-caption"
      }, currentPhoto.caption), currentPhoto.subcaption && React.createElement("p", {
        className: "photo-subcaption"
      }, currentPhoto.subcaption)), this.hasMoreThanOnePhoto && React.createElement("div", {
        className: "caption-right"
      }, React.createElement(TogglePhotoList, {
        phrases: phrases,
        isOpened: showThumbnails,
        onPress: this.toggleThumbnails
      }))), this.hasMoreThanOnePhoto && React.createElement("div", {
        className: "gallery-figcaption--thumbnails",
        "aria-hidden": false,
        ref: this.setGalleryFigcaptionRef
      }, React.createElement("div", {
        className: "caption-thumbnails",
        style: {
          width: captionThumbnailsWrapperWidth
        }
      }, React.createElement("ul", {
        className: "thumbnails-list",
        ref: this.setGalleryThubmanilsRef
      }, photos.map(function (photo, index) {
        return React.createElement("li", {
          key: photo.photo
        }, _this2.renderThumbnail(photo, index, _this2.onThumbnailPress, _this2.onThumbnailLoad));
      })))))));
    }
  }]);

  return Caption;
}(PureComponent);

Caption.propTypes = propTypes$5;
Caption.defaultProps = defaultProps$5;

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var controlStyle = {
  height: '2.8em',
  width: '2.8em',
  fill: NORMAL_COLOR
};
var controlStyleLight = {
  fill: INVERSE_COLOR
};
var propTypes$6 = forbidExtraProps({
  arrow: PropTypes.string,
  onPress: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  light: PropTypes.bool
});
var defaultProps$6 = {
  arrow: null,
  onPress: noop,
  label: '',
  className: null,
  disabled: false,
  light: false
};

var Control =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Control, _React$PureComponent);

  function Control(props) {
    var _this;

    classCallCheck(this, Control);

    _this = possibleConstructorReturn(this, getPrototypeOf(Control).call(this, props));
    _this.onButtonPress = _this.onButtonPress.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Control, [{
    key: "onButtonPress",
    value: function onButtonPress() {
      var onPress = this.props.onPress;
      onPress();
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          arrow = _this$props.arrow,
          label = _this$props.label,
          className = _this$props.className,
          disabled = _this$props.disabled,
          light = _this$props.light;
      return React.createElement("button", {
        type: "button",
        className: classnames('gallery-control', className),
        onClick: this.onButtonPress,
        disabled: disabled,
        "aria-label": label
      }, React.createElement("svg", {
        viewBox: "0 0 18 18",
        role: "presentation",
        focusable: "false",
        "aria-hidden": "true",
        style: _objectSpread$4({}, controlStyle, {}, light && controlStyleLight)
      }, React.createElement("path", {
        d: arrow,
        fillRule: "evenodd"
      })));
    }
  }]);

  return Control;
}(React.PureComponent);

Control.propTypes = propTypes$6;
Control.defaultProps = defaultProps$6;

var PREV_ARROW = 'm13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z';
var propTypes$7 = forbidExtraProps({
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  light: PropTypes.bool
});
var defaultProps$7 = {
  onPress: noop,
  disabled: false,
  light: false
};

var PrevButton =
/*#__PURE__*/
function (_PureComponent) {
  inherits(PrevButton, _PureComponent);

  function PrevButton() {
    classCallCheck(this, PrevButton);

    return possibleConstructorReturn(this, getPrototypeOf(PrevButton).apply(this, arguments));
  }

  createClass(PrevButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onPress = _this$props.onPress,
          disabled = _this$props.disabled,
          light = _this$props.light;
      return React.createElement(Control, {
        className: "gallery-control--prev",
        onPress: onPress,
        arrow: PREV_ARROW,
        disabled: disabled,
        light: light
      });
    }
  }]);

  return PrevButton;
}(PureComponent);

PrevButton.propTypes = propTypes$7;
PrevButton.defaultProps = defaultProps$7;

var NEXT_ARROW = 'm4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z';
var propTypes$8 = forbidExtraProps({
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  light: PropTypes.bool
});
var defaultProps$8 = {
  onPress: noop,
  disabled: false,
  light: false
};

var NextButton =
/*#__PURE__*/
function (_PureComponent) {
  inherits(NextButton, _PureComponent);

  function NextButton() {
    classCallCheck(this, NextButton);

    return possibleConstructorReturn(this, getPrototypeOf(NextButton).apply(this, arguments));
  }

  createClass(NextButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onPress = _this$props.onPress,
          disabled = _this$props.disabled,
          light = _this$props.light;
      return React.createElement(Control, {
        className: "gallery-control--next",
        onPress: onPress,
        arrow: NEXT_ARROW,
        disabled: disabled,
        light: light
      });
    }
  }]);

  return NextButton;
}(PureComponent);

NextButton.propTypes = propTypes$8;
NextButton.defaultProps = defaultProps$8;

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes$9 = _objectSpread$5({}, galleryPropTypes);

var defaultProps$9 = _objectSpread$5({}, galleryDefaultProps);

var Gallery =
/*#__PURE__*/
function (_PureComponent) {
  inherits(Gallery, _PureComponent);

  function Gallery(props) {
    var _this;

    classCallCheck(this, Gallery);

    _this = possibleConstructorReturn(this, getPrototypeOf(Gallery).call(this, props));
    var _this$props = _this.props,
        activePhotoIndex = _this$props.activePhotoIndex,
        photos = _this$props.photos,
        wrap = _this$props.wrap;
    _this.state = {
      activePhotoIndex: activePhotoIndex,
      hidePrevButton: wrap && activePhotoIndex === 0,
      hideNextButton: wrap && activePhotoIndex === photos.length - 1,
      controlsDisabled: true,
      touchStartInfo: null,
      touchEndInfo: null,
      touchMoved: false
    };
    _this.lastPreloadIndex = 0;
    _this.preloadedPhotos = [];
    _this.hasPhotos = photos.length > 0;
    _this.hasMoreThanOnePhoto = photos.length > 1;
    _this.move = _this.move.bind(assertThisInitialized(_this));
    _this.prev = _this.prev.bind(assertThisInitialized(_this));
    _this.next = _this.next.bind(assertThisInitialized(_this));
    _this.onPhotoLoad = _this.onPhotoLoad.bind(assertThisInitialized(_this));
    _this.onPhotoError = _this.onPhotoError.bind(assertThisInitialized(_this));
    _this.onPhotoPress = _this.onPhotoPress.bind(assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(assertThisInitialized(_this));
    _this.onTouchEnd = _this.onTouchEnd.bind(assertThisInitialized(_this));
    _this.onThumbnailPress = _this.onThumbnailPress.bind(assertThisInitialized(_this));
    _this.onPrevButtonPress = _this.onPrevButtonPress.bind(assertThisInitialized(_this));
    _this.onNextButtonPress = _this.onNextButtonPress.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Gallery, [{
    key: "onNextButtonPress",
    value: function onNextButtonPress() {
      var nextButtonPressed = this.props.nextButtonPressed;
      this.next();
      nextButtonPressed();
    }
  }, {
    key: "onPrevButtonPress",
    value: function onPrevButtonPress() {
      var prevButtonPressed = this.props.prevButtonPressed;
      this.prev();
      prevButtonPressed();
    }
  }, {
    key: "onPhotoLoad",
    value: function onPhotoLoad() {
      return this.setState({
        controlsDisabled: false
      });
    }
  }, {
    key: "onPhotoError",
    value: function onPhotoError() {
      return this.setState({
        controlsDisabled: false
      });
    }
  }, {
    key: "onPhotoPress",
    value: function onPhotoPress() {
      var activePhotoPressed = this.props.activePhotoPressed;
      this.move(DIRECTION_NEXT);
      activePhotoPressed();
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      this.setState({
        touchStartInfo: event.targetTouches[0]
      });
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      this.setState({
        touchMoved: true,
        touchEndInfo: event.targetTouches[0]
      });
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      var _this$state = this.state,
          touchStartInfo = _this$state.touchStartInfo,
          touchEndInfo = _this$state.touchEndInfo,
          touchMoved = _this$state.touchMoved;

      if (touchMoved) {
        if (touchStartInfo.screenX < touchEndInfo.screenX) {
          this.onPrevButtonPress();
        } else if (touchStartInfo.screenX > touchEndInfo.screenX) {
          this.onNextButtonPress();
        }
      }

      this.setState({
        touchMoved: false
      });
    }
  }, {
    key: "onThumbnailPress",
    value: function onThumbnailPress(index) {
      var onThumbnailPress = this.props.onThumbnailPress;
      this.to(index);
      onThumbnailPress();
    }
  }, {
    key: "getPhotoByIndex",
    value: function getPhotoByIndex(index) {
      var photos = this.props.photos;
      return photos[index];
    }
  }, {
    key: "getItemByDirection",
    value: function getItemByDirection(direction, activeIndex) {
      var _this$props2 = this.props,
          photos = _this$props2.photos,
          wrap = _this$props2.wrap;
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;
      var lastItemIndex = photos.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && wrap) {
        return activeIndex;
      }

      var delta = isPrevDirection ? -1 : 1;
      var itemIndex = (activeIndex + delta) % photos.length;
      return itemIndex === -1 ? photos.length - 1 : itemIndex;
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      var backgroundColor = this.props.backgroundColor;
      return {
        backgroundColor: backgroundColor
      };
    }
  }, {
    key: "prev",
    value: function prev() {
      return this.move(DIRECTION_PREV);
    }
  }, {
    key: "next",
    value: function next() {
      return this.move(DIRECTION_NEXT);
    }
  }, {
    key: "move",
    value: function move(direction) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var activePhotoIndex = this.state.activePhotoIndex;
      var nextElementIndex = index !== false ? index : this.getItemByDirection(direction, activePhotoIndex);
      this.wrapCheck(direction, nextElementIndex);
      this.setState({
        activePhotoIndex: nextElementIndex
      });
    }
  }, {
    key: "to",
    value: function to(index) {
      var photos = this.props.photos;
      var activePhotoIndex = this.state.activePhotoIndex;

      if (index > photos.length - 1 || index < 0 || activePhotoIndex === index) {
        return; // nothing to do
      }

      var direction = index > activePhotoIndex ? DIRECTION_NEXT : DIRECTION_PREV;
      this.move(direction, index);
    }
  }, {
    key: "wrapCheck",
    value: function wrapCheck(direction, nextElementIndex) {
      var _this$props3 = this.props,
          photos = _this$props3.photos,
          wrap = _this$props3.wrap;

      if (wrap) {
        this.setState({
          hideNextButton: nextElementIndex === photos.length - 1,
          hidePrevButton: nextElementIndex === 0
        });
      }
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var light = this.props.light;
      var _this$state2 = this.state,
          hidePrevButton = _this$state2.hidePrevButton,
          hideNextButton = _this$state2.hideNextButton,
          controlsDisabled = _this$state2.controlsDisabled;
      var controls = [];

      if (this.hasMoreThanOnePhoto) {
        // previous control
        if (!hidePrevButton) {
          controls.push(React.createElement(PrevButton, {
            key: ".prevControl",
            disabled: controlsDisabled,
            onPress: this.onPrevButtonPress,
            light: light
          }));
        } // next control


        if (!hideNextButton) {
          controls.push(React.createElement(NextButton, {
            key: ".nextControl",
            disabled: controlsDisabled,
            onPress: this.onNextButtonPress,
            light: light
          }));
        }
      }

      return controls;
    }
  }, {
    key: "renderPreloadPhotos",
    value: function renderPreloadPhotos(current) {
      var _this$props4 = this.props,
          photos = _this$props4.photos,
          preloadSize = _this$props4.preloadSize;
      var counter = 1;
      var index = current;
      var photo = null;
      var preloadPhotos = [];

      while (index < photos.length && counter <= preloadSize) {
        photo = photos[index];
        preloadPhotos.push(React.createElement("img", {
          key: photo.photo,
          alt: photo.photo,
          src: photo.photo
        }));
        index += 1;
        counter += 1;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          photos = _this$props5.photos,
          showThumbnails = _this$props5.showThumbnails,
          phrases = _this$props5.phrases;
      var emptyMessage = phrases.noPhotosProvided;
      var activePhotoIndex = this.state.activePhotoIndex; // preload photos

      var galleryModalPreloadPhotos = this.renderPreloadPhotos(activePhotoIndex);
      var controls = this.renderControls();
      var current = this.getPhotoByIndex(activePhotoIndex);
      var galleryStyles = this.getStyles();
      return React.createElement("div", {
        className: "gallery",
        style: galleryStyles
      }, React.createElement("div", {
        className: "gallery-modal--preload"
      }, galleryModalPreloadPhotos), React.createElement("div", {
        className: "gallery-main"
      }, controls, React.createElement("div", {
        className: "gallery-photos"
      }, this.hasPhotos ? React.createElement("div", {
        className: "gallery-photo"
      }, React.createElement("div", {
        className: "gallery-photo--current"
      }, React.createElement(Photo, {
        photo: current,
        onLoad: this.onPhotoLoad,
        onError: this.onPhotoError,
        onPress: this.onPhotoPress,
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      }))) : React.createElement("div", {
        className: "gallery-empty"
      }, emptyMessage))), showThumbnails && current && React.createElement(Caption, {
        phrases: phrases,
        current: activePhotoIndex,
        photos: photos,
        onPress: this.onThumbnailPress
      }));
    }
  }]);

  return Gallery;
}(PureComponent);

Gallery.propTypes = propTypes$9;
Gallery.defaultProps = defaultProps$9;

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var CLOSE_PATH = 'm23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22';
var buttonStyle = {
  height: '2em',
  width: '2em',
  display: 'block',
  fill: NORMAL_COLOR
};
var buttonStyleLight = {
  fill: INVERSE_COLOR
};
var propTypes$a = forbidExtraProps({
  onPress: PropTypes.func,
  light: PropTypes.bool
});
var defaultProps$a = {
  onPress: noop,
  light: false
};

var CloseButton = function CloseButton(_ref) {
  var onPress = _ref.onPress,
      light = _ref.light;
  return React.createElement("button", {
    onClick: onPress,
    className: "gallery-close",
    type: "button",
    "aria-busy": false
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    role: "img",
    focusable: "false",
    style: _objectSpread$6({}, buttonStyle, {}, light && buttonStyleLight)
  }, React.createElement("path", {
    d: CLOSE_PATH,
    fillRule: "evenodd"
  })));
};

CloseButton.propTypes = propTypes$a;
CloseButton.defaultProps = defaultProps$a;

var MIN = 0;
var MAX = 1; // eslint-disable-next-line consistent-return

function opacityValidation(props, propName) {
  if (props[propName] < MIN || props[propName] > MAX) {
    return new Error('Invalid value for opacity');
  }
}

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function processPhoto(photo, index) {
  var props = typeof photo === 'string' ? {
    number: index + 1,
    photo: photo
  } : _objectSpread$7({}, photo, {
    number: index + 1
  });
  return _objectSpread$7({}, defaultPhotoProps, {}, props);
}
function getPhotos(photos) {
  return photos.map(processPhoto);
}

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var propTypes$b = forbidExtraProps(_objectSpread$8({}, galleryPropTypes, {
  leftKeyPressed: PropTypes.func,
  onClose: PropTypes.func,
  rightKeyPressed: PropTypes.func,
  show: PropTypes.bool,
  keyboard: PropTypes.bool,
  opacity: opacityValidation,
  zIndex: nonNegativeInteger,
  // custom props
  className: PropTypes.string,
  title: PropTypes.string,
  outsideClickClose: PropTypes.bool,
  onThumbnailPress: PropTypes.func
}));

var defaultProps$b = _objectSpread$8({}, galleryDefaultProps, {
  leftKeyPressed: noop,
  onClose: noop,
  rightKeyPressed: noop,
  onThumbnailPress: noop,
  show: false,
  keyboard: true,
  opacity: DEFAULT_OPACITY,
  zIndex: DEFAULT_Z_INDEX,
  title: '',
  outsideClickClose: false,
  className: ''
});

var ReactBnbGallery =
/*#__PURE__*/
function (_Component) {
  inherits(ReactBnbGallery, _Component);

  function ReactBnbGallery(props) {
    var _this;

    classCallCheck(this, ReactBnbGallery);

    _this = possibleConstructorReturn(this, getPrototypeOf(ReactBnbGallery).call(this, props));
    _this.state = {
      photos: null
    };
    _this.gallery = React.createRef();
    _this.close = _this.close.bind(assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(assertThisInitialized(_this));
    _this.onClickOutside = _this.onClickOutside.bind(assertThisInitialized(_this));
    _this.setGalleryModalContainerRef = _this.setGalleryModalContainerRef.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(ReactBnbGallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof document === 'undefined') return;
      var outsideClickClose = this.props.outsideClickClose;

      if (outsideClickClose) {
        document.body.addEventListener('click', this.onClickOutside);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof document === 'undefined') return;
      var outsideClickClose = this.props.outsideClickClose;

      if (outsideClickClose) {
        document.body.removeEventListener('click', this.onClickOutside);
      }
    }
  }, {
    key: "onClickOutside",
    value: function onClickOutside(event) {
      if (event.target === this.galleryModalContainerRef) {
        this.close();
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ESC_KEYCODE:
          event.preventDefault();
          this.close();
          break;

        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.gallery.current.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.gallery.current.next();
          break;

        default:
      }
    }
  }, {
    key: "getModalOverlayStyles",
    value: function getModalOverlayStyles() {
      var _this$props = this.props,
          opacity = _this$props.opacity,
          backgroundColor = _this$props.backgroundColor;
      return {
        opacity: opacity,
        backgroundColor: backgroundColor
      };
    }
  }, {
    key: "setGalleryModalContainerRef",
    value: function setGalleryModalContainerRef(element) {
      this.galleryModalContainerRef = element;
    }
  }, {
    key: "close",
    value: function close() {
      var onClose = this.props.onClose;
      onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          show = _this$props2.show,
          phrases = _this$props2.phrases,
          keyboard = _this$props2.keyboard,
          light = _this$props2.light,
          className = _this$props2.className,
          title = _this$props2.title,
          zindex = _this$props2.zIndex;
      var photos = this.state.photos;

      if (!show) {
        return null; // nothing to return
      }

      var _omit = omit(this.props, ['onClose', 'leftKeyPressed', 'rightKeyPressed', 'show', 'photos', 'opacity', 'backgroundColor', 'zIndex', 'keyboard']),
          wrap = _omit.wrap,
          activePhotoIndex = _omit.activePhotoIndex,
          activePhotoPressed = _omit.activePhotoPressed,
          direction = _omit.direction,
          nextButtonPressed = _omit.nextButtonPressed,
          prevButtonPressed = _omit.prevButtonPressed,
          showThumbnails = _omit.showThumbnails,
          preloadSize = _omit.preloadSize,
          onThumbnailPress = _omit.onThumbnailPress; // modal overlay customization styles


      var galleryModalOverlayStyles = this.getModalOverlayStyles();
      return React.createElement(Portal, null, React.createElement(FocusTrap, null, React.createElement("div", {
        className: classnames(['gallery-modal', light && 'mode-light', className]),
        zindex: zindex,
        onKeyDown: keyboard && this.onKeyDown,
        tabIndex: "-1",
        role: "dialog"
      }, React.createElement("div", {
        style: galleryModalOverlayStyles,
        className: "gallery-modal--overlay"
      }), React.createElement("div", {
        className: "gallery-modal--container",
        ref: this.setGalleryModalContainerRef
      }, React.createElement("div", {
        className: "gallery-modal--table"
      }, React.createElement("div", {
        className: "gallery-modal--cell"
      }, React.createElement("div", {
        className: "gallery-modal--content"
      }, React.createElement("div", {
        className: "gallery-modal--close"
      }, React.createElement(CloseButton, {
        onPress: this.close,
        light: light
      })), React.createElement("div", {
        className: "gallery-content"
      }, React.createElement("div", {
        className: "gallery-top"
      }, title && React.createElement("div", {
        className: "gallery-top--inner"
      }, title)), React.createElement(Gallery, {
        phrases: phrases,
        ref: this.gallery,
        photos: photos,
        wrap: wrap,
        activePhotoIndex: activePhotoIndex,
        activePhotoPressed: activePhotoPressed,
        direction: direction,
        nextButtonPressed: nextButtonPressed,
        prevButtonPressed: prevButtonPressed,
        onThumbnailPress: prevButtonPressed,
        showThumbnails: showThumbnails,
        preloadSize: preloadSize,
        backgroundColor: null,
        light: light
      })))))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.photos !== state.photos) {
        return {
          photos: getPhotos(props.photos)
        };
      }

      return null;
    }
  }]);

  return ReactBnbGallery;
}(Component);

ReactBnbGallery.propTypes = propTypes$b;
ReactBnbGallery.defaultProps = defaultProps$b;

export default ReactBnbGallery;
export { Gallery, ReactBnbGallery };
