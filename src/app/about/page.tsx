import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Waves, Leaf, Sparkles } from 'lucide-react';
import { SiteLayout } from '@/components/pritty';
import { BlurFade } from '@/components/magicui';
import {
  TextGenerateEffect,
  CardHoverEffect,
  CTASection,
  CTAButton,
  FeatureList,
} from '@/components/aceternity';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Pritty Landscapes, founded in 2017 by Tyler Pritty. Discover our mission, values, and award-winning approach to landscape design.',
};

export default function AboutPage() {
  return (
    <SiteLayout>
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/pritty-landscapes/about/header-photo.jpg"
            alt="Pritty Landscapes - About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <BlurFade delay={0.1} inView>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <TextGenerateEffect
                words="A Distinctively Different Approach"
                staggerDelay={0.06}
                duration={0.4}
              />
            </h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Founded in 2017, we design landscapes inspired by water and built to last.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.1} inView>
              <div>
                <h2 className="text-3xl font-bold mb-6">Founded on a Simple Question</h2>
                <p className="text-muted-foreground mb-4">
                  In 2017, Tyler Pritty noticed something across Georgian Bay&apos;s waterfronts:
                  shoreline protection that worked, but never inspired. Contractors who prioritized
                  function over form. Band-aid solutions that protected property but diminished its beauty.
                </p>
                <p className="text-muted-foreground mb-4">
                  He asked a simple question: <em>What if engineering and artistry weren&apos;t
                  mutually exclusive?</em>
                </p>
                <p className="text-foreground font-medium text-lg">
                  That question became Pritty Landscapes—and the answer has earned 7+ Landscape
                  Ontario Awards of Excellence.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/assets/pritty-landscapes/about/our-vision.jpg"
                  alt="Tyler Pritty's vision"
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-center mb-12">What We Believe</h2>
          </BlurFade>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Waves className="w-8 h-8 text-water" />,
                title: 'Naturally Refined',
                description:
                  "We collaborate with nature, not impose upon it. Every design starts with the land, the water, and your vision. Native plants, natural stone, water-inspired forms that belong.",
                image: '/assets/pritty-landscapes/about/our-mission.jpg',
              },
              {
                icon: <Leaf className="w-8 h-8 text-forest" />,
                title: 'Sustainably Built',
                description:
                  "Two-time Green Stamp Award winners. We use native plants, permeable surfaces, and water management practices that give back to the environment. Sustainability isn't marketing—it's how we build.",
                image: '/assets/pritty-landscapes/about/our-values.jpg',
              },
              {
                icon: <Sparkles className="w-8 h-8 text-gold" />,
                title: 'Uncompromising Craft',
                description:
                  "Every project is bespoke. Every stone placed with intention. We don't do templates—we do transformations. From 3D renders to final walkthrough, the details matter.",
                image: '/assets/pritty-landscapes/design/granite-shores-design.jpg',
              },
            ].map((item, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <CardHoverEffect className="h-full">
                  <div className="rounded-xl overflow-hidden h-full">
                    <div className="relative h-48">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">{item.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardHoverEffect>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-background">
        <div className="container-tight text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold mb-4">Recognition</h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Since 2021, our work has earned 7+ Landscape Ontario Awards of Excellence across
              categories from $100K to $1M. We&apos;re Ontario&apos;s only award-winning shoreline
              contractor—not a title we gave ourselves, but one the industry has recognized.
            </p>
          </BlurFade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { year: '2021', project: 'The Magical Forest', category: 'Water Features' },
              { year: '2023', project: 'On The Rocks', category: '$500K-$1M' },
              { year: '2023', project: 'Sunset Bay', category: 'Green Stamp' },
              { year: '2024', project: 'A River Runs Through It', category: '$250K-$500K' },
            ].map((award, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <div className="p-4 rounded-xl bg-muted border border-transparent hover:border-[#C9A962]/30 hover:shadow-[0_0_20px_rgba(201,169,98,0.1)] transition-all duration-300 cursor-default">
                  <div className="text-2xl font-bold text-[#C9A962]">{award.year}</div>
                  <div className="font-medium">{award.project}</div>
                  <div className="text-sm text-muted-foreground">{award.category}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1E1E1E] text-white relative overflow-hidden">
        {/* Animated gradient orb background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #C9A962 0%, transparent 70%)',
              filter: 'blur(60px)',
              top: '-10%',
              left: '20%',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, #4A90A4 0%, transparent 70%)',
              filter: 'blur(50px)',
              bottom: '-10%',
              right: '10%',
            }}
          />
        </div>

        <div className="container-tight text-center relative z-10">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What You Can Expect</h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <div className="max-w-md mx-auto text-left mb-10">
              <FeatureList
                variant="dark"
                features={[
                  { text: "Tyler's personal involvement from consultation" },
                  { text: 'A design process that listens before it creates' },
                  { text: 'Crews who arrive on time and leave clean' },
                  { text: 'Transparent communication throughout' },
                  { text: 'A landscape worthy of the investment' },
                ]}
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <CTAButton href="/#contact" variant="primary">
              Meet Tyler — Book Your Consultation
            </CTAButton>
          </BlurFade>
        </div>
      </section>

    </main>
    </SiteLayout>
  );
}
