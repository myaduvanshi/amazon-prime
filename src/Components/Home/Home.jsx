import React from 'react'
import SlidetopMain from './SlidetopMain'
import MainContent from './MainContent/MainContent'

function Home() {
  return (
    <>
    <div className='mx-auto w-full max-w-7xl bg-[#E3E6E6]'>
    <SlidetopMain/>
    <MainContent/>
    </div>
    </>
  )
}

export default Home