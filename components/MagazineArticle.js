import { Col, Row } from 'reactstrap'

const MagazineArticle = (props) => {
    return (
        <Col xs='12' className="my-3">
            <Row>

    <Col xs='12' className='my-2'><h2 className='display-4 text-center title'>{props.title}</h2></Col>

                <Col xs='12' md='5' className={`my-auto align-items-center ${props.imageOn === 'left'? 'd-none' : 'd-none d-md-flex'}`}>
                    <div dangerouslySetInnerHTML={props.description}></div>
                </Col>

                <Col xs='12' md='7' className="my-1">
                    <img className='w-100' src={props.sourceImagePath} alt={props.imageDescription}/> 
                </Col>

                <Col xs='12' md='5' className={`my-auto align-items-center ${props.imageOn === 'left'? '' : 'd-flex d-md-none'}`}>
                    <div dangerouslySetInnerHTML={props.description}></div>
                </Col>

            </Row>
    <style jsx>{`
    .title {
        font-size: 40px;
    }
    `}</style>
        </Col>
    );
}
 
export default MagazineArticle;