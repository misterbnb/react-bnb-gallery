import {
  THUMBNAIL_OFFSET,
} from '../constants';

export default function calculateThumbnailsContainerDimensionByImageDimensions(dimensions) {
  return Object.keys(dimensions).reduce((a, key) => a + (dimensions[key].width || 0) + THUMBNAIL_OFFSET, 0) - THUMBNAIL_OFFSET;
}
