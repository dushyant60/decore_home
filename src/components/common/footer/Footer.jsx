import React, { useState } from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // ...
    closeModal(); // Close modal after form submission
  };

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We'll help you grow your career and growth.</p>
            </div>
            <button className='btn5' onClick={openModal}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className='modal-wrapper'>
          <div className='modal'>
            <span className='close' onClick={closeModal}>&times;</span>
            <h2>Contact Form</h2>
            <form id='contactForm' onSubmit={handleSubmit}>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' required />

              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required />

              <label htmlFor='phone'>Phone Number:</label>
              <input type='tel' id='phone' name='phone' required />

              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message' rows='4' required></textarea>

              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      )}



      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              {/* <img src='../images/logo-light.png' alt='' /> */}
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 comapny..</span>
      </div>
    </>
  )
}

export default Footer
