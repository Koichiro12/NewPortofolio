import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about Everything!</h3>
          <p className="contact__details">Don't like forms ? send me email .</p>
        </div>
        <form action="#" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" placeholder='Your name' className='contact__form-input' />
            </div>

            <div className="contact__form-div">
              <input type="email" placeholder='Your email' className='contact__form-input' />
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" placeholder='Subject' className='contact__form-input' />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea name="" id="" className='contact__form-input' cols="30" rows="10" placeholder='Write Your Message'></textarea>
            </div>
            <button className="btn" type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact