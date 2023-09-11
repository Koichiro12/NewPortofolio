import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxs grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">198</h3>
                <span className="about__subtitle">Project Complete</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">5879</h3>
                <span className="about__subtitle">Cup Coffe</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">278</h3>
                <span className="about__subtitle">Satisfied Clients</span>
            </div>
        </div>
        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">10+</h3>
                <span className="about__subtitle">Executive Teams</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox