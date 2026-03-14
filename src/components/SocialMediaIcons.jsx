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
    <div className="flex items-center">
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
          className="-ml-1 max-[399px]:-ml-[10px] opacity-80 transition-opacity first:ml-0 hover:opacity-100"
        />
      ))}
    </div>
  );
};

export default SocialIconsComponent;