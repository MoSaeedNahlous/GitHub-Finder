import React from 'react';

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        This is a ReactJs Web-app Created and designed By{' '}
        <a
          href='https://msn-portfolio.netlify.app/'
          style={{ fontWeight: '600' }}
        >
          Mohammad Saeed Nahlous.
        </a>
      </p>
      <p>This Web-app consumes GitHub API.</p>
      <small>versios: 1.1</small>
    </div>
  );
};
export default About;
