import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import RegisterSec from './RegisterSec'
import LocationFind from './LocationFind'

const home = () => {
  return (
    <>
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <RegisterSec/>
      <LocationFind/>
    </div></>
  )
}

export default home
