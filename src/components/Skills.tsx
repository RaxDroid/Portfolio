import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  PenTool,
  Users,
  Database,
  Globe,
  Braces,
} from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Skill {
  icon: ReactNode;
  label: string;
  level: number;
}

interface SkillGroup {
  heading: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    heading: 'Core Expertise',
    skills: [
      { icon: <Server size={20} />, label: 'Backend Development', level: 92 },
      { icon: <PenTool size={20} />, label: 'Visual Design', level: 84 },
      { icon: <Users size={20} />, label: 'Leadership', level: 91 },
    ],
  },
  {
    heading: 'Technologies',
    skills: [
      { icon: <Code2 size={20} />, label: 'C#', level: 90 },
      { icon: <Braces size={20} />, label: 'TypeScript', level: 85 },
      { icon: <Code2 size={20} />, label: 'Angular', level: 80 },
      { icon: <Code2 size={20} />, label: 'React', level: 86 },
      { icon: <Database size={20} />, label: 'SQL', level: 82 },
      { icon: <Code2 size={20} />, label: 'Python', level: 75 },
    ],
  },
  {
    heading: 'Languages',
    skills: [
      { icon: <Globe size={20} />, label: 'Spanish (Native)', level: 100 },
      { icon: <Globe size={20} />, label: 'English (C2)', level: 95 },
    ],
  },
];

const barVariants = (level: number) => ({
  hidden: { width: 0 },
  visible: {
    width: `${level}%`,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
});

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <SectionHeading
        title="Skills"
        subtitle="Technical capability, product execution, and communication."
      />

      <div className="skills__groups">
        {skillGroups.map((group) => (
          <div key={group.heading} className="skills__group">
            <h3>{group.heading}</h3>
            <div className="skills__list">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.label}
                  className="skill-bar"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <div className="skill-bar__header">
                    <span className="skill-bar__icon">{skill.icon}</span>
                    <span className="skill-bar__label">{skill.label}</span>
                    <span className="skill-bar__pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <motion.div className="skill-bar__fill" variants={barVariants(skill.level)} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
