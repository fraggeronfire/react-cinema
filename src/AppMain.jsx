import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Layout/Header'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Movie from './Pages/Movie'
import Footer from './components/Layout/Footer'
import NotFound from './Pages/NotFound'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchMovies } from './Redux/slices/moviesSlice'


function AppMain() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
}, [])

  return (
    <>
  <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/favorites' element={<Favorites />} />
    <Route path='/movie/:id' element={<Movie />} />
    <Route path='*'element={<NotFound />} />
   </Routes>
   <Footer />
  </BrowserRouter>
    </>
  )
}

export default AppMain
