import Parlour_1 from '../assets/images/ShopProfileImage/Parlour_1.png';
import Parlour_2 from '../assets/images/ShopProfileImage/Parlour_2.png';
import Parlour_3 from '../assets/images/ShopProfileImage/Parlour_3.png';
import Salon_1 from '../assets/images/ShopProfileImage/Salon_1.png';
import Salon_2 from '../assets/images/ShopProfileImage/Salon_2.png';
import Salon_3 from '../assets/images/ShopProfileImage/Salon_3.png';
import Spa_1 from '../assets/images/ShopProfileImage/Spa_1.png';
import Spa_2 from '../assets/images/ShopProfileImage/Spa_2.png';
import Spa_3 from '../assets/images/ShopProfileImage/Spa_3.png';


import Manicure from '../assets/images/CustomIcons/Manicure.svg';

const shops = [
  {
    id: '1',  
    name: 'Elite Spa',
    rating: 4.5,
    distance: 2.3,
    location: '23 Green Valley, Sunset St, 560001',
    ShopProfileImage: Spa_1,
    services: ['Massage', 'Facial', 'Body Scrub'],
  },
  {
    id: '2',
    name: 'Glamour Salon',
    rating: 4.7,
    distance: 1.8,
    location: '12 Maple Street, Downtown, 560002',
    ShopProfileImage: Parlour_1,
    services: ['Haircut', 'Coloring', 'Styling'],
  },
  {
    id: '3',
    name: 'Urban Parlour',
    rating: 4.2,
    distance: 3.5,
    location: '89 Downtown Plaza, King Rd, 560003',
    ShopProfileImage: Parlour_2,
    services: ['Nail Art', 'Waxing', 'Makeup'],
  },
  {
    id: '4',
    name: 'Luxury Spa',
    rating: 4.8,
    distance: 0.9,
    location: '45 Ocean Drive, Beachside, 560004',
    ShopProfileImage: Spa_2,
    services: ['Aromatherapy', 'Massage'],
  },
  {
    id: '5',
    name: 'Style & Shine Salon',
    rating: 4.3,
    distance: 2.1,
    location: '101 Cedar Park, Hill Rd, 560005',
    ShopProfileImage: Salon_1,
    services: ['Hair Treatments', 'Keratin'],
  },
  {
    id: '6',
    name: 'Blissful Spa',
    rating: 4.6,
    distance: 4.0,
    location: '55 Sunset Boulevard, Crescent Ave, 560006',
    ShopProfileImage: Spa_3,
    services: ['Facial', 'Body Wrap', 'Manicure'],
  },
  {
    id: '7',
    name: 'Serenity Parlour',
    rating: 4.1,
    distance: 3.2,
    location: '11 Hilltop Avenue, Brook St, 560007',
    ShopProfileImage: Parlour_3,
    services: ['Coloring', 'Nail Care'],
  },
  {
    id: '8',
    name: 'Chic Salon',
    rating: 4.9,
    distance: 1.2,
    location: '7 Rosewood Lane, Pine St, 560008',
    ShopProfileImage: Salon_2,
    services: ['Bridal', 'Skin Care'],
  },
  {
    id: '9',
    name: 'Harmony Spa',
    rating: 4.4,
    distance: 2.9,
    location: '33 Pine Grove, Maple Rd, 560009',
    ShopProfileImage: Spa_1,
    services: ['Massage', 'Reflexology'],
  },
  {
    id: '10',
    name: 'Radiance Parlour',
    rating: 4.2,
    distance: 1.5,
    location: '90 Elm Street, Greenfield, 560010',
    ShopProfileImage: Parlour_1,
    services: ['Haircut', 'Makeup', 'Facials'],
  },
  {
    id: '11',
    name: 'Glow & Shine Salon',
    rating: 4.7,
    distance: 3.7,
    location: '66 Pearl Avenue, Oak St, 560011',
    ShopProfileImage: Salon_3,
    services: ['Nail Extensions', 'Skin Treatments'],
  },
  {
    id: '12',
    name: 'Majestic Spa',
    rating: 4.0,
    distance: 5.0,
    location: '120 Highland Park, Royal Rd, 560012',
    ShopProfileImage: Spa_2,
    services: ['Spa Packages', 'Massage'],
  },
  {
    id: '13',
    name: 'Elegant Parlour',
    rating: 4.3,
    distance: 2.4,
    location: '78 Birchwood Road, Valley St, 560013',
    ShopProfileImage: Parlour_2,
    services: ['Hair Styling', 'Makeup'],
  },
  {
    id: '14',
    name: 'Luxe Salon',
    rating: 4.8,
    distance: 1.1,
    location: '5 Coral Street, Bridge Rd, 560014',
    ShopProfileImage: Salon_1,
    services: ['Bridal', 'Hair Treatments'],
  },
  {
    id: '15',
    name: 'Zen Spa',
    rating: 4.6,
    distance: 3.0,
    location: '87 Willow Creek, Lake Rd, 560015',
    ShopProfileImage: Spa_3,
    services: ['Massage', 'Reflexology'],
  },
  {
    id: '16',
    name: 'Velvet Touch Parlour',
    rating: 4.5,
    distance: 2.6,
    location: '110 Maplewood Drive, Oakfield, 560016',
    ShopProfileImage: Parlour_3,
    services: ['Manicure', 'Pedicure', 'Haircut'],
  },
  {
    id: '17',
    name: 'Tranquility Spa',
    rating: 4.9,
    distance: 1.9,
    location: '99 Lakeshore Road, Forest St, 560017',
    ShopProfileImage: Spa_1,
    services: ['Relaxation Massage', 'Facials'],
  },
  {
    id: '18',
    name: 'Splendid Salon',
    rating: 4.1,
    distance: 3.3,
    location: '45 Magnolia Street, Elm St, 560018',
    ShopProfileImage: Salon_2,
    services: ['Hair Coloring', 'Nail Art'],
  },
  {
    id: '19',
    name: 'Glow Beauty Parlour',
    rating: 4.4,
    distance: 2.7,
    location: '37 Aspen Heights, Mountain Rd, 560019',
    ShopProfileImage: Parlour_1,
    services: ['Facial', 'Waxing', 'Nail Care'],
  },
  {
    id: '20',
    name: 'Rejuvenate Spa',
    rating: 4.7,
    distance: 1.4,
    location: '22 Oakwood Boulevard, Birch St, 560020',
    ShopProfileImage: Spa_3,
    services: ['Aromatherapy', 'Body Treatments'],
  },
];


