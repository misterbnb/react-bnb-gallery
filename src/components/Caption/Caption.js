import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import noop from '../../utils/noop';

import Thumbnail from '../Thumbnail';
import TogglePhotoList from '../TogglePhotoList';

import defaultPhrases from '../../defaultPhrases';
import getPhrasePropTypes from '../../utils/getPhrasePropTypes';

import {
  forbidExtraProps,
  nonNegativeInteger,
} from '../../common/prop-types';

import PhotosShape from '../../shapes/PhotosShape';
import calculateThumbnailsLeftScrollByImageDimensions from '../../utils/calculateThumbnailsLeftScrollByImageDimensions';
import calculateThumbnailsContainerDimensionByImageDimensions from '../../utils/calculateThumbnailsContainerDimensionByImageDimensions';

const propTypes = forbidExtraProps({
  showThumbnails: PropTypes.bool,
  current: nonNegativeInteger,
  photos: PhotosShape,
  onPress: PropTypes.func,
  phrases: PropTypes.shape(getPhrasePropTypes(defaultPhrases)),
});

const defaultProps = {
  showThumbnails: true,
  current: 0,
  photos: [],
  onPress: noop,
  phrases: defaultPhrases,
};

class Caption extends Component {
  constructor(props) {
    super(props);
    const {
      showThumbnails,
      photos,
    } = this.props;

    this.state = {
      photos,
      showThumbnails,
      dimensions: {},
    };

    this.thumbnailsWrapperRef = null;
    this.thumbnailsListRef = null;
    this.hasMoreThanOnePhoto = photos.length > 1;
    this.onThumbnailPress = this.onThumbnailPress.bind(this);
    this.setGalleryFigcaptionRef = this.setGalleryFigcaptionRef.bind(this);
    this.setGalleryThubmanilsRef = this.setGalleryThubmanilsRef.bind(this);
    this.toggleThumbnails = this.toggleThumbnails.bind(this);
    this.onThumbnailLoad = this.onThumbnailLoad.bind(this);
    this.onThumbnailError = this.onThumbnailError.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { current } = this.props;
    if (current !== prevProps.current) {
      this.setThumbnailsWrapperScrollLeft(current);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { photos } = this.state;
    return Object.keys(nextState.dimensions).length === 0 ||
           Object.keys(nextState.dimensions).length === photos.length ||
           nextState.photos.length !== photos.length;
  }

  onThumbnailPress(event) {
    const {
      onPress,
    } = this.props;
    const {
      photos,
    } = this.state;
    const index = parseInt(event.currentTarget.dataset.photoIndex, 10);
    if (index >= 0 && index <= photos.length - 1) {
      onPress(index);
    }
  }

  onThumbnailLoad(image, index) {
    const { dimensions } = this.state;
    dimensions[index] = { height: image.offsetHeight, width: image.offsetWidth };
    this.setState({ dimensions: dimensions });
  }

  onThumbnailError(image, index) {
    const { photos } = this.state;
    photos.splice(index, 1);
    this.hasMoreThanOnePhoto = photos.length > 1;
    this.setState({ photos });
  }

  setThumbnailsWrapperScrollLeft(current) {
    const { dimensions, photos } = this.state;
    if (!dimensions[current] || !dimensions[current].width) return;
    const bounding = this.thumbnailsWrapperRef.getBoundingClientRect();
    // const scrollLeft = calculateThumbnailsLeftScroll(current, photos.length, bounding);
    const scrollLeft = calculateThumbnailsLeftScrollByImageDimensions(current, dimensions, bounding);
    this.thumbnailsListRef.style.marginLeft = `${scrollLeft}px`;
  }

  getPhotoByIndex(index) {
    const { photos } = this.state;
    return photos[index];
  }

  setGalleryFigcaptionRef(element) {
    this.thumbnailsWrapperRef = element;
  }

  setGalleryThubmanilsRef(element) {
    this.thumbnailsListRef = element;
  }

  toggleThumbnails() {
    this.setState((prevState) => ({
      showThumbnails: !prevState.showThumbnails,
    }));
  }

  renderThumbnail(photo, index, onPress, onLoad) {
    const { current } = this.props;

    return (
      <Thumbnail
        active={index === current}
        photo={photo}
        onPress={onPress}
        onLoad={onLoad}
        onError={(image) => this.onThumbnailError(image, index)}
        number={index}
      />
    );
  }

  render() {
    const {
      current,
      phrases,
      onLoad,
    } = this.props;

    const {
      photos,
      showThumbnails,
      dimensions
    } = this.state;

    const className = classnames(
      'gallery-figcaption',
      !showThumbnails && 'hide',
    );

    const currentPhoto = this.getPhotoByIndex(current);
    // const captionThumbnailsWrapperWidth = calculateThumbnailsContainerDimension(photos.length);
    const captionThumbnailsWrapperWidth = calculateThumbnailsContainerDimensionByImageDimensions(dimensions);

    return (
      <figcaption className={className}>
        <div className="gallery-figcaption--content">
          <div className="gallery-figcaption--inner">
            <div className="gallery-figcaption--info">
              <div className="caption-left">
                {currentPhoto.caption && (
                  <h3 className="photo-caption">
                    {currentPhoto.caption}
                  </h3>
                )}
                {currentPhoto.subcaption && (
                  <p className="photo-subcaption">
                    {currentPhoto.subcaption}
                  </p>
                )}
              </div>
              {this.hasMoreThanOnePhoto && (
                <div className="caption-right">
                  <TogglePhotoList
                    phrases={phrases}
                    isOpened={showThumbnails}
                    onPress={this.toggleThumbnails}
                  />
                </div>
              )}
            </div>
            {this.hasMoreThanOnePhoto && (
              <div
                className="gallery-figcaption--thumbnails"
                aria-hidden={false}
                ref={this.setGalleryFigcaptionRef}
              >
                <div
                  className="caption-thumbnails"
                  style={{ width: captionThumbnailsWrapperWidth }}
                >
                  <ul
                    className="thumbnails-list"
                    ref={this.setGalleryThubmanilsRef}
                  >
                    {photos.map((photo, index) => (
                      <li key={photo.photo}>
                        {this.renderThumbnail(photo, index, this.onThumbnailPress, this.onThumbnailLoad)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </figcaption>
    );
  }
}

Caption.propTypes = propTypes;
Caption.defaultProps = defaultProps;

export default Caption;
