import { Col, Row } from 'reactstrap'

const MagazineArticle = (props) => {
    return (
        <Col xs='12' className="my-3">
            <Row>

                <Col xs='12' className='my-2'><h2 className='display-4 text-center title'>{props.title}</h2></Col>

                <Col xs='12' md='7' className="my-1">
                    <video autoPlay muted loop="loop" className='w-100 img-thumbnail shadow'>
                        <source src={props.videoPath} type="video/mp4" className='w-100' />
                        <img src={props.simagePath} alt={props.imageDescription} className='w-100' />
                    </video>
                </Col>

                <Col xs='12' md='5' className='my-auto align-items-center'>
                <Row>
                    <Col xs='12'>
                        <p className='tags'>
                            Tags: {props.tags.map(tag => <span className='bg-success text-white border rounded m-1 p-1 d-inline-flex'><small>{tag}</small></span>)}
                        </p>
                    </Col>
                    <Col xs='12' dangerouslySetInnerHTML={props.description}></Col>
                    </Row>
                </Col>

            </Row>
            <style jsx>{`
                .tags {
                    word-break: break-all;                   
                }

                .title {
                    font-size: 40px;
                }
            `}</style>
        </Col>
    );
}

export default MagazineArticle;