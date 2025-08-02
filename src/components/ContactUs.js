import './styling/ContactUs.css'
import ReactCurvedText from 'react-curved-text';
const ContactUs = () => {
  return (
    <>
    <div className='contact-relative'>
      <div className='contact-cont'>
        <p className='contact-p'>We are here</p>
        <p className='contact-p'>to help!</p>
        <div className='contact-curve'>
        <ReactCurvedText text="Only 6 Slots Left"
                width={200}
                height={200}
                cx={60}
                cy={100}
                rx={115}
                ry={90}
                reversed={true}
                startOffset={230}
                textProps={{ style: { fontSize: 24,fontWeight:'bold' } }}
                textPathProps={{"fill": "white"}}
                />
            </div>
            <div className='contact-button'><button className='contact-btn'>Contact us</button></div>
        </div>
        <div className="contact-cont2">
            <p className='contact-cont2-p'>Free<br/><span>Case<br/>Review</span></p>
            <div>
                <p className='contact-cont2-p1'><span className='contact-cont2-shield'><i className="fa-solid fa-shield"></i></span> 100% Confidential</p>
                <p className='contact-cont2-p1'><span className='contact-cont2-shield check'><i className="fa-solid fa-check"></i></span> No Win, No Fee</p>
                <p className='contact-cont2-p1'><span className='contact-cont2-shield balance'><i className="fa-solid fa-scale-balanced"></i></span> Free Case Evaluation</p>

            </div>
        </div>
    </div>
    </>
  )
}

export default ContactUs