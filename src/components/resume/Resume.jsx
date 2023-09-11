import React from 'react'
import Card from './Card'
import DataResume from './DataResume'
import './resume.css'
const Resume = () => {
  return (
    <div id='resume' className="resume container section">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {DataResume.map((val,id)=>{
            if(val.category === 'Education'){
              return (
                <Card 
                  key={id}  
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>
        <div className="timeline grid">
          {DataResume.map((val,index)=>{
            if(val.category === 'Experience'){
              return (
                <Card 
                  key={index}  
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Resume