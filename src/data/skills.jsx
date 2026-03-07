import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobepremierepro, 
  SiAdobelightroom,
  SiDavinciresolve 
} from 'react-icons/si';

const CapCutIcon = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width="1em" 
    height="1em" 
    {...props}
  >
    <path d="M11.96 0A11.96 11.96 0 0 0 0 11.96a11.96 11.96 0 0 0 11.96 11.96A11.96 11.96 0 0 0 23.92 11.96 11.96 11.96 0 0 0 11.96 0zm0 3.737a8.223 8.223 0 0 1 8.223 8.223 8.223 8.223 0 0 1-8.223 8.224A8.223 8.223 0 0 1 3.737 11.96a8.223 8.223 0 0 1 8.223-8.223zm-.008 2.067L6.611 9.947A2.85 2.85 0 0 0 5.4 12c0 1.098.622 2.052 1.536 2.503l4.981 3.653c.159.13.363.208.583.208a1.006 1.006 0 0 0 .584-.208l4.98-3.653a2.85 2.85 0 0 0 1.536-2.503 2.85 2.85 0 0 0-1.21-2.053L12.553 5.804A1.006 1.006 0 0 0 11.97 5.8l-.018.004zM12.44 14l-4.992 3.66a2.84 2.84 0 0 0-1.21 2.052c0 1.098.62 2.052 1.535 2.503l4.98-3.653a.986.986 0 0 0 .584.208 1.006 1.006 0 0 0 .583-.208l4.981 3.652c.914-.45 1.536-1.405 1.536-2.502a2.83 2.83 0 0 0-1.21-2.053L14.237 14h-1.796zm-4.992-3.8h8.92c-.08-.184-.183-.356-.307-.514A3.42 3.42 0 0 0 16.273 8.5C15.823 8.35 15.342 8 14.862 8c-1.138 0-2.261.215-2.887.842C11.35 9.467 10.227 8 9.088 8c-.48 0-.96.35-1.41.5a3.42 3.42 0 0 0 .211 1.186c-.124.158-.227.33-.307.514z" />
  </svg>
);

export const softwareSkills = [
  { 
    name: 'Photoshop', 
    icon: SiAdobephotoshop, 
    color: '#31A8FF' 
  },
  { 
    name: 'Illustrator', 
    icon: SiAdobeillustrator, 
    color: '#FF9A00' 
  },
  { 
    name: 'Lightroom', 
    icon: SiAdobelightroom, 
    color: '#31A8FF' 
  },
  { 
    name: 'Premiere Pro', 
    icon: SiAdobepremierepro, 
    color: '#9999FF' 
  },
  { 
    name: 'CapCut', 
    icon: CapCutIcon,
    color: 'currentColor'
  },
  { 
    name: 'DaVinci Resolve (Basic)', 
    icon: SiDavinciresolve, 
    color: '#FF5C5C'
  }
];
