import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteLayout, ImageGallery, StickyScrollStory } from '@/components/pritty';
import { BlurFade } from '@/components/magicui';
import { Compare, TextGenerateEffect } from '@/components/aceternity';

export const metadata: Metadata = {
  title: 'On The Rocks | Award-Winning Georgian Bay Project',
  description:
    'Explore On The Rocks, our Landscape Ontario Award of Excellence winner in the $500K-$1M category. A stunning Georgian Bay shoreline transformation.',
};

export default function OnTheRocksPage() {
  const galleryImages = [
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03985-featured.jpeg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC01981-Enhanced-NR.jpg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC01972-Enhanced-NR.jpg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/S1000376.jpg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/S1000381.jpg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/TYLER2020FINALS-37.jpg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03676-night.jpeg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/IMG_4417.jpeg',
  ];

  return (
    <SiteLayout>
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/pritty-landscapes/projects/on-the-rocks/hero/drone-aerial.jpg"
            alt="On The Rocks - Georgian Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 container-wide text-white">
          <BlurFade delay={0.1} inView>
            <div className="inline-block px-4 py-2 bg-[#C9A962]/90 text-[#1E1E1E] rounded-full text-sm font-semibold mb-4">
              Award of Excellence | $500K-$1M Category | 2023
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <TextGenerateEffect
                words="On The Rocks"
                staggerDelay={0.1}
                duration={0.5}
              />
            </h1>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-xl text-white/80 max-w-2xl">
              Georgian Bay, Ontario — A stunning shoreline transformation that earned Landscape
              Ontario&apos;s highest recognition.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Project Story - Sticky Scroll */}
      <StickyScrollStory
        sections={[
          {
            title: 'The Vision',
            content:
              "The clients came to us with a challenging Georgian Bay property—beautiful views, but an eroding shoreline that threatened both the landscape and their investment. They didn't want just protection. They wanted a transformation that would make their waterfront the centerpiece of their property.",
            image: '/assets/pritty-landscapes/design/coastal-paradise-design.jpg',
            imageAlt: 'Design vision for On The Rocks',
          },
          {
            title: 'The Challenge',
            content:
              "Georgian Bay's fluctuating water levels and powerful wave action demanded serious engineering. But the clients also wanted beauty—a shoreline that enhanced their property rather than looking like an industrial barrier. We needed to deliver both.",
            image: '/assets/pritty-landscapes/projects/on-the-rocks/construction/before-construction1.jpeg',
            imageAlt: 'Shoreline before construction',
          },
          {
            title: 'The Transformation',
            content:
              'Premium Ontario granite—some boulders weighing up to 16 tons—placed with artistic intention. Every stone selected for colour, texture, and form. The armour stone revetment disperses wave energy naturally while creating a stunning visual statement.',
            image: '/assets/pritty-landscapes/projects/on-the-rocks/construction/DJI-drone-2.jpg',
            imageAlt: 'Construction in progress',
          },
          {
            title: 'The Result',
            content:
              "Today, this Georgian Bay waterfront stands as a testament to what's possible when engineering meets artistry. The project earned Landscape Ontario's Award of Excellence in the $500K-$1M category—their highest recognition for shoreline work.",
            image: '/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03985-featured.jpeg',
            imageAlt: 'Award-winning finished project',
          },
        ]}
        className="bg-background"
      />

      {/* Before/After Compare Slider */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">The Transformation</h2>
              <p className="text-muted-foreground">
                Drag the slider to reveal the dramatic before and after
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <div className="h-[500px] md:h-[600px] max-w-5xl mx-auto rounded-2xl border-2 border-[#C9A962]/30 shadow-[0_0_40px_rgba(201,169,98,0.15)] overflow-hidden">
              <Compare
                firstImage="/assets/pritty-landscapes/projects/on-the-rocks/construction/before-construction.jpeg"
                secondImage="/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03985-featured.jpeg"
                firstImageAlt="Before - Eroding shoreline"
                secondImageAlt="After - Award-winning transformation"
                className="w-full h-full"
                slideMode="drag"
                showHandlebar={true}
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-center mb-12">Project Gallery</h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <ImageGallery
              images={galleryImages}
              columns={4}
              featuredFirst={true}
            />
          </BlurFade>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-[#1E1E1E] text-white">
        <div className="container-tight">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-center mb-12">Project Details</h2>
          </BlurFade>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <BlurFade delay={0.1} inView>
              <div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Location</div>
                <div className="font-semibold">Georgian Bay, Ontario</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Category</div>
                <div className="font-semibold">$500,000 - $1,000,000</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Services</div>
                <div className="font-semibold">Shoreline Protection, Landscape Integration</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div>
                <div className="text-sm text-white/60 uppercase tracking-wider mb-2">Recognition</div>
                <div className="font-semibold text-[#C9A962]">
                  LO Award of Excellence 2023
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1E1E1E] text-white relative overflow-hidden">
        {/* Subtle gradient orb */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #C9A962 0%, transparent 70%)',
            filter: 'blur(60px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="container-tight text-center relative z-10">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Every award-winning project starts with a conversation. Let&apos;s discuss your
              vision.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#C9A962] text-[#1E1E1E] rounded-lg font-semibold text-lg hover:bg-[#C9A962]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(201,169,98,0.4)]"
            >
              Book Your Consultation
            </Link>
          </BlurFade>
        </div>
      </section>
    </main>
    </SiteLayout>
  );
}
