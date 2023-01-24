import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HomePage from './pages/Home'
import NewsPage from './pages/News'

function App(){
  return (
    <div className="app">
      <h1>React Router</h1>
      <nav>
        <ul>
          <li><a href="/">Home page</a></li>
          <li><a href="/news">News page</a></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />  
      </Routes> 
    </div>
  )
}

export default App