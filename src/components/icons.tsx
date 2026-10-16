type IconProps = {
  className?: string;
};

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLogo({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 19V6.5L9 13l5-6.5V19" />
      <circle cx="18.5" cy="7.5" r="2" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12h15M13 5.5 19.5 12 13 18.5" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 4h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4Z" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21.5s7-6.4 7-12A7 7 0 0 0 5 9.5c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1-3.5 4-5.5 7.5-5.5s6.5 2 7.5 5.5" />
    </svg>
  );
}

export function IconMessageSquare({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5h16v11H9l-4 4V5Z" />
    </svg>
  );
}

export function IconAgent({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4.5" y="8" width="15" height="11" rx="3" />
      <path d="M12 8V4.5" />
      <circle cx="12" cy="3.2" r="1.2" />
      <circle cx="9" cy="13.5" r="1.3" />
      <circle cx="15" cy="13.5" r="1.3" />
      <path d="M9 17.5h6" />
    </svg>
  );
}

export function IconWorkflow({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4" width="5.5" height="5.5" rx="1.4" />
      <rect x="15.5" y="4" width="5.5" height="5.5" rx="1.4" />
      <rect x="9.3" y="14.5" width="5.5" height="5.5" rx="1.4" />
      <path d="M5.8 9.5v3a2 2 0 0 0 2 2h1.5M18.3 9.5v3a2 2 0 0 1-2 2h-1.5" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 19 6v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z" />
      <path d="M8.8 12 11 14.3l4.2-4.6" />
    </svg>
  );
}

export function IconActivity({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 13h4l2-6 4 12 2-9.5 2 3.5h3" />
    </svg>
  );
}

export function IconCpu({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="7" width="10" height="10" rx="1.6" />
      <rect x="10" y="10" width="4" height="4" rx="0.8" />
      <path d="M9 3.5v2.3M15 3.5v2.3M9 18.2v2.3M15 18.2v2.3M3.5 9v2.3M3.5 15v2.3M20.5 9v2.3M20.5 15v2.3" />
    </svg>
  );
}

export function IconLock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </svg>
  );
}

export function IconDatabase({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.8" />
      <path d="M4.5 6v12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6" />
      <path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" />
    </svg>
  );
}

export function IconTerminal({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M6.5 9.5 10 12.5 6.5 15.5M12.5 15.5h5" />
    </svg>
  );
}

export function IconOrbit({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="2.3" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(25 12 12)" />
      <circle cx="4" cy="9.6" r="1.1" fill="currentColor" stroke="none" transform="rotate(25 12 12)" />
    </svg>
  );
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17.5a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.2 9a4.3 4.3 0 0 1-.7 8.5H7Z" />
    </svg>
  );
}

export function IconServer({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="4" width="17" height="6.5" rx="1.6" />
      <rect x="3.5" y="13.5" width="17" height="6.5" rx="1.6" />
      <path d="M7 7.3h.01M7 16.8h.01" strokeWidth="2.2" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.8 19c0.9-3.1 3.4-4.8 6.2-4.8s5.3 1.7 6.2 4.8" />
      <circle cx="17" cy="8.5" r="2.3" opacity="0.7" />
      <path d="M15.5 14.5c2.2 0.3 3.8 1.8 4.5 4.3" opacity="0.7" />
    </svg>
  );
}
