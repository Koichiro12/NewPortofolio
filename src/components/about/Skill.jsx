import React from 'react'

const Skill = (props) => {
  return (
    <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">{props.name}</h3>
                <span className='skills__number '>{props.percentage} %</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage" style={{width:props.percentage+"%"}}></span>
              </div>
            </div>
  )
}

export default Skill