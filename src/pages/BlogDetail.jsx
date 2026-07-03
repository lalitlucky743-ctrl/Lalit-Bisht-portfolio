import { COLORS, ACCENTS, FONTS } from '../utilities/constants';
import { Reveal } from '../components/UI/Shared';

const blogContent = {
  'ssju-question-paper': {
    title: 'How I Built SSJU Question Paper Provider',
    content: `
      <p>As a BCA student, I realized that students often struggle to find previous year question papers. 
      Many websites are either paid or have a terrible user experience. That's when I decided to build 
      SSJU Question Paper Provider.</p>
      
      <h3>The Problem</h3>
      <p>Students waste hours searching for question papers across different platforms. Most websites are:</p>
      <ul>
        <li>Paid or have hidden charges</li>
        <li>Poor mobile experience</li>
        <li>Outdated or incomplete papers</li>
      </ul>
      
      <h3>The Solution</h3>
      <p>I built a free, fast, and mobile-friendly platform where students can:</p>
      <ul>
        <li>Browse papers by subject and course</li>
        <li>Quick search functionality</li>
        <li>Clean and minimal UI</li>
        <li>Access papers instantly without login</li>
      </ul>
      
      <h3>Tech Stack</h3>
      <ul>
        <li>React.js for frontend</li>
        <li>Firebase for backend</li>
        <li>Tailwind CSS for styling</li>
      </ul>
      
      <h3>Results</h3>
      <p>The platform now serves hundreds of students every month. It's completely free and open-source.</p>
    `
  },
  'razorpay-integration': {
    title: 'Razorpay Integration Journey',
    content: `
      <p>Implementing Razorpay payment gateway was a challenging but rewarding experience. 
      Here's what I learned along the way.</p>
      
      <h3>Why Razorpay?</h3>
      <p>Razorpay is one of the most popular payment gateways in India. It offers:</p>
      <ul>
        <li>Easy integration with React</li>
        <li>Multiple payment methods</li>
        <li>Excellent developer documentation</li>
        <li>Competitive pricing</li>
      </ul>
      
      <h3>Challenges Faced</h3>
      <ul>
        <li>Handling webhook callbacks</li>
        <li>Payment status verification</li>
        <li>Error handling and user feedback</li>
        <li>Testing with test cards</li>
      </ul>
      
      <h3>Best Practices I Followed</h3>
      <ul>
        <li>Never store payment details on frontend</li>
        <li>Validate all payment responses on backend</li>
        <li>Implement proper error handling</li>
        <li>Test thoroughly before going live</li>
      </ul>
    `
  },
  'react-bca-student': {
    title: 'Learning React as a BCA Student',
    content: `
      <p>When I started my BCA journey, I knew I wanted to become a developer. Here's my journey 
      of learning React from scratch.</p>
      
      <h3>Starting Point</h3>
      <p>I had basic HTML, CSS, and JavaScript knowledge from my college. React seemed overwhelming at first.</p>
      
      <h3>Learning Path</h3>
      <ul>
        <li>Started with official React documentation</li>
        <li>Built small projects - Todo list, Calculator</li>
        <li>Learned about components, props, state</li>
        <li>Moved to hooks and context API</li>
        <li>Built real-world projects</li>
      </ul>
      
      <h3>Resources I Used</h3>
      <ul>
        <li>React Official Docs</li>
        <li>YouTube tutorials</li>
        <li>FreeCodeCamp</li>
        <li>Building projects every week</li>
      </ul>
      
      <h3>Advice for BCA Students</h3>
      <ul>
        <li>Build projects, don't just follow tutorials</li>
        <li>Contribute to open source</li>
        <li>Share your learning journey</li>
        <li>Never stop learning</li>
      </ul>
    `
  }
};

const BlogDetailPage = ({ id, navigateTo }) => {
  const post = blogContent[id];

  if (!post) {
    return (
      <div style={{ padding: '100px 32px', textAlign: 'center', color: COLORS.text }}>
        <h2 style={{ fontFamily: FONTS.display, fontSize: '2rem' }}>Blog post not found</h2>
        <button onClick={() => navigateTo("blog")} style={{ color: ACCENTS.amber, background: 'none', border: 'none', cursor: 'pointer', fontFamily: FONTS.mono, fontSize: '14px' }}>
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <section style={{ padding: '80px 32px', maxWidth: '800px', margin: '0 auto' }}>
      <Reveal>
        <button onClick={() => navigateTo("blog")} style={{ color: ACCENTS.amber, background: 'none', border: 'none', cursor: 'pointer', fontFamily: FONTS.mono, fontSize: '14px' }}>
          ← Back to Blog
        </button>
        <h1 style={{ fontFamily: FONTS.display, fontSize: '2.5rem', color: COLORS.text, margin: '20px 0' }}>
          {post.title}
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <div style={{ 
          background: COLORS.panel, 
          borderRadius: '12px', 
          padding: '40px', 
          border: `1px solid ${COLORS.border}`,
          fontFamily: FONTS.mono,
          fontSize: '15px',
          lineHeight: 1.8,
          color: COLORS.textDim,
        }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} style={{ 
            '& h3': { color: ACCENTS.amber, marginTop: '24px', marginBottom: '12px', fontFamily: FONTS.display },
            '& ul': { marginLeft: '20px', marginBottom: '16px' },
            '& li': { marginBottom: '6px' },
            '& p': { marginBottom: '16px' }
          }} />
        </div>
      </Reveal>
    </section>
  );
};

export default BlogDetailPage;