export default shops;


export const ShopSections = [
  {id:1,section:"About Us"},{id:2,section:"Services"},{id:3,section:"Package"},{id:4,section:"Gallery"},{id:5,section:"Reviews"}
]


export const CommonActions = [
  {id:1,ActionName:"Website",icon:Manicure},{id:2,ActionName:"Website",icon:Manicure},{id:3,ActionName:"Website",icon:Manicure},{id:4,ActionName:"Website",icon:Manicure},{id:5,ActionName:"Website",icon:Manicure}
]

export const shopSpecialists = [
  {id:1,name:"Deepak",profile:Spa_1,designation:"Hair Stylist"},{id:2,name:"Deepak",profile:Spa_1,designation:"Hair Stylist"},{id:3,name:"Deepak",profile:Spa_1,designation:"Hair Stylist"},{id:4,name:"Deepak",profile:Spa_1,designation:"Hair Stylist"},{id:5,name:"Deepak",profile:Spa_1,designation:"Hair Stylist"},{id:6,name:"Deepak",profile:Spa_1,designation:"Hair Stylist"},
]

export const shopHours = [{id:1,time:"9"},{id:2,time:"10"},{id:3,time:"11"},{id:4,time:"12"},{id:5,time:"13"},{id:6,time:"14"},{id:7,time:"15"},{id:8,time:"16"},{id:9,time:"17"},{id:10,time:"18"},{id:11,time:"19"},{id:12,time:"20"},{id:13,time:"21"}]