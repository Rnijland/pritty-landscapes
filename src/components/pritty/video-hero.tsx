'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoHeroProps {
  /** YouTube video ID (e.g., 'pluqPh8QSr0') */
  youtubeId?: string;
  /** Self-hosted video URL (takes priority over youtubeId) */
  videoUrl?: string;
  /** Poster image for fallback/loading */
  posterImage?: string;
  /** Content to overlay on the video */
  children?: React.ReactNode;
  /** Additional className for the container */
  className?: string;
  /** Height of the hero section */
  height?: string;
}

export function VideoHero({
  youtubeId,
  videoUrl,
  posterImage,
  children,
  className = '',
  height = 'h-screen',
}: VideoHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // For self-hosted video, set loaded when video has enough data to play
    if (videoRef.current) {
      const video = videoRef.current;
      // Use loadeddata which fires earlier than canplay
      const handleLoaded = () => setIsLoaded(true);

      // Check if already loaded (cached)
      if (video.readyState >= 2) {
        setIsLoaded(true);
      } else {
        video.addEventListener('loadeddata', handleLoaded);
      }

      return () => video.removeEventListener('loadeddata', handleLoaded);
    }
    // For YouTube, set loaded after a short delay (iframe doesn't have reliable load events)
    if (youtubeId) {
      const timer = setTimeout(() => setIsLoaded(true), 1000);

      return () => clearTimeout(timer);
    }
  }, [youtubeId]);

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Self-hosted video (priority) */}
        {videoUrl && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster={posterImage}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}

        {/* YouTube embed (fallback if no self-hosted video) */}
        {!videoUrl && youtubeId && (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Scale up iframe to hide YouTube UI and ensure full coverage */}
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] min-w-[100vw] min-h-[100vh] pointer-events-none"
              style={{ border: 0 }}
              title="Background video"
            />
          </div>
        )}

        {/* Poster image fallback while loading */}
        {posterImage && !isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoaded ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={posterImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default VideoHero;
