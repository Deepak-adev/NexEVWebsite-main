'use client';

import React, { useEffect } from 'react';
import BlurEffect from './ui/BlurEffect';

const globalStyles = `
  html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    scroll-behavior: smooth;
    cursor: default;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* For Safari and iOS - they need custom scrolling */
  @supports (-webkit-overflow-scrolling: touch) {
    body {
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Improve touch targets */
  button, 
  a, 
  input[type="submit"],
  input[type="button"],
  input[type="reset"],
  select,
  label {
    cursor: pointer;
    touch-action: manipulation;
  }

  /* Disable text selection on buttons and links */
  button, 
  a {
    user-select: none;
    -webkit-user-select: none;
  }

  /* Improve form element touch targets */
  input,
  select,
  textarea {
    touch-action: manipulation;
  }

  /* Prevent zoom on input focus for iOS */
  @media screen and (-webkit-min-device-pixel-ratio:0) { 
    select,
    textarea,
    input {
      font-size: 16px;
    }
  }
`;

const Layout = ({ children }) => {
  useEffect(() => {
    // Add global styles
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <BlurEffect />
      {children}
    </>
  );
};

export default Layout; 