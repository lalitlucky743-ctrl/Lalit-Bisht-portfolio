import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COLORS, ACCENTS, FONTS } from '../utilities/constants';
import { Reveal, SectionTitle } from '../components/UI/Shared';

const BLOG_POSTS = [
  {
    id: 'ssju-question-paper',
    title: 'How I Built SSJU Question Paper Provider',
    excerpt: 'A journey of creating a platform that helps students access previous year question papers easily.',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    category: 'Project',
    color: ACCENTS.teal,
  },
  {
    id: 'razorpay-integration',
    title: 'Razorpay Integration Journey',
    excerpt: 'Implementing secure payment gateway for an e-commerce platform. Lessons learned and best practices.',
    date: 'Jan 10, 2025',
    readTime: '4 min read',
    category: 'Tech',
    color: ACCENTS.rose,
  },
  {
    id: 'react-bca-student',
    title: 'Learning React as a BCA Student',
    excerpt: 'How I went from zero to building full-fledged React applications during my BCA program.',
    date: 'Jan 5, 2025',
    readTime: '6 min read',
    category: 'Learning',
    color: ACCENTS.amber,
  },
];

const BlogPage = () => {
  return (
    <section style={{ padding: '80px 32px', maxWidth: '900px', margin: '0 auto' }}>
      <Reveal>
        <SectionTitle>📝 Blog</SectionTitle>
        <p style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '14px', textAlign: 'center', marginBottom: '40px' }}>
          Thoughts, learnings, and experiences from my development journey.
        </p>
      </Reveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {BLOG_POSTS.map((post, index) => (
          <Reveal delay={index * 0.08} key={post.id}>
            <motion.div
              whileHover={{ x: 8, scale: 1.01 }}
              style={{
                background: COLORS.panel,
                borderRadius: '12px',
                padding: '24px 28px',
                border: `1px solid ${COLORS.border}`,
                borderLeft: `4px solid ${post.color}`,
                transition: 'all 0.3s ease',
              }}
            >
              <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: FONTS.display, fontSize: '20px', color: COLORS.text }}>{post.title}</h3>
                  <span style={{ background: `${post.color}22`, color: post.color, padding: '2px 12px', borderRadius: '20px', fontSize: '11px', fontFamily: FONTS.mono }}>{post.category}</span>
                </div>
                <p style={{ color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '14px', lineHeight: 1.6 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', gap: '16px', marginTop: '12px', color: COLORS.textDim, fontFamily: FONTS.mono, fontSize: '12px' }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;