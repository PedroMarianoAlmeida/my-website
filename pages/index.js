import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faWhatsapp,
  faGlobeAmericas,
  faGlobe
} from '@fortawesome/free-solid-svg-icons'

import { Col, Jumbotron, Row } from 'reactstrap'

import Layout from './../components/all-pages/Layout'


export default function Home() {

  return (
    <Layout seo={{ title: "Home | Pedro Programmer", description: "The best content of Pedro Almeida, a Next.js Developer", author: "Pedro Almeida" }} className="h-100">
      <Col> {/*maybe change to fluid*/}
        <Jumbotron>
          <Row>
            <Col xs="12" md="7" className="align-self-center">
              <div className="lead">Hi, I am</div>
              <div className="display-3" id="my-name">Pedro Almeida</div>
              <div className="lead d-flex d-md-block justify-content-center" ><img src='/images/logos/next-js-logo.png' alt="Next" id='next-js-logo' /><span className="h-100">.js Developer</span></div>
              <div className="lead"> <FontAwesomeIcon icon={faEnvelope} className="mr-3" /><span className="small-letter">pedroprogrammer@gmail.com</span></div>
              <div className="lead"><a href='https://api.whatsapp.com/send?phone=+5521981853414&text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services' rel='noopener noreferrer' target='_blank' className="text-dark"><img src='/images/logos/whatsapp-logo.svg' alt="github-logo" className="contact-logo mr-3" />+55 21 98185-3414</a></div>
              <div className="lead"> <FontAwesomeIcon icon={faGlobeAmericas} className="mr-3" />Rio de Janeiro, Brazil</div>
              <div className="lead"> <a href="https://github.com/PedroMarianoAlmeida" target="_blank" className="text-dark"> <img src='/images/logos/github-logo.svg' alt="github-logo" className="contact-logo mr-3" />PedroMarianoAlmeida</a></div>
              <div className="lead"> <a href="www.linkedin.com/in/pedroprogrammer" target="_blank" className="text-dark"><img src='/images/logos/linkedin-logo.svg' alt="github-logo" className="contact-logo mr-3" />pedroprogrammer</a></div>
              <div className="lead"> <FontAwesomeIcon icon={faGlobe} className="mr-3" /><span className="small-letter">www.pedroprogrammer.com</span></div>
              <style jsx>{`
              #next-js-logo{
                width: 10%;
                hight: 100%;
              }

              .contact-logo{
                width: 3.5%;
                hight: 100%;
              }

              @media only screen and (max-width: 998px) { 
                #my-name{
                  font-size: 2.5em;
                }

                #next-js-logo{
                  width: 15%;
                  hight: 100%;
                }

                .small-letter{
                  font-size: 0.8em;
                }

                .contact-logo{
                  width: 8%;
                  hight: 100%;
                }
              }
            `}</style>
            </Col>
            <Col xs="12" md="5">
              <div className="d-flex d-md-block justify-content-center"><img src='images/profile.jpg' className="img-fluid img-thumbnail rounded-circle" alt="profile-photo" id="my-image" /></div>
              <style jsx>{`
                #my-image{
                 width: 80%;
                }
                
                @media only screen and (max-width: 998px) { 
                  #my-image{
                    margin-top: 1rem;
                    width: 60%;
                  }
                }
              `}</style>
            </Col>
          </Row>
        </Jumbotron>
      </Col>
    </Layout>

  )
}
