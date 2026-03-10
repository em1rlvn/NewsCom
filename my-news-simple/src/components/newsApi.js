// newsApi.js — GNews.io (правильные поля: title, description, content, url, image, publishedAt, source.name)
console.log('ENV KEY:', import.meta.env.VITE_GNEWS_API_KEY)
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4';

// Карта категорий: наш slug → GNews topic
const CATEGORY_MAP = {
  general:       'breaking-news',
  technology:    'technology',
  science:       'science',
  sports:        'sports',
  entertainment: 'entertainment',
  business:      'business',
  health:        'health',
  world:         'world',
};

async function fetchGNews(endpoint, params = {}) {
  if (!API_KEY) {
    console.error('❌ VITE_GNEWS_API_KEY не задан в .env.local');
    return [];
  }

  const query = new URLSearchParams({
    apikey: API_KEY,   
    lang:   'ru',
    max:    params.max || 12,
    ...params,
  });

  const url = `${BASE_URL}/${endpoint}?${query.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`GNews HTTP ${res.status}:`, await res.text());
      return [];
    }
    const data = await res.json();
    if (data.errors) {
      console.error('GNews API error:', data.errors);
      return [];
    }
    return data.articles || [];
  } catch (err) {
    console.error('Ошибка сети GNews:', err);
    return [];
  }
}

/**
 * @param {string} category 
 * @param {number} max
 */
export async function getLatestNews(category = '', max = 12) {
  const topic = CATEGORY_MAP[category] || 'breaking-news';
  return fetchGNews('top-headlines', { topic, max });
}

/**
 * @param {string} q
 * @param {number} max
 */
export async function searchNews(q, max = 12) {
  if (!q.trim()) return [];
  return fetchGNews('search', { q, max });
}
