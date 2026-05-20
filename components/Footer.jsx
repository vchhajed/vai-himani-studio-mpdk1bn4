'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSiteContent } from '@/lib/useSiteContent';

export default function Footer() {
  const content = useSiteContent();
  const footer = content?.footer || {};
  const contact = content?.contact || {};

  const brandName = footer.brandName || 'HIMANI STUDIO';
  const tagline = footer.tagline || 'Bespoke fashion design studio creating personalized, expertly crafted garments that elevate your individual style with premium materials and dedicated craftsmanship.';
  const phone = footer.presentedPhone || contact.phone || '+91 98604 89490';
  const email = footer.presentedEmail || contact.email || 'hello@himanistudio.com';
  const address = contact.address || 'Design Studio, Forest Sage Plaza,\nPune 411037';
  const presentedBy = footer.presentedBy || '';
  const copyright = footer.copyright || '© 2025 Himani Studio. All rights reserved. | Custom Fashion Design Studio';
  const waPhone = phone.replace(/\D/g, '');

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: 20 }}>
            <div style={{ background: '#fff', borderRadius: 8, padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, flexShrink: 0 }}>
              <Image src="/logo.png" alt={brandName} width={38} height={38} style={{ objectFit: 'contain' }} />
            </div>
            <div className="logo-text">
              <span className="logo-name">{brandName}</span>
              <span className="logo-tag">Couture Design Studio</span>
            </div>
          </div>
          <p>{tagline}</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {[
              { href: '/about', label: 'About' },
              { href: '/collections', label: 'Collections' },
              { href: '/services', label: 'Services' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/testimonials', label: 'Testimonials' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-products">
          <h4>Services</h4>
          <ul>
            {['Custom Couture', 'Bridal Designs', 'Everyday Wear', 'Evening Wear', 'Styling Consultation'].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><a href={`https://wa.me/${waPhone}`} target="_blank" rel="noopener noreferrer">{phone}</a></p>
          <p><a href={`mailto:${email}`}>{email}</a></p>
          <p style={{ whiteSpace: 'pre-line' }}>{address}</p>
          {presentedBy && <p className="footer-person">Presented by: <strong>{presentedBy}</strong></p>}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}