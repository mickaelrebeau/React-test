import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
// import ContactPage from './pages/Contact/ContactPage'
import MessagePage from './pages/Message/MessagePage'
import { useState } from 'react';
import BlogPage from './pages/Blog/BlogPage';
import ArticlePage from './pages/Article/ArticlePage';

function App() {
  const [messages, setMessages]: any = useState([])
  function handleAddMessage(message: any) {
    setMessages([...messages, message])
  }

  const [articles, setArticles]: any = useState([])
  function handleAddArticle(article: any) {
    setArticles([...articles, article])
  }
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage handleAddMessage={handleAddMessage} articles={articles} messages={messages}/>}></Route>
          <Route path="/message" element={<MessagePage messages={messages}/>}></Route>
          <Route path="/blog" element={<BlogPage articles={articles}/>}></Route>
          <Route path="/article" element={<ArticlePage handleAddArticle={handleAddArticle}/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App


// <Route path="/contact" element={<ContactPage handleAddMessage={handleAddMessage}/>}></Route>