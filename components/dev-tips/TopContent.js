import { Col } from 'reactstrap';

const TopContent = (props) => {
    return (
        <Col xs="12">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p className="bg-danger">Click on question to see the answer</p>
        </Col>
    );
}

export default TopContent;