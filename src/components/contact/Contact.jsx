import React from 'react'
import "./Contact.css";
// import { useForm } from 'react-hook-form';



const Contact = () => {
 
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
       
        </div>

        <form action="https://formsubmit.co/maboteoratile53@gmail.com" method="POST" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input name="fullname" type="text" className="contact__form-input" placeholder='Name'/>
            </div>

            <div className="contact__form-div">
              <input name="email" type="email" className="contact__form-input" placeholder='Email'/>
            </div>
          </div>

            <div className="contact__form-div">
              <input name="_subject"  type="text" className="contact__form-input" placeholder='Subject'/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name='message' cols="30" rows="10" className='contact__form-input' placeholder="Message" ></textarea>
            </div>  

        <button className="btn" type='submit'>Send Message</button>

        </form>
      </div>
    </section>

  )
}


export default Contact
