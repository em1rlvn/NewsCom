import { Link, useNavigate, useLocation } from "react-router-dom"

const CATEGORIES = [
  { slug: "", label: "Все" },
  { slug: "technology", label: "Технологии" },
  { slug: "science", label: "Наука" },
  { slug: "sports", label: "Спорт" },
  { slug: "entertainment", label: "Развлечения" },
  { slug: "business", label: "Бизнес" },
  { slug: "health", label: "Здоровье" },
  { slug: "world", label: "Мир" }
]

export default function Header({ searchQuery, setSearchQuery }) {

  const navigate = useNavigate()
  const location = useLocation()

  function handleSearch(e) {

    e.preventDefault()

    if (searchQuery.trim()) {
      navigate("/search")
    }

  }

  function isActive(slug) {

    if (!slug) return location.pathname === "/"

    return location.pathname === `/category/${slug}`

  }

  return (

    <header className="site-header">

      <div className="container header-inner">

        <Link to="/" className="logo">
          <img src="/news.png" className="logo-img" />
          <span className="logo-text">NewsCom</span>
        </Link>

        <form className="search-form" onSubmit={handleSearch}>

          <input
            className="search-input"
            placeholder="Поиск новостей..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />

          <button className="search-btn">⌕</button>

        </form>

      </div>

      <nav className="category-nav">

        <div className="container nav-inner">

          {CATEGORIES.map(c => (

            <Link
              key={c.slug || "all"}
              to={c.slug ? `/category/${c.slug}` : "/"}
              className={`nav-link ${isActive(c.slug) ? "active" : ""}`}
            >

              {c.label}

            </Link>

          ))}

        </div>

      </nav>

    </header>

  )
}