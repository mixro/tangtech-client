import { partnersLogo } from '../../staticData'
import './partners.css'

const Partners = () => {
  return (
    <div className="customers-container">
      <div className="customers-wrapper partners-wrapper">
        <h2>PARTNERS</h2>
        <p>Since its establishment, Tang Tech has collaborated with industry-leading partners, including <span>Schneider Electric, ABB, TELA Technology, Dar es Salaam Institute of Technology Teaching Factory, and Africab.</span> These partnerships enhance our ability to deliver cutting-edge electrical and ICT solutions, ensuring quality, innovation, and efficiency in every project.</p>

        <div className="partners-logo">
          {partnersLogo.map((partner) => (
            <div className="partners-item" key={partner.id}>
              <div className="partners-item-desc">
                <p>{partner.company}</p>
              </div>
              <div className="partners-item-image">
                <img src={partner.img} alt="LOGO" />
              </div>
              <div className="partners-info">
                <p>{partner.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners