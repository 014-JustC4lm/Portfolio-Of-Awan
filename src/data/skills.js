import { 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAdobepremierepro, 
  SiAdobelightroom,
  SiDavinciresolve 
} from 'react-icons/si';
import { RiScissorsCutFill } from "react-icons/ri";

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
    icon: RiScissorsCutFill, // Fallback icon for CapCut
    color: 'currentColor' // Inherits from parent, making it black in light mode and white in dark mode.
  },
  { 
    name: 'DaVinci Resolve (Basic)', 
    icon: SiDavinciresolve, 
    color: '#FF5C5C' // Approximate color
  }
];
