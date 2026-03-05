import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, Workflow } from 'lucide-react';
import SectionHeading from './SectionHeading';

type ProjectCategory = 'all' | 'saas' | 'operations';

interface Project {
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  tags: string[];
  image: string;
  liveUrl?: string;
}

interface AlrocamProduct {
  name: string;
  description: string;
  logo: string;
}

const alrocamProducts: AlrocamProduct[] = [
  {
    name: 'ArcCentral',
    description: 'Core operations and microservices centralizer.',
    logo: '/arccentral.png',
  },
  {
    name: 'ArcDriver',
    description: 'Workshop tracking, fleet geolocation and management.',
    logo: '/arcdriver.png',
  },
  {
    name: 'ArcHealth',
    description: 'Patient management, care coordination and health report monitoring.',
    logo: '/archealth.png',
  },
  {
    name: 'ArcSupply',
    description: 'Supply chain, purchase management and resource control.',
    logo: '/arcsupply.png',
  },
  {
    name: 'ArcUnit / ArcProject',
    description: 'Unit-level tracking, project management and execution.',
    logo: '/arcunit.png',
  },
];

const projects: Project[] = [
  {
    title: 'Integrated Contractor SaaS Suite',
    description:
      'Multi-platform ecosystem for contractor workflows and electrical service partnerships, aligned to national infrastructure and compliance requirements.',
    category: 'saas',
    tags: ['C#', '.NET', 'Angular', 'SaaS'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    title: 'Modular Billing Web Application',
    description:
      'Billing platform with invoice management, payment tracking, cashier workflows, tax support, and multi-currency processing.',
    category: 'operations',
    tags: ['TypeScript', 'Angular', 'SQL', 'Billing', 'Finance'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    title: 'Brigade Management Platform',
    description:
      'Web system for external resource management, operational tracking, and task coordination across field teams.',
    category: 'operations',
    tags: ['TypeScript', 'Angular', 'Operations', 'Resource Planning', 'Task Management'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    title: 'Service Payment App Backend',
    description:
      'Backend architecture and branding implementation for a service-payment solution focused on reliable transaction processing.',
    category: 'saas',
    tags: ['Backend', 'C#', 'Payments', 'Architecture'],
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&q=80',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects">
      <SectionHeading
        title="Projects"
        subtitle="Enterprise software platforms delivered for real operational environments."
      />

      <motion.div
        className="alrocam"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="alrocam__header">
          <h3>Alrocam Product Suite</h3>
          <p>Integrated platforms designed and led end-to-end.</p>
        </div>
        <div className="alrocam__logos">
          {alrocamProducts.map((product) => (
            <div key={product.name} className="alrocam__card">
              <div className="alrocam__logo-wrap">
                <img src={product.logo} alt={`${product.name} logo`} />
              </div>
              <span className="alrocam__name">{product.name}</span>
              <span className="alrocam__desc">{product.description}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="projects__filters">
        {(['all', 'saas', 'operations'] as ProjectCategory[]).map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'filter-btn--active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' && 'All'}
            {cat === 'saas' && (
              <>
                <Building2 size={16} /> SaaS
              </>
            )}
            {cat === 'operations' && (
              <>
                <Workflow size={16} /> Operations
              </>
            )}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map((project, i) => (
          <motion.article
            key={project.title}
            className="project-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="project-card__img">
              <img src={project.image} alt={project.title} loading="lazy" />
              <span className="project-card__badge">
                {project.category === 'saas' ? <Building2 size={14} /> : <Workflow size={14} />}
                {project.category}
              </span>
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
