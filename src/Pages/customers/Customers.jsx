import { customersLogo } from '../../staticData'
import './customers.css'

const Customers = () => {
  return (
    <div className="customers-container">
      <div className="customers-wrapper">
        <h2>OUR CUSTOMERS</h2>
        <p>Since its inception, Tang Tech has partnered with private companies, government institutions, and industrial sectors, delivering cutting-edge electrical and ICT solutions. We specialize in high-voltage installations, system maintenance, automation, and security solutions, ensuring efficiency, reliability, and technological advancement in every project.</p>

        <div className="customers-logo">
          {customersLogo.map((logo) => (
            <div className="customers-item" key={logo.id}>
              <img src={logo.img} alt="LOGO" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customers