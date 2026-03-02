import { Driver } from '@/types';

const PLACEHOLDER = '/images/placeholders/placeholder.svg';

export const featuredDrivers: Driver[] = [
  {
    id: '1',
    slug: 'carlos-vega',
    name: 'Carlos Vega',
    team: 'Team Red Bull Racing',
    country: 'El Salvador',
    number: '01',
    subtitle: 'Campeón Nacional',
    image: PLACEHOLDER,
  },
  {
    id: '2',
    slug: 'sofia-martinez',
    name: 'Sofía Martínez',
    team: 'Velocity Racing',
    country: 'El Salvador',
    number: '02',
    subtitle: 'Subcampeona Serie GT',
    image: PLACEHOLDER,
  },
  {
    id: '3',
    slug: 'diego-alvarez',
    name: 'Diego Álvarez',
    team: 'OMP Racing',
    country: 'Costa Rica',
    number: '03',
    subtitle: 'Piloto Revelación',
    image: PLACEHOLDER,
  }
];

