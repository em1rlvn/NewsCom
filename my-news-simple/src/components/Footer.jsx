export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} NewsKG. Все права защищены.</p>
        <p className="mt-2 text-sm">Данные предоставлены NewsAPI.org</p>
      </div>
    </footer>
  )
}