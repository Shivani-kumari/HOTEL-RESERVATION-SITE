import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from "../components/featureRoom"

export default function Home() {
  return (
    // this is <> reactFargment to render two seperate component
    <>
  <Hero>
        
      <Banner title ="House" subtitle="rooms prize is starting 2000">
      <Link to = "/rooms" className="btn-primary">
            our rooms
          </Link>
      </Banner>
  </Hero>
  <Services/>
  <FeaturedRooms/>
  </>)
    
  
}

