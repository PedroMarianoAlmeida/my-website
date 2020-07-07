import Layout from './../../components/all-pages/Layout'
import TopContent from './../../components/dev-tips/TopContent'
import DevTips from '../../components/dev-tips/DevTips'

import CSS_TIPS from './../../data/code-tips/css'

const Css = () => {
    return (        
        <React.Fragment>
            <Layout>
                <TopContent title="CSS Tips" subtitle="The best tips for everyday use of CSS, by Pedro Programmer"/>
                {CSS_TIPS.map( ( tip, index ) => <DevTips title={tip.title} content={tip.content} key={index}/> )}
            </Layout>   
        </React.Fragment>               
    );
}
 
export default Css;