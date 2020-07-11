import Link from 'next/link';
import { NavItem, NavLink } from 'reactstrap';

const AdressToGo = (props) => {
    return (
        <NavItem className="mx-2">
            <NavLink><Link href={props.adress}><span className="text-dark clickable">{props.name}</span></Link></NavLink>
        </NavItem>
    );
}

export default AdressToGo;