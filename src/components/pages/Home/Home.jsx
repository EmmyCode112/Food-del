import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExploreMemu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../AppDownload/AppDownload'
const Home = () => {

    const [category, setCategory] = useState('All');

  return (

    <div>
        <Header/>
        <ExploreMemu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home