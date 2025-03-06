import './layout.css'
import Topbar from '../topbar/Topbar'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div className="layout-component">
        <div className="layoutContainer">
            <div className="topbar">
                <Topbar />
            </div>

            <div className="main-body">
                {children}
            </div>
            
            <div className="footer">
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Layout