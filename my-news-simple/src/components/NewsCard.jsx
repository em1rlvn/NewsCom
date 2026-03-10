export default function NewsCard({ article, hero }) {

  if (!article) return null

  const { title, description, url, image, publishedAt, source } = article

  const date = publishedAt
    ? new Date(publishedAt).toLocaleDateString("ru-RU")
    : "Недавно"

  return (

    <article className={`news-card ${hero ? "hero" : ""}`}>

      {image ? (

        <img
          src={image}
          alt={title}
          className="card-image"
          loading="lazy"
          onError={(e)=>{
            e.target.src="https://placehold.co/600x400?text=Нет+фото"
          }}
        />

      ) : (

        <div className="card-image-placeholder">
          Нет фото
        </div>

      )}

      <div className="card-body">

        <div className="card-source-date">
          <span>{source?.name || "Источник"}</span>
          <span>{date}</span>
        </div>

        <h3 className="card-title">{title}</h3>

        {description &&
          <p className="card-description">{description}</p>
        }

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Читать →
        </a>

      </div>

    </article>

  )
}