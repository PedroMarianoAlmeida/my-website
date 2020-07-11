import { useState } from 'react';
import { Collapse, Col } from 'reactstrap';

const DevTips = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (

        <li onClick={toggle} className="clickable list-group-item">
            {props.title}
            <Collapse isOpen={isOpen}>
                <div>
                    {props.content}
                </div>
            </Collapse>
        </li>

    );
}

export default DevTips;