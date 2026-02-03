'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * TextGenerateEffect - Animated text that reveals word by word with blur fade
 * Inspired by Aceternity UI's text-generate-effect component
 *
 * Features:
 * - Word-by-word reveal animation
 * - Blur-to-clear fade effect
 * - Customizable speed and delay
 * - Respects prefers-reduced-motion
 * - InView trigger option
 */

interface TextGenerateEffectProps {
  /** The text to animate - can be string or array of words */
  words: string | string[];
  /** Additional class for the container */
  className?: string;
  /** Class for individual words */
  wordClassName?: string;
  /** Delay between each word reveal (in seconds) */
  staggerDelay?: number;
  /** Initial delay before animation starts (in seconds) */
  initialDelay?: number;
  /** Duration of each word's animation (in seconds) */
  duration?: number;
  /** Only animate when element is in view */
  animateOnView?: boolean;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** HTML element to render as (default: div) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  /** Filter strength for blur effect (default: 10) */
  blurAmount?: number;
}

export function TextGenerateEffect({
  words,
  className,
  wordClassName,
  staggerDelay = 0.1,
  initialDelay = 0,
  duration = 0.5,
  animateOnView = true,
  onComplete,
  as: Element = 'div',
  blurAmount = 10,
}: TextGenerateEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [shouldAnimate, setShouldAnimate] = useState(!animateOnView);

  // Convert string to array of words
  const wordsArray = typeof words === 'string' ? words.split(' ') : words;

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Trigger animation when in view
  useEffect(() => {
    if (animateOnView && isInView) {
      setShouldAnimate(true);
    }
  }, [isInView, animateOnView]);

  // Animation variants for each word
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blurAmount}px)`,
      y: 10,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
    },
  };

  // If user prefers reduced motion, show text immediately
  if (prefersReducedMotion) {
    return (
      <Element className={className} ref={containerRef as any}>
        {wordsArray.join(' ')}
      </Element>
    );
  }

  return (
    <Element className={cn('flex flex-wrap', className)} ref={containerRef as any}>
      {wordsArray.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={cn('mr-[0.25em] inline-block', wordClassName)}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
          variants={wordVariants}
          transition={{
            duration,
            delay: initialDelay + index * staggerDelay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onAnimationComplete={() => {
            if (index === wordsArray.length - 1 && onComplete) {
              onComplete();
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </Element>
  );
}

/**
 * TypewriterEffect - Text that appears character by character
 */
interface TypewriterEffectProps {
  /** The text to type out */
  text: string;
  /** Class for the container */
  className?: string;
  /** Speed of typing (characters per second) */
  speed?: number;
  /** Initial delay before typing starts (in seconds) */
  delay?: number;
  /** Show a blinking cursor */
  showCursor?: boolean;
  /** Cursor character */
  cursor?: string;
  /** Callback when typing completes */
  onComplete?: () => void;
  /** HTML element to render as */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  /** Only animate when in view */
  animateOnView?: boolean;
}

export function TypewriterEffect({
  text,
  className,
  speed = 50, // characters per second
  delay = 0,
  showCursor = true,
  cursor = '|',
  onComplete,
  as: Element = 'div',
  animateOnView = true,
}: TypewriterEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);

      return;
    }

    if (!animateOnView || !isInView) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();
        }
      }, 1000 / speed);

      return () => clearInterval(intervalId);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, onComplete, animateOnView, isInView, prefersReducedMotion]);

  return (
    <Element className={className} ref={containerRef as any}>
      {displayedText}
      {showCursor && !isComplete && (
        <motion.span
          className="inline-block ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          {cursor}
        </motion.span>
      )}
    </Element>
  );
}

/**
 * FlipWords - Cycles through an array of words with a flip animation
 */
interface FlipWordsProps {
  /** Array of words to cycle through */
  words: string[];
  /** Class for the container */
  className?: string;
  /** Class for the word span */
  wordClassName?: string;
  /** Duration each word is shown (in seconds) */
  displayDuration?: number;
  /** Duration of the flip animation (in seconds) */
  flipDuration?: number;
}

export function FlipWords({
  words,
  className,
  wordClassName,
  displayDuration = 3,
  flipDuration = 0.5,
}: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsFlipping(false);
      }, flipDuration * 500);
    }, displayDuration * 1000);

    return () => clearInterval(interval);
  }, [words.length, displayDuration, flipDuration, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={cn('inline-block relative overflow-hidden', className)}>
      <motion.span
        key={currentIndex}
        className={cn('inline-block', wordClassName)}
        initial={{ y: '100%', opacity: 0, rotateX: -90 }}
        animate={{
          y: isFlipping ? '-100%' : '0%',
          opacity: isFlipping ? 0 : 1,
          rotateX: isFlipping ? 90 : 0,
        }}
        transition={{
          duration: flipDuration,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {words[currentIndex]}
      </motion.span>
    </span>
  );
}

/**
 * GradientText - Text with animated gradient effect
 */
interface GradientTextProps {
  children: string;
  className?: string;
  /** Gradient colors */
  colors?: string[];
  /** Animation duration (in seconds) */
  duration?: number;
}

export function GradientText({
  children,
  className,
  colors = ['#2D5A3D', '#1A535C', '#4A90A4', '#C9A962'],
  duration = 5,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <motion.span
      className={cn('inline-block', className)}
      style={gradientStyle}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
}

export default TextGenerateEffect;
