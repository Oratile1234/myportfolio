import React from 'react'
import "./Contact.css";
import { useForm } from 'react-hook-form';



const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) =>  window.location = `mailto:maboteoratile53@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.&"" ${formData.message})`

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          {/* <p className="contact__details">Don't like forms? Send me an email.</p> */}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input {...register('name')} type="text" className="contact__form-input" placeholder='Insert your Name'/>
            </div>

            <div className="contact__form-div">
              <input {...register('email')} type="email" className="contact__form-input" placeholder='Insert your Email'/>
            </div>
          </div>

            <div className="contact__form-div">
              <input {...register('subject')}  type="text" className="contact__form-input" placeholder='Insert your Subject'/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea {...register('message')} cols="30" rows="10" className='contact__form-input' placeholder="write your message" ></textarea>
            </div>  

        <button className="btn" type='submit'>Send Message</button>

        </form>
      </div>
    </section>

  )
}


export default Contact
