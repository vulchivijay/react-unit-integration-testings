import React from 'react';

const Link = ({ href, children }) => {
  return <a href={href} data-testid="custom-link">{children}</a>;
};

export default Link;