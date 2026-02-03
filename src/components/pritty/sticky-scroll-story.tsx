'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StorySection {
  title: string;
  content: string;
  image: string;
  imageAlt?: string;
}

interface StickyScrollStoryProps {
  sections: StorySection[];
  className?: string;
}

export function StickyScrollStory({ sections, className = '' }: StickyScrollStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {sections.map((section, index) => (
        <StorySegment
          key={index}
          section={section}
          index={index}
          totalSections={sections.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

interface StorySegmentProps {
  section: StorySection;
  index: number;
  totalSections: number;
  scrollYProgress: any;
}

function StorySegment({ section, index, totalSections, scrollYProgress }: StorySegmentProps) {
  const sectionStart = index / totalSections;
  const sectionEnd = (index + 1) / totalSections;

  // Calculate opacity based on scroll position within this section
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, sectionStart - 0.1),
      sectionStart,
      sectionEnd - 0.1,
      sectionEnd,
    ],
    [0, 1, 1, index === totalSections - 1 ? 1 : 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [sectionStart, sectionStart + 0.1],
    [0.95, 1]
  );

  return (
    <div className="min-h-screen flex items-center py-20">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="md:sticky md:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">{section.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          </div>

          {/* Image - Right Side */}
          <motion.div
            style={{ opacity, scale }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src={section.image}
              alt={section.imageAlt || section.title}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default StickyScrollStory;
