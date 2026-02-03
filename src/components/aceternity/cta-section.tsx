'use client';

import { ReactNode, useRef, forwardRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * CTASection - Premium call-to-action section with visual effects
 * Inspired by Aceternity UI's cta-sections component
 *
 * Features:
 * - Multiple visual variants (gradient orb, noise, split)
 * - Animated background effects
 * - Responsive design
 * - Customizable buttons/actions
 */

interface CTASectionProps {
  /** Main headline */
  title: string;
  /** Supporting description */
  description?: string;
  /** Primary action button/element */
  primaryAction?: ReactNode;
  /** Secondary action button/element */
  secondaryAction?: ReactNode;
  /** Visual variant */
  variant?: 'default' | 'gradient-orb' | 'noise' | 'split-image' | 'dark';
  /** Background image for split variant */
  image?: string;
  imageAlt?: string;
  /** Additional class names */
  className?: string;
  /** Badge text above title */
  badge?: string;
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  image,
  imageAlt = '',
  className,
  badge,
}: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Variant-specific rendering
  if (variant === 'split-image' && image) {
    return (
      <CTASplitImage
        ref={sectionRef}
        title={title}
        description={description}
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        image={image}
        imageAlt={imageAlt}
        className={className}
        badge={badge}
        isInView={isInView}
      />
    );
  }

  const isDark = variant === 'dark' || variant === 'gradient-orb' || variant === 'noise';

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative py-16 md:py-24 lg:py-32 overflow-hidden',
        isDark ? 'bg-[#1E1E1E]' : 'bg-primary',
        className
      )}
    >
      {/* Background Effects */}
      {variant === 'gradient-orb' && <GradientOrbBackground />}
      {variant === 'noise' && <NoiseBackground />}

      {/* Content */}
      <div className="relative z-10 container-tight text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-white"
          >
            {badge}
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
            isDark ? 'text-white' : 'text-primary-foreground'
          )}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              'text-lg md:text-xl max-w-2xl mx-auto mb-8',
              isDark ? 'text-white/70' : 'text-primary-foreground/80'
            )}
          >
            {description}
          </motion.p>
        )}

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryAction}
            {secondaryAction}
          </motion.div>
        )}
      </div>
    </section>
  );
}

/**
 * Split image variant - text on one side, image on other
 */
interface CTASplitImageProps {
  title: string;
  description?: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  image: string;
  imageAlt: string;
  className?: string;
  badge?: string;
  isInView: boolean;
}

const CTASplitImage = forwardRef<HTMLElement, CTASplitImageProps>(function CTASplitImage(
  {
    title,
    description,
    primaryAction,
    secondaryAction,
    image,
    imageAlt,
    className,
    badge,
    isInView,
  },
  ref
) {
  return (
    <section
      ref={ref}
      className={cn('relative py-16 md:py-0 overflow-hidden', className)}
    >
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {/* Content Side */}
        <div className="flex items-center bg-primary text-primary-foreground p-8 md:p-12 lg:p-16">
          <div className="max-w-lg">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6"
              >
                {badge}
              </motion.div>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {title}
            </motion.h2>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-primary-foreground/80 mb-8"
              >
                {description}
              </motion.p>
            )}

            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {primaryAction}
                {secondaryAction}
              </motion.div>
            )}
          </div>
        </div>

        {/* Image Side */}
        <motion.div
          className="relative h-64 md:h-auto"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
});

/**
 * Animated gradient orb background
 */
function GradientOrbBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #C9A962 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['-20%', '20%', '-20%'],
          y: ['-10%', '30%', '-10%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ top: '-20%', left: '10%' }}
      />

      {/* Secondary orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #4A90A4 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: ['10%', '-20%', '10%'],
          y: ['20%', '-10%', '20%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ bottom: '-10%', right: '10%' }}
      />

      {/* Tertiary orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #2D5A3D 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: ['-15%', '15%', '-15%'],
          y: ['15%', '-15%', '15%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        initial={{ top: '30%', right: '30%' }}
      />
    </div>
  );
}

/**
 * Subtle noise/grain texture background
 */
function NoiseBackground() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px',
      }}
    />
  );
}

/**
 * Pre-styled CTA button - primary style
 */
interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function CTAButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
}: CTAButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg',
    'transition-all duration-300 hover:scale-105',
    // Variants
    variant === 'primary' && 'bg-white text-primary hover:bg-white/90',
    variant === 'secondary' && 'bg-[#C9A962] text-[#1E1E1E] hover:bg-[#C9A962]/90',
    variant === 'outline' &&
      'bg-transparent border-2 border-white/30 text-white hover:bg-white/10',
    className
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}

export default CTASection;
