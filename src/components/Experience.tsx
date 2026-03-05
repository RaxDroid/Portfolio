import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Founder / Chief Technology Officer',
    company: 'Alrocam SRL',
    period: 'Aug 2023 - Present',
    description:
      'Leading technical vision and roadmap delivery across multiple SaaS platforms aligned with national infrastructure and regulatory requirements.',
    highlights: [
      'Translate strategic business needs into high-impact technical architecture',
      'Drive operational efficiency in complex and regulated environments',
      'Lead cross-functional teams through end-to-end product execution',
    ],
  },
  {
    role: 'Software Developer (Mid)',
    company: 'Transneg SRL',
    period: '2023',
    description:
      'Designed and deployed a modular billing web platform for invoice workflows, payment tracking, tax handling, and multi-currency operations.',
    highlights: [
      'Built invoice management, cashier, and financial control submodules',
      'Improved operational efficiency by 60% for client workflows',
      'Delivered 70% measurable business value through modernization',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Transneg SRL',
    period: '2021 - 2023',
    description:
      'Developed a brigade management web application to coordinate external resources, track operations, and support field task execution.',
    highlights: [
      'Built the application from scratch and supported rollout',
      'Managed business-partner integrations and operational workflows',
      'Contributed to marketing and project management initiatives',
    ],
  },
  {
    role: 'Intern',
    company: 'Transneg SRL',
    period: 'Aug 2021 - Aug 2023',
    description:
      'Applied project management practices to improve the development department structure and internal productivity.',
    highlights: [
      'Improved team organization and execution processes',
      'Developed branding and backend structure for a service payment app',
      'Collaborated with senior teams across product and operations',
    ],
  },
];

const timeline = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <SectionHeading
        title="Experience"
        subtitle="Building software solutions that create measurable business impact."
      />

      <motion.div
        className="timeline"
        variants={timeline}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {experiences.map((exp) => (
          <motion.div key={`${exp.role}-${exp.company}`} className="timeline__item" variants={item}>
            <div className="timeline__icon">
              <Briefcase size={20} />
            </div>
            <div className="timeline__content">
              <span className="timeline__period">{exp.period}</span>
              <h3>{exp.role}</h3>
              <p className="timeline__institution">{exp.company}</p>
              <p>{exp.description}</p>
              <ul className="timeline__highlights">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
