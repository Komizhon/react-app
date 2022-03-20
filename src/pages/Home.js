import React from 'react'
import Pizza from '../assets/home_pizza.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home_info'>
      <div className='home_left'>
        <h2 className='home_left-title'>ifdaso fadbfkl fdasb</h2>
        <p className='home_left-info'>ahdo ladadkjbklad akdfjb kldasfkl jbadkj badklb aksjb kdla bjak lbadfk jbdfkjaf lkasb lka blksablkaf djbdk jbalk abslkk adjb aklb kdafsblkad sdb oaidfjfn ;dfn l;dfn dlan a ;ladn ;lsdnka dlfnasdajl; sdna;s dlfnads fl;nalfd</p>
      </div>
      <div className='home_right'>
      <img className='home_pizza' src={Pizza} alt=''/>
      </div>
      
    </div>
 
  )
}

export default Home