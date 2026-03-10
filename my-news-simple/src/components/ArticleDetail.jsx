import { useParams } from 'react-router-dom'

export default function ArticleDetail() {
  const { id } = useParams()

  const mockArticle = {
    title: "Полная статья: Пример очень важной новости",
    description: "Здесь будет полный текст статьи. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content: "Полный контент статьи, который обычно приходит в поле 'content' от NewsAPI (часто обрезанный до 200–500 символов). Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    urlToImage: "https://via.placeholder.com/1200x600?text=Большая+новость",
    url: "https://example.com/full-article",
    publishedAt: new Date().toISOString(),
    author: "Джон Доу",
    source: { name: "Примерный Источник" }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <img 
        src={mockArticle.urlToImage} 
        alt={mockArticle.title} 
        className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
      />

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {mockArticle.title}
      </h1>

      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-base">
        <span>{mockArticle.source.name}</span>
        <span className="mx-3">•</span>
        <span>{mockArticle.author || 'Автор неизвестен'}</span>
        <span className="mx-3">•</span>
        <time>{new Date(mockArticle.publishedAt).toLocaleString('ru-RU')}</time>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-6">{mockArticle.description}</p>
        <p className="text-lg leading-relaxed">{mockArticle.content}</p>
      </div>

      <div className="mt-10">
        <a
          href={mockArticle.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg"
        >
          Читать оригинал на сайте источника →
        </a>
      </div>
    </div>
  )
}