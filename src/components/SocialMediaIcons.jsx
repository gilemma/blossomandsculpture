"use client";

import { SocialIcon } from 'react-social-icons';

const socialLinks = [
  { url: 'https://x.com', label: 'X' },
  { url: 'https://facebook.com', label: 'Facebook' },
  { url: 'https://instagram.com', label: 'Instagram' },
  { url: 'https://pinterest.com', label: 'Pinterest' },
];

const SocialIconsComponent = () => {
  return (
    <div className="flex items-center gap-1.5">
      {socialLinks.map((link) => (
        <SocialIcon
          key={link.label}
          url={link.url}
          label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          bgColor="transparent"
          fgColor="#1f2937"
          style={{ height: 32, width: 32 }}
          className="opacity-80 transition-opacity hover:opacity-100"
        />
      ))}
    </div>
  );
};

export default SocialIconsComponent;