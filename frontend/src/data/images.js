// The Realm Survivor RPG all assets are bundled locally (served from /realm)
// so the site is fully self-contained and does not depend on any external host.

export const LOGO = '/realm/logo.png';
export const MK_LOGO = '/realm/mk_logo.png';
export const REALMS = [
  { key: 'realm_1', src: '/realm/realms/realm_1.jpg', alt: 'Realm of the Realm Survivor RPG' },
  { key: 'realm_2', src: '/realm/realms/realm_2.jpg', alt: 'Realm of the Realm Survivor RPG' },
  { key: 'realm_3', src: '/realm/realms/realm_3.png', alt: 'Realm of the Realm Survivor RPG' },
  { key: 'realm_4', src: '/realm/realms/realm_4.png', alt: 'Realm of the Realm Survivor RPG' },
];
export const WEBSITE_BG = '/realm/website_bg.jpg';
export const MEDIA_BG = '/realm/media_bg.jpg';
export const TRAILER = '/realm/trailer.mp4';
export const TRAILER_POSTER = '/realm/trailer_poster.jpg';

// 35 official in-game screenshots, bundled in /public/realm/shots.
export const SHOTS = Array.from({ length: 35 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { key: `ss_${n}`, src: `/realm/shots/${`ss_${n}`}.jpg`, full: `/realm/shots/ss_${n}.jpg` };
});

// Assets are local; return the path as-is (extra sizing args are ignored).
export const img = (url) => url;
