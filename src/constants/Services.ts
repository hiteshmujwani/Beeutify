import Haircut from '../assets/images/CustomIcons/Haircut2.svg';
import Coloring from '../assets/images/CustomIcons/Coloring.svg';
import Manicure from '../assets/images/CustomIcons/Manicure.svg';
import Pedicure from '../assets/images/CustomIcons/Pedicure.svg';
import Facial from '../assets/images/CustomIcons/Facial.svg';
import Massage from '../assets/images/CustomIcons/Massage.svg';
import Waxing from '../assets/images/CustomIcons/Waxing.svg';
import Threading from '../assets/images/CustomIcons/Threading.svg';
import Makeup from '../assets/images/CustomIcons/Makeup.svg';
import Bridal from '../assets/images/CustomIcons/Bridal.svg';

const services = [
  {
    id: 1,
    label: 'All',
    description: 'Classic haircut with a consultation.',
    price: 25.0,
    type: 'Hair',
  },
  {
    id: 2,
    label: 'Haircut',
    description: 'Classic haircut with a consultation.',
    price: 25.0,
    type: 'Hair',
    icon: Haircut,
  },
  {
    id: 3,
    label: 'Coloring',
    description: 'Full head coloring with premium products.',
    price: 75.0,
    type: 'Hair',
    icon: Coloring,
  },
  {
    id: 4,
    label: 'Manicure',
    description: 'Nail shaping, cuticle care, and polish.',
    price: 20.0,
    type: 'Nails',
    icon: Manicure,
  },
  {
    id: 5,
    label: 'Pedicure',
    description: 'Soothing foot soak, scrub, and polish.',
    price: 30.0,
    type: 'Nails',
    icon: Pedicure,
  },
  {
    id: 6,
    label: 'Facial',
    description: 'Deep cleansing facial for all skin types.',
    price: 50.0,
    type: 'Skincare',
    icon: Facial,
  },
  {
    id: 7,
    label: 'Massage',
    description: 'Relaxing full-body massage.',
    price: 80.0,
    type: 'Spa',
    icon: Massage,
  },
  {
    id: 8,
    label: 'Waxing',
    description: 'Full body waxing service.',
    price: 40.0,
    type: 'Body',
    icon: Waxing,
  },
  {
    id: 9,
    label: 'Threading',
    description: 'Eyebrow shaping and facial threading.',
    price: 15.0,
    type: 'Face',
    icon: Threading,
  },
  {
    id: 10,
    label: 'Makeup',
    description: 'Professional makeup for any occasion.',
    price: 60.0,
    type: 'Makeup',
    icon: Makeup,
  },
  {
    id: 11,
    label: 'Bridal',
    description: 'Comprehensive bridal beauty package.',
    price: 300.0,
    type: 'Special',
    icon: Bridal,
  },
];

export default services;
