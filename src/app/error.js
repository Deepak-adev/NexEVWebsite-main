'use client';

import { useEffect } from 'react';
import GlowButton from '../components/ui/GlowButton';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        We apologize for the inconvenience. Please try again or contact support if the problem persists.
      </p>
      <div className="space-x-4">
        <GlowButton onClick={() => reset()}>
          Try again
        </GlowButton>
        <GlowButton onClick={() => window.location.href = '/'}>
          Go home
        </GlowButton>
      </div>
    </div>
  );
} 