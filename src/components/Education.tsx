import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights?: string[];
}

const education: EducationItem[] = [
  {
    title: 'Software Engineer',
    institution: 'Instituto Tecnologico de Santo Domingo (INTEC)',
    period: '2018 - 2022',
    description:
      'Strong academic focus on software engineering practices, documentation quality, and delivery discipline.',
    highlights: [
      'Recipient of scholarship for academic excellence',
      'Graduated Summa Cum Laude with GPA 3.80',
      'Developed software solutions and PMBOK / SDLC research documentation',
    ],
  },
  {
    title: 'Follow Me School',
    institution: 'College-Preparatory Education',
    period: '2005 - 2018',
    description: 'Academic formation with cumulative GPA 3.84.',
  },
];

const timeline = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <section id="education" className="section education">
      <SectionHeading
        title="Education"
        subtitle="Academic background and performance."
      />

      <motion.div
        className="timeline"
        variants={timeline}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {education.map((edu) => (
          <motion.div key={edu.title} className="timeline__item" variants={item}>
            <div className="timeline__icon">
              <GraduationCap size={22} />
            </div>
            <div className="timeline__content">
              <span className="timeline__period">{edu.period}</span>
              <h3>{edu.title}</h3>
              <p className="timeline__institution">{edu.institution}</p>
              <p>{edu.description}</p>
              {edu.highlights && (
                <ul className="timeline__highlights">
                  {edu.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
