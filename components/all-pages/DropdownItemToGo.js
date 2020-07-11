import Link from 'next/link';
import { DropdownItem } from 'reactstrap';

const DropdownItemToGo = (props) => {
    return (
        <DropdownItem>
            <Link href={props.adress}><span className="text-dark">{props.name}</span></Link>
        </DropdownItem>
    );
}

export default DropdownItemToGo;