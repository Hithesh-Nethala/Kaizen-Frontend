import './App.css'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
const App = () => {
  return (
    <div className='main-cont'>
      <div className='main-leftsection'> 
        <div className='contact-wrapper'>
          <ContactUs/>
        </div>
        <div className='about-wrapper'>
          <AboutUs/>
        </div>
      </div>
      <div className='main-rightsection'>
        <Form/>
      </div>
    </div>
  )
}

export default App