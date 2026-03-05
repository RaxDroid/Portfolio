import { motion } from 'framer-motion';
import { Mail, Phone, UserRound, Instagram, Linkedin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const contacts = [
  {
    icon: <Instagram size={22} />,
    label: 'Instagram',
    value: '@raulsrimoli',
    url: 'https://www.instagram.com/raulsrimoli',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'raulsanchezrimoli',
    url: 'https://www.linkedin.com/in/raulsanchezrimoli/',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'raulenrique6@hotmail.com',
    url: 'mailto:raulenrique6@hotmail.com',
  },
  {
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '+1 829-546-2490',
    url: 'tel:+18295462490',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <SectionHeading
        title="Contact"
        subtitle="Open to software engineering, architecture, and technology leadership opportunities."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'grid', placeItems: 'center', marginBottom: '1.5rem' }}
      >
        <img src="/logo.svg" alt="Raul Sanchez logo" className="contact__logo" />
      </motion.div>

      <motion.div
        className="contact__socials"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {contacts.map((s) => (
          <motion.a
            key={s.label}
            href={s.url}
            target={s.url.startsWith('http') ? '_blank' : undefined}
            rel={s.url.startsWith('http') ? 'noreferrer' : undefined}
            className="social-card"
            variants={card}
            whileHover={{ y: -6, boxShadow: '0 12px 28px rgba(0,0,0,.15)' }}
          >
            <span className="social-card__icon">{s.icon}</span>
            <span className="social-card__label">{s.label}</span>
            <span style={{ fontSize: '0.85rem', textAlign: 'center' }}>{s.value}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="timeline__content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 680, margin: '0 auto' }}
      >
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
          <UserRound size={18} />
          Professional Reference
        </p>
        <p>Carmen Alcantara - Transneg / IT Project Consultant - +1 (809) 467-0833</p>
      </motion.div>
    </section>
  );
}
