import CommonSection from '../components/ui/Common-section/CommonSection'
import {Container, Row, Col} from 'reactstrap'
import { useRef } from 'react'













const Contact = () => {



  const nameRef = useRef('')
  const emailRef = useRef('')
  const subjectRef = useRef('')
  const messageRef = useRef('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <CommonSection title="Contact" />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' className='m-auto text-center'>
              <h6 className='text-light'>Drop a Message</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero vel pariatur magni id quam iusto beatae ratione sint veniam voluptas.</p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input type="text" placeholder="Name" ref={nameRef}/>
                  </div>
                  <div className="form__input">
                    <input type="email" placeholder="Email" ref={emailRef} />
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder="Subject" ref={subjectRef} />
                  </div>
                  <div className="form__input">
                    <textarea id="" rows="7" placeholder='Write Message' ref={messageRef} ></textarea>
                  </div>
                  <button className="send__btn" 
                  style={{
                    border: 'none', 
                    padding: '7px 25px', 
                    BorderRadius: '5px',
                    marginTop: '20px',
                    }}>
                    Send Message
                  </button>
                </form>
              </div>

            </Col>

            

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact