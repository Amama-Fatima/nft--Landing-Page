import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import './hero-section.css'

import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2>Discover rare digital art and collect and <span>sell extraordinary </span>NFTs</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, soluta! Ullam accusamus nihil sequi dolorem!</p>
                    </div>

                    <div className="hero__btns d-flex gap-4 align-items-center">
                        <button className='explore__btn d-flex gap-2 align-items-center'> <i className="ri-rocket-line"></i> <Link to='/market' >Explore</Link> </button>
                        <button className='create__btn d-flex gap-2 align-items-center'> <i className="ri-ball-pen-line"></i> <Link to='/create' >Create</Link> </button>
                    </div>
                </Col>

                <Col lg='6' md='6' className='hero__img'>
                    <img src={heroImg} alt="" className='w-100' />
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default HeroSection