import React from 'react'
import './about.css'
import AboutAsset from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox'
import DataSkills from './DataSkills'
import Skill from './Skill'
const About = () => {
  return (
    <section id='about' className="about container section">
      <h2 className="section__title">
        About Me ?
      </h2>

      <div className="about__container grid">
        <img src={AboutAsset} alt="" className='about__img' />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi, Iam Jhon Doe.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            {DataSkills.map((val,index) => {
              return(
                <Skill key={val.id} name={val.title} percentage={val.percentage} />
              )
            })}
          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About