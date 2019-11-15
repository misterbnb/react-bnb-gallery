import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import Image from '../Image';
import PhotoShape from '../../shapes/PhotoShape';

import {
  forbidExtraProps,
  nonNegativeInteger,
} from '../../common/prop-types';
import noop from '../../utils/noop';

import {
  THUMBNAIL_WIDTH,
  THUMBNAIL_HEIGHT,
} from '../../constants';
import DimensionsShape from '../../shapes/DimensionsShape';

const thumbnailStyle = {
  width: THUMBNAIL_WIDTH,
  height: THUMBNAIL_HEIGHT,
};

const propTypes = forbidExtraProps({
  active: PropTypes.bool,
  photo: PhotoShape,
  onPress: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  number: nonNegativeInteger,
  dimensions: DimensionsShape,
});

const defaultProps = {
  active: false,
  photo: null,
  onPress: noop,
  onLoad: noop,
  onError: noop,
  number: 0,
  dimensions: {
    height: 0,
    width: 0
  },
};

class Thumbnail extends PureComponent {
  render() {
    const {
      active,
      photo,
      onPress,
      onLoad,
      onError,
      number,
    } = this.props;

    const className = classnames(
      'thumbnail-button',
      active && 'active',
    );

    return (
      <button
        type="button"
        aria-label={photo.caption}
        className={className}
        data-photo-index={number}
        onClick={onPress}
        disabled={false}
      >
        <Image
          alt={photo.caption}
          src={photo.thumbnail || photo.photo}
          className="thumbnail"
          style={thumbnailStyle}
          onLoad={(target) => onLoad(target, number)}
          onError={(target) => onError(target, number)}
        />
      </button>
    );
  }
}

Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;

export default Thumbnail;
