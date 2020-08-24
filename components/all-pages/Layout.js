import { Container, Row } from 'reactstrap'

import Header from "./Header";
import SEO from './SEO';

const Layout = (props) => {
    return (
        <React.Fragment>        
            <SEO seo={props.seo || ""}/>
            <Header />
            <Container className='mt-5'>
                <Row>
                    {props.children}
                </Row>
            </Container>           
        </React.Fragment>
    );
}

export default Layout;