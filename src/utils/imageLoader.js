export function getImageUrl(src) {
  if (src.startsWith('http')) {
    return src;
  }
  return src;
}

export const getImageProps = (src, alt, className) => {
  // Handle different types of image sources
  if (typeof src === 'string') {
    // If it's a URL string
    return {
      src,
      alt: alt || '',
      className: className || '',
    }
  } else if (src && typeof src === 'object') {
    // If it's an imported image object
    return {
      src: src.src,
      alt: alt || '',
      className: className || '',
      width: src.width,
      height: src.height,
      blurDataURL: src.blurDataURL,
    }
  }

  // Default fallback
  return {
    src: '',
    alt: alt || '',
    className: className || '',
  }
} 