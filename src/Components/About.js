import React from 'react'
import aboutimage  from '../images/hero.png'
function About() {
  return (
    <div className='about'>
        <div className='about-model'>
            <img src={aboutimage} alt="" />
        </div>
        <div className='about-text'>
            <h2>We Are The Best <br/> Real Estate Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt modi consequatur minus? Inventore animi ratione ducimus at, sint, minus odit assumenda impedit eum atque fugit recusandae? Porro, ea ut quasi nam culpa rem. Cupiditate molestias similique doloribus optio sed!</p>
            <button>View More Details</button>
            </div>
    </div>
  )
}

export default About