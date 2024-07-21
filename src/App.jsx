import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Cards from './components/Cards';
import Footer from './components/Footer';
import "./assets/css/index.scss"
const App = () => {
  return (
    <div>
        <Header/>
        <Content/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default App