import { TeamMembers } from '../../staticData'
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-top general-header">
          <h2>ABOUT US</h2>
          <p>TANG TECH & ENGINEERING LTD is a dynamic firm specializing in providing comprehensive Electrical and Information Communication Technology (ICT) solutions. Established in 2023, we have rapidly grown into a trusted partner for a diverse range of clients, offering innovative services tailored to meet their specific needs. Our commitment to excellence, reliability, and technological expertise ensures that we deliver cutting-edge solutions that empower businesses and communities alike.</p>
        </div>

        <div className="about-middle">
          <h3>OUR MISSION</h3>
          <p>To deliver comprehensive electrical and ICT solutions that enhance the operational efficiency, connectivity, and safety of our clients. We strive to provide innovative and sustainable technologies, exceptional customer service, and a commitment to excellence in every project we undertake.</p>

          <h3>OUR VISION</h3>
          <p>To be the foremost provider of integrated electrical and ICT solutions, recognized for our innovation, reliability, and dedication to sustainability. We aspire to lead the industry by setting new standards in technology and service, driving progress and improving lives through our expertise.</p>
        </div>

        <div className="about-team">
          <div className="about-team-top">
            <h2>OUR STAFF</h2>
            <p>Our team at Tang Tech consists of highly skilled engineers, technicians, and industry experts committed to delivering excellence in electrical and ICT solutions. Below are some of the key members of our team;</p>
          </div>
          <div className="about-team-container">
            {TeamMembers.map((member) => (
              <div className="about-team-item" key={member.id}>
                <div className="about-item-left">
                  <img src='/assets/profile.png' alt='PRF' />
                </div>
                <div className="about-team-right">
                  <p>{member.name}</p>
                  <p><span>Position:</span> {member.position}</p>
                  <p><span>Qualification:</span> {member.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About