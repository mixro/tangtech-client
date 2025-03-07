import { Call, LocationOn, Mail } from '@mui/icons-material'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-top">
          <div className="contact-left">
            <h2>Contact Us</h2>
            <p>Drop us a message through the form, email us, or simply give us a call!</p>

            <div className="contact-icons">
              <div className="contact-icon">
                <Call sx={{ fontSize: { xs: 30, sm: 30} }} />
                <a href="tel: +255659801321" className='link-main'>
                  +255659801321                          
                </a>
              </div>
              <div className="contact-icon">
                <Mail sx={{ fontSize: { xs: 30, sm: 30} }} />
                <a href='mailto:tangtech@engineering.com' className='link-main'>
                  info@tangtech.com
                </a>
              </div>
              <div className="contact-icon">
                <LocationOn sx={{ fontSize: { xs: 30, sm: 30} }} />
                <p>
                  Kinondoni, Dar Es Salaam
                </p>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h3>Send a Message</h3>

            <div className="contact-message">
              <div className="contact-message-item">
                <p>Name</p>
                <div className="contact-input-flex">
                  <input type="text" placeholder='First' />
                  <input type="text" placeholder='Last' />
                </div>
              </div>
              <div className="contact-message-item">
                <p>Email</p>
                <div className="contact-input">
                  <input type="text" placeholder='eg. example@gmail.com' />
                </div>
              </div>
              <div className="contact-message-item">
                <p>Phone (optional)</p>
                <div className="contact-input">
                  <input type="text" placeholder='xxx xxx xxxx' />
                </div>
              </div>
              <div className="contact-message-item">
                <p>Message</p>
                <div className="contact-input">
                  <textarea placeholder='Type your message here...' />
                </div>
              </div>
            </div>

            <button className="contact-button">Send Message</button>
          </div>
        </div>

        <div className="contact-bottom">
          <h3>Find Us</h3>
          <div className="contact-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2346.6681862899877!2d39.26396890309323!3d-6.7897110863086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1741382536264!5m2!1sen!2stz" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact