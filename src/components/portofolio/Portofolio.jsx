import React, { useState } from 'react'
import './portofolio.css';
import { Category, Works } from './Works';
const Portofolio = () => {
  const [items,setItems] = useState(Works)

  const filterItem = (categoryItem) => {
    const updateItems = Works.filter((curElem) => {
      return curElem.category === categoryItem;
    })
    setItems(updateItems);
  }

  return (
    <section id='portofolio' className="work container section">
      <h2 className="section__title">
        Recent Works
      </h2>
      <div className="work__filters">
      <span className="work__item" onClick={()=>setItems(Works)}>All</span>
        {Category.map((val,index) => {
          return(
            <span className="work__item" key={index} onClick={()=>filterItem(val.name)}>{val.name}</span>
          )
        })}
      </div>
      <div className="work__container grid">
        {items.map((elem)=>{
          const {id,image,title,category} = elem;
          return(
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="#" className='work__img' />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portofolio