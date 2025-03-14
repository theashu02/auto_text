import React from 'react'
import Header from '../components/header'
import WeatherWidget from '../components/Weather'
import Footer from '../components/footer'

export default function page() {
  return (
    <>
    <Header/>
    <WeatherWidget/>
    <Footer />
    </>
  )
}
