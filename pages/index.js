import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,
         faPhoneSquare,
         faGlobeAmericas,
         faGithubSquare,
          faLinkedin } from '@fortawesome/free-solid-svg-icons'

import { Col, Jumbotron, Row } from 'reactstrap'

import Layout from './../components/all-pages/Layout'


export default function Home() {

  return (
    <Layout seo={{ title: "Home | Pedro Programmer", description: "The best content of Pedro Almeida, a Next.js Developer", author: "Pedro Almeida" }} className="h-100">
      <Col> {/*maybe change to fluid*/}
      <Jumbotron>
        <Row>
          <Col xs="12" md="6" className="mt-md-5 pt-md-5">
            <div className="lead">Hi, I am</div>
            <div className="display-3">Pedro Almeida</div>
            <div className="lead">Next.js Developer</div>
            <div className="lead"> <FontAwesomeIcon icon={faEnvelope} className="mr-3"/>pedroprogrammer@gmail.com</div>
            <div className="lead"> <FontAwesomeIcon icon={faPhoneSquare} className="mr-3"/>+55 21 98185-3414</div>
            <div className="lead"> <FontAwesomeIcon icon={faGlobeAmericas} className="mr-3"/>Rio de Janeiro, Brazil</div>
            <div className="lead">
                Social networks
            </div>
          </Col>
          <Col xs="12" md="6" className="my-md-5 py-md-5">
            <div>Photo</div>
          </Col>
        </Row>
      </Jumbotron>
      </Col>
    </Layout>

  )
}
