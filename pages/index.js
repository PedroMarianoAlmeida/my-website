import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faGlobeAmericas,
  faGlobe
} from '@fortawesome/free-solid-svg-icons' //Some itens doens't worked that way, so I downloaded the rest

import {
  faBootstrap,
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faGithubAlt,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons'

import { Col, Jumbotron, Row } from 'reactstrap'

import Layout from './../components/all-pages/Layout'


export default function Home() {

  return (
    <Layout seo={{ title: "Home | Pedro Programmer", description: "The best content of Pedro Almeida, a Next.js Developer", author: "Pedro Almeida" }} className="h-100">
      <Col>
        <Jumbotron>
          <Row>
            <Col xs="12" md="7" className="align-self-center">
              <div className="lead">Hi, I am</div>
              <div id="apresentation">
                <div className="display-3 d-flex d-md-block justify-content-center" id="my-name">Pedro Almeida</div>
                <div className="lead d-flex d-md-block justify-content-center">Front End Developer</div>
                <div className="d-flex d-md-block justify-content-center my-2">
                  <FontAwesomeIcon icon={faReact} className="mx-1" size="1x" />
                  <img src='/images/logos/next-js-logo.png' alt='next.js Logo' className="mx-1" id="next-js-logo" />

                  <FontAwesomeIcon icon={faHtml5} className="mx-1" size="1x" />
                  <FontAwesomeIcon icon={faCss3Alt} className="mx-1" size="1x" />
                  <FontAwesomeIcon icon={faJsSquare} className="mx-1" size="1x" />
                  <FontAwesomeIcon icon={faGitAlt} className="mx-1" size="1x" />
                  <FontAwesomeIcon icon={faGithubAlt} className="mx-1" size="1x" />

                  <FontAwesomeIcon icon={faBootstrap} className="mx-1" size="1x" />
                  <img src='/images/logos/jquery-logo.webp' alt='jquery Logo' className="mx-1" id="jquery-logo" />
                </div>
              </div>
              <div className="lead"> <FontAwesomeIcon icon={faEnvelope} className="mr-3" /><span className="small-letter">pedroprogrammer@gmail.com</span></div>
              <div className="lead"><a href='https://api.whatsapp.com/send?phone=+5521981853414&text=Hi,%20I%20want%20to%20know%20more%20about%20your%20services' rel='noopener noreferrer' target='_blank' className="text-dark"><img src='/images/logos/whatsapp-logo.svg' alt="github-logo" className="contact-logo mr-3" />+55 21 98185-3414</a></div>
              <div className="lead"> <FontAwesomeIcon icon={faGlobeAmericas} className="mr-3" />Rio de Janeiro, Brazil</div>
              <div className="lead"> <a href="https://github.com/PedroMarianoAlmeida" target="_blank" className="text-dark"> <img src='/images/logos/github-logo.svg' alt="github-logo" className="contact-logo mr-3" />PedroMarianoAlmeida</a></div>
              <div className="lead"> <a href="www.linkedin.com/in/pedroprogrammer" target="_blank" className="text-dark"><img src='/images/logos/linkedin-logo.svg' alt="github-logo" className="contact-logo mr-3" />pedroprogrammer</a></div>
              <div className="lead"> <FontAwesomeIcon icon={faGlobe} className="mr-3" /><span className="small-letter">www.pedroprogrammer.com</span></div>
              <style jsx>{`              
              #next-js-logo{
                width: 8%;
              }

              #jquery-logo{
                width: 3%;
              }

              #firebase-logo{
                width: 3%;
              }

              .contact-logo{
                width: 3.5%;                
              }

              @media only screen and (max-width: 998px) { 
                #apresentation{
                  background-color: rgb(213, 217, 222);
                  border-radius: 10px;
                  padding: 5px 0;
                  margin: 5px 0;
                }
                
                #my-name{
                  font-size: 2.5em;
                }

                .small-letter{
                  font-size: 0.8em;
                }

                .contact-logo{
                  width: 8%;
                  hight: 100%;
                }

                #jquery-logo{
                  width: 5%;
                }
              }
            `}</style>
            </Col>
            <Col xs="12" md="5">
              <div className="d-flex d-md-block justify-content-center"><img src='images/profile.jpeg' className="img-thumbnail rounded-circle" alt="profile-photo" id="my-image" /></div>
              <style jsx>{`
                #my-image{
                 width: 350px;
                 height: 350px;
                }
                
                @media only screen and (max-width: 998px) { 
                  #my-image{
                    margin-top: 1rem;
                    width: 200px;
                    height: 200px;
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
