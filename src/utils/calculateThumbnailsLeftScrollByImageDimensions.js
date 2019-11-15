import calculateThumbnailsContainerDimensionByImageDimensions from './calculateThumbnailsContainerDimensionByImageDimensions';

import {
  THUMBNAIL_OFFSET,
} from '../constants';

export default function calculateThumbnailsLeftScrollByImageDimensions(current, dimensions, bounding) {
  const currentThumbnailWidth = dimensions[current].width;
  const allThumbnailsWidth = calculateThumbnailsContainerDimensionByImageDimensions(dimensions);
  const allThumbnailsBounding = bounding.width;
  const minX = 0;
  const maxX = allThumbnailsWidth > allThumbnailsBounding ? allThumbnailsWidth - allThumbnailsBounding : 0;
  const thumbnailsOffset = Object.values(dimensions).slice(0, current + 1).reduce((a, d) => a + (d.width || 0) + THUMBNAIL_OFFSET, 0);

  let calculatedScrollLeft = thumbnailsOffset - (allThumbnailsBounding / 2) - (currentThumbnailWidth / 2);

  if (calculatedScrollLeft < minX) {
    calculatedScrollLeft = 0;
  } else if (calculatedScrollLeft > maxX) {
    calculatedScrollLeft = maxX;
  }

  return -Math.abs(calculatedScrollLeft);
}
