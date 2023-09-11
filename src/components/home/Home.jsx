import React from 'react'
import './home.css'
import Me from "../../assets/avatar-1.svg"
import Socials from './Socials'
import Scrolldown from './Scrolldown'

const Home = () => {
  return (
    <section className="home container" id='home'>
        <div className="intro">
            <img src={Me} className="home__img" alt="" />
            <h1 className="home__name">Jhon Doe</h1>
            <span className="home__education">I'am a Fullstack Developers</span>

            <Socials/>
            <a href="#contact" className="btn">Hire Me</a>
            <Scrolldown/>
        </div>
    </section>
  )
}

export default Home