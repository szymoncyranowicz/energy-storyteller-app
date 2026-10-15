export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/szymon-cyranowicz-baa242140';

export const LINKEDIN_PROFILE_HANDLE = 'szymon-cyranowicz-baa242140';

export function linkedinTagUrl(keyword: string) {
  return `https://www.linkedin.com/search/results/all/?keywords=%23${encodeURIComponent(keyword)}&origin=HASH_TAG_FROM_FEED`;
}
