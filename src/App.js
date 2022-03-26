import './App.css';
import Header from './Components/Header/Header'
import SplashScreen from './Components/SplashScreen/SplashScreen'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Portfolio from'./Components/Portfolio/Portfolio'
import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {

  const timer = 5000;

  const [splashActive, setSplashActive] = useState(() => {
    const get = localStorage.getItem('splash')
    return get !== null ? JSON.parse(get) : true
  })

  useEffect(()=>{
    const splashTimeout = setTimeout(() =>
     setSplashActive(false)
    ,timer);
    return () => clearTimeout(splashTimeout) 
  }, [])

  useEffect( ()=> {
    localStorage.setItem('splash', JSON.stringify(splashActive))
},[splashActive])  
  

  return (
    <div className="App">
            <Header/>

       {splashActive ?  <SplashScreen/> : null}

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
