import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="hero__greeting">Hello, I am</p>
        <h1 className="hero__name">Raúl Sánchez</h1>
        <p className="hero__tagline">
          Software Engineer and CTO with a proven track record of architecting
          and scaling enterprise SaaS solutions for electrical and mechanical
          service operations.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn--primary">
            View My Work <ArrowDown size={18} />
          </a>
          <a href="mailto:raulenrique6@hotmail.com" className="btn">
            Contact Me <Mail size={18} />
          </a>
        </div>
      </motion.div>

      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
    </section>
  );
}
