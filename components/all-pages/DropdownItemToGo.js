import Link from 'next/link';
import { DropdownItem } from 'reactstrap';

const DropdownItemToGo = (props) => {
    return (
        <Link href={props.adress} as={props.as}>
            <DropdownItem>
                <a className="text-dark">
                    {props.name}
                </a>
            </DropdownItem>
        </Link>
    );
}

export default DropdownItemToGo;