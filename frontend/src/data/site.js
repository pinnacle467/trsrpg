// Global site configuration: navigation, socials, footer.
import { GAME } from './game';

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Media', to: '/media' },
  { label: 'Support', to: '/support' },
  { label: 'MK GAMES', to: '/mkgames' },
];

export const SOCIALS = [
  { label: 'Steam', icon: 'Gamepad2', href: GAME.steam },
];

export const STUDIO = {
  name: 'Monarchy Knuckle Games',
  copyright: `© ${new Date().getFullYear()} Monarchy Knuckle Games. All Rights Reserved.`,
  note: 'The Realm Survivor RPG and all related marks are property of Monarchy Knuckle Games.',
};
