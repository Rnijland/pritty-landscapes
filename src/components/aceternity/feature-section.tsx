'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * FeatureSection - Premium section layout for showcasing features
 * Inspired by Aceternity UI's feature-sections component
 *
 * Features:
 * - Light and dark variants
 * - Alternating image/text layouts
 * - Staggered reveal animations
 * - Icon support with hover effects
 * - Responsive design
 */

interface FeatureSectionProps {
  /** Section headline */
  title: string;
  /** Section description */
  description?: string;
  /** Array of features to display */
  features: FeatureItem[];
  /** Visual variant */
  variant?: 'light' | 'dark';
  /** Layout pattern */
  layout?: 'grid' | 'stacked' | 'alternating';
  /** Additional class names */
  className?: string;
  /** Badge text above title */
  badge?: string;
}

interface FeatureItem {
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Icon component or element */
  icon?: ReactNode;
  /** Optional image */
  image?: string;
  imageAlt?: string;
}

export function FeatureSection({
  title,
  description,
  features,
  variant = 'light',
  layout = 'grid',
  className,
  badge,
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const isDark = variant === 'dark';

  return (
    <section
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        isDark ? 'bg-[#1E1E1E] text-white' : 'bg-background text-foreground',
        className
      )}
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className={cn(
                'inline-block px-4 py-2 rounded-full text-sm font-medium mb-4',
                isDark
                  ? 'bg-[#C9A962]/20 text-[#C9A962]'
                  : 'bg-primary/10 text-primary'
              )}
            >
              {badge}
            </motion.div>
          )}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                'text-lg max-w-2xl mx-auto',
                isDark ? 'text-white/70' : 'text-muted-foreground'
              )}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Features Layout */}
        {layout === 'grid' && (
          <FeatureGrid features={features} isDark={isDark} isInView={isInView} />
        )}
        {layout === 'stacked' && (
          <FeatureStacked features={features} isDark={isDark} isInView={isInView} />
        )}
        {layout === 'alternating' && (
          <FeatureAlternating features={features} isDark={isDark} isInView={isInView} />
        )}
      </div>
    </section>
  );
}

/**
 * Grid layout for features - cards in a grid
 */
function FeatureGrid({
  features,
  isDark,
  isInView,
}: {
  features: FeatureItem[];
  isDark: boolean;
  isInView: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className={cn(
            'group p-6 md:p-8 rounded-2xl transition-all duration-300',
            isDark
              ? 'bg-white/5 hover:bg-white/10 border border-white/10'
              : 'bg-card hover:bg-card/80 border border-border hover:shadow-lg'
          )}
        >
          {/* Icon */}
          {feature.icon && (
            <motion.div
              className={cn(
                'mb-4 w-12 h-12 rounded-xl flex items-center justify-center',
                isDark ? 'bg-[#C9A962]/20 text-[#C9A962]' : 'bg-primary/10 text-primary'
              )}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {feature.icon}
            </motion.div>
          )}

          {/* Image (if provided instead of icon) */}
          {feature.image && !feature.icon && (
            <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
              <motion.img
                src={feature.image}
                alt={feature.imageAlt || feature.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          )}

          {/* Title */}
          <h3
            className={cn(
              'text-xl font-semibold mb-2 transition-colors duration-300',
              isDark
                ? 'text-white group-hover:text-[#C9A962]'
                : 'text-foreground group-hover:text-primary'
            )}
          >
            {feature.title}
          </h3>

          {/* Description */}
          <p className={isDark ? 'text-white/60' : 'text-muted-foreground'}>
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Stacked layout - features stacked with images on the side
 */
function FeatureStacked({
  features,
  isDark,
  isInView,
}: {
  features: FeatureItem[];
  isDark: boolean;
  isInView: boolean;
}) {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 * index }}
          className={cn(
            'flex items-start gap-6 p-6 rounded-2xl',
            isDark ? 'bg-white/5' : 'bg-muted'
          )}
        >
          {/* Icon or Image */}
          <div className="flex-shrink-0">
            {feature.icon ? (
              <div
                className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center',
                  isDark ? 'bg-[#C9A962]/20 text-[#C9A962]' : 'bg-primary/10 text-primary'
                )}
              >
                {feature.icon}
              </div>
            ) : feature.image ? (
              <div className="w-24 h-24 rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.imageAlt || feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
          </div>

          {/* Content */}
          <div>
            <h3
              className={cn(
                'text-xl font-semibold mb-2',
                isDark ? 'text-white' : 'text-foreground'
              )}
            >
              {feature.title}
            </h3>
            <p className={isDark ? 'text-white/60' : 'text-muted-foreground'}>
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Alternating layout - image/text alternating sides
 */
function FeatureAlternating({
  features,
  isDark,
  isInView,
}: {
  features: FeatureItem[];
  isDark: boolean;
  isInView: boolean;
}) {
  return (
    <div className="space-y-16 md:space-y-24">
      {features.map((feature, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className={cn(
              'grid md:grid-cols-2 gap-8 md:gap-12 items-center',
              !isEven && 'md:grid-flow-dense'
            )}
          >
            {/* Image */}
            {feature.image && (
              <motion.div
                className={cn(
                  'relative rounded-2xl overflow-hidden aspect-[4/3]',
                  !isEven && 'md:col-start-2'
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={feature.image}
                  alt={feature.imageAlt || feature.title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-[#C9A962]/0 hover:bg-[#C9A962]/10 transition-colors duration-300" />
              </motion.div>
            )}

            {/* Content */}
            <div className={cn(!isEven && feature.image && 'md:col-start-1 md:row-start-1')}>
              {feature.icon && (
                <div
                  className={cn(
                    'w-14 h-14 rounded-xl flex items-center justify-center mb-6',
                    isDark ? 'bg-[#C9A962]/20 text-[#C9A962]' : 'bg-primary/10 text-primary'
                  )}
                >
                  {feature.icon}
                </div>
              )}

              <h3
                className={cn(
                  'text-2xl md:text-3xl font-bold mb-4',
                  isDark ? 'text-white' : 'text-foreground'
                )}
              >
                {feature.title}
              </h3>

              <p
                className={cn(
                  'text-lg',
                  isDark ? 'text-white/70' : 'text-muted-foreground'
                )}
              >
                {feature.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/**
 * Simple feature list with icons - good for "What You Get" sections
 */
interface FeatureListProps {
  features: Array<{
    icon?: ReactNode;
    text: string;
  }>;
  className?: string;
  variant?: 'light' | 'dark';
  columns?: 1 | 2;
}

export function FeatureList({
  features,
  className,
  variant = 'light',
  columns = 1,
}: FeatureListProps) {
  const isDark = variant === 'dark';

  return (
    <ul
      className={cn(
        'space-y-3',
        columns === 2 && 'md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0',
        className
      )}
    >
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 * index }}
          className={cn(
            'flex items-start gap-3',
            columns === 2 && 'md:mb-3'
          )}
        >
          <span
            className={cn(
              'flex-shrink-0 mt-0.5',
              isDark ? 'text-[#C9A962]' : 'text-primary'
            )}
          >
            {feature.icon || (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </span>
          <span className={isDark ? 'text-white/80' : 'text-foreground'}>
            {feature.text}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default FeatureSection;
