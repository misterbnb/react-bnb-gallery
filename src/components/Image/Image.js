import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import LoadingSpinner from '../LoadingSpinner';

import {
  imagePropTypes,
  imageDefaultProps,
} from '../../common';
import { forbidExtraProps } from '../../common/prop-types';

const propTypes = forbidExtraProps({
  ...imagePropTypes,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
});

const defaultProps = {
  ...imageDefaultProps,
  style: null,
  className: null,
  alt: '',
};

const defaultState = {
  loading: true,
  withError: false,
};

class Image extends Component {
  constructor(props) {
    super(props);
    const { src } = props;
    this.state = {
      currentSrc: src,
      ...defaultState,
    };
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.setImgRef = this.setImgRef.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { src } = nextProps;
    const { currentSrc } = prevState;

    if (src !== currentSrc) {
      return {
        currentSrc: src,
        ...defaultState,
      };
    }

    return null;
  }

  setImgRef(element) {
    this.imgRef = element;
  }

  onLoad() {
    const { onLoad } = this.props;
    // wait a bit to show the final picture
    setTimeout(() => {
      onLoad(this.imgRef);
      this.setState({
        loading: false,
        withError: false,
      });
    }, 100);
  }

  onError() {
    const { onError } = this.props;
    onError(this.imgRef);
    this.setState({
      loading: false,
      withError: true,
    });
  }

  renderImage() {
    const {
      alt,
      src,
      style,
      className,
    } = this.props;

    const {
      loading,
      withError,
    } = this.state;

    const classNames = [
      className,
      'media-image',
    ];

    const components = [];

    // the loading spinner
    // TODO: make this 'LoadingSpinner' component customizable
    if (loading) {
      components.push(<LoadingSpinner key=".pictureLoadingSpinner" />);
    }

    // if no loading, then return the
    // picture only if no error ocurred
    if (!withError) {
      components.push(<img
        ref={this.setImgRef}
        alt={alt}
        key=".pictureComponent"
        className={classnames(classNames)}
        onLoad={this.onLoad}
        onError={this.onError}
        src={src}
        style={style}
      />);
    }

    // TODO: show a custom message indicating the
    // error ocurred while loading the picture

    return components;
  }

  render() {
    const {
      loading,
    } = this.state;

    const wrapperClassNames = [
      'picture',
      loading && 'loading',
    ];

    // render the picture element
    const picture = this.renderImage();

    return (
      <div className={classnames(wrapperClassNames)}>
        {picture}
      </div>
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
