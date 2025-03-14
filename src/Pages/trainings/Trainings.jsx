import { Link } from 'react-router-dom'
import './trainings.css'
import { TrainingsList } from '../../staticData'

const Trainings = () => {
  return (
    <div className="trainings-comp">
      <div className="trainings-top">
        <div className="trainings-left">
          <h2>Delevop skills that move<br /> your career forward.</h2>
          <h2>Delevop skills that move your career forward.</h2>
          <p>Gain practical engineering and technical skills with Tang Tech’s industry-focused training in <span>switchgear assembly, AutoCAD, automation, testing, and security systems</span> to advance your career.</p>
          <div className="training-left-buttons">
            <Link to="/trainings" className='link-main training-button-1'>
              <button>Join Training</button>
            </Link>
            <Link to="/contact-us" className='link-main training-button-2'>
              <button>Contact Us</button>
            </Link>
          </div>
        </div>

        <div className="trainings-right"></div>
      </div>

      <div className="trainings-wrapper">
        <h2>Explore Trainings</h2>

        <div className="trainings-container">
          {TrainingsList.map((training) => (
            <div className="training-item" key={training.id}>
              <div className="training-image">
                <img src={training.image} alt='TRAINING' />
              </div>
              <div className="training-desc">
                <h3>{training.title}</h3>
                <div className="training-desc-item">
                  <p>{training.desc}</p>
                  <p>{training.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trainings