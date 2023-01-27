import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import ShopPage from '../components/HomeShop';
import '../style/index.css';

function HomePage() {
  return (
    <div>
        <HomeCarousel/>
        <section style={{padding:'5rem 0rem'}}>
            <ShopPage/>
        </section>
    </div>
  )
}

export default HomePage;