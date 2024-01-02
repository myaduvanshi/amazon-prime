import React from 'react'
import SlidetopMain from './SlidetopMain'
import CardsContent from './CardsContent/CardsContent'

function Home() {
  return (
    <>
    <div className='mx-auto w-full max-w-7xl bg-[#E3E6E6]'>
    <SlidetopMain/>
    <CardsContent/>
    </div>
    </>
  )
}

export default Home