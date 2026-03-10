// NewsList.jsx
import NewsCard from './NewsCard';

export default function NewsList({ articles = [], loading = false, error = null }) {
  if (loading) {
    return (
      <div className="news-list-skeleton">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton-card" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-error">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="news-empty">
        <p>Новостей не найдено</p>
      </div>
    );
  }

  return (
    <div className="news-list">
      {articles.map((article, i) => (
        <NewsCard key={article.url ?? i} article={article} />
      ))}
    </div>
  );
}
