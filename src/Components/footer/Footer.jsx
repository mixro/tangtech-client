import { Link } from "react-router-dom"
import "./footer.css"
import { Email, Facebook, Instagram, LinkedIn, Phone, WhatsApp, X} from "@mui/icons-material"
import { productsLinks, servicesLinks } from "../../staticData"

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footerTop_left">
          <div className="footerTop_Item">
            <h2>SERVICES</h2>
            <div className="footerTop_Links">
              {servicesLinks.map((link) => (
                <div className="footerLinks_div" key={link.id}>
                  <Link to="/services" className="link-main">
                    <p>{link.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="footerTop_Item">
            <h2>PRODUCTS</h2>
            <div className="footerTop_Links">
              {productsLinks.map((link) => (
                <div className="footerLinks_div" key={link.id}>
                  <Link to="/products" className="link-main">
                    <p>{link.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="footerTop_Item">
            <h2>CONTACT US</h2>
            <div className="footerTop_Links">
              <div className="footerLinks-icon">
                <Phone />
                <a href='tel: +255659801321' className='link-main'>
                  <p>+255659801321</p>
                </a>
              </div>
              <div className="footerLinks-icon">
                <WhatsApp />
                <p>+255659801321</p>
              </div>
              <div className="footerLinks-icon">
                <Email />
                <a href='mailto:info@tangtech.com' className='link-main'>
                  <p>info@tangtech.com</p>  
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footerTop_right">
          <div className="footerRight-div">
            <h2>FOLLOW US</h2>

            <div className="footerRight_Icons">
              <div className="footerRight_icon">
                <Facebook sx={{fontSize: 30}} />
              </div>
              <div className="footerRight_icon">
                <X sx={{fontSize: 30}} />
              </div>
              <div className="footerRight_icon">
                <Instagram sx={{fontSize: 30}} />
              </div>
              <div className="footerRight_icon">
                <LinkedIn sx={{fontSize: 30}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>Tang Tech & Engineering Ltd <br/> <span>Copyright ©2025</span>.</p>
      </div>
    </div>
  )
}

export default Footer