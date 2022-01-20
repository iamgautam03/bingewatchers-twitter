import { TRENDING_BASE_URL } from '../config';

const getTrending = async () => {
  return await (await fetch(TRENDING_BASE_URL)).json();
}

export default getTrending;