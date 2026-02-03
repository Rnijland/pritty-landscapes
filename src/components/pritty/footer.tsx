import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  services: [
    { name: 'Shoreline Protection', href: '/services/shoreline-protection' },
    { name: 'Water Features & Ponds', href: '/services/water-features' },
    { name: 'Landscape Design', href: '#' },
    { name: 'Landscape Construction', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Projects', href: '/projects/on-the-rocks' },
    { name: 'Thunder Beach', href: '/projects/thunder-beach' },
    { name: 'Contact', href: '#contact' },
  ],
  areas: [
    'Georgian Bay',
    'Muskoka',
    'Blue Mountain',
    'Collingwood',
    'Thornbury',
    'Toronto & GTA',
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/pritty-landscapes/logos/logo.png"
              alt="Pritty Landscapes"
              width={160}
              height={64}
              className="brightness-0 invert mb-6"
            />
            <p className="text-white/70 text-sm mb-6">
              Award-winning landscape design and shoreline protection. Naturally
              refined, inspired by water.
            </p>
            <div className="flex gap-3">
              <Image
                src="/assets/pritty-landscapes/awards/green-stamp-award.jpg"
                alt="Green Stamp Award"
                width={50}
                height={50}
                className="rounded"
              />
              <Image
                src="/assets/pritty-landscapes/awards/awards-excellence.jpg"
                alt="Awards of Excellence"
                width={50}
                height={50}
                className="rounded"
              />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Markham Office
                </p>
                <a
                  href="tel:4167220210"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  (416) 722-0210
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Collingwood Office
                </p>
                <a
                  href="tel:7059844810"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  (705) 984-4810
                </a>
              </div>
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@prittylandscapes.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  info@prittylandscapes.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-2">
                Service Areas
              </p>
              <p className="text-white/70 text-sm">
                {footerLinks.areas.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Pritty Landscapes Inc. All rights
            reserved.
          </p>
          <p className="text-white/50 text-sm">
            Ontario&apos;s Only Award-Winning Shoreline Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
