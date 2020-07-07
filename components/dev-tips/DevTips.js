import { useState } from 'react';
import { Collapse, Col } from 'reactstrap';

const DevTips = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Col xs="12">
            <h2 onClick={toggle} className="clickable">{props.title}</h2>
            <Collapse isOpen={isOpen}>
                <div>
                   {props.content}
                </div>
            </Collapse>
        </Col>
    );
}

export default DevTips;