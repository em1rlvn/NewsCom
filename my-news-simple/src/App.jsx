import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Header from "./components/Header"
import Home from "./components/Home"
import Category from "./components/Category"
import SearchResults from "./components/SearchResults"

function App() {

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Router>

      <div className="app-wrapper">

        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="main-content">
          <div className="container">

            <Routes>

              <Route path="/" element={<Home />} />

              <Route
                path="/category/:category"
                element={<Category />}
              />

              <Route
                path="/search"
                element={<SearchResults query={searchQuery} />}
              />

              <Route
                path="*"
                element={
                  <div className="not-found">
                    <h1>404</h1>
                    <p>Страница не найдена</p>
                  </div>
                }
              />

            </Routes>

          </div>
        </main>

        <footer>
          <div className="container">
            <p>© {new Date().getFullYear()} NewsCom</p>
          </div>
        </footer>

      </div>

    </Router>
  )
}

export default App