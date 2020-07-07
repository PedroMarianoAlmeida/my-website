import Layout from './../../components/all-pages/Layout'
import TopContent from './../../components/dev-tips/TopContent'
import DevTips from '../../components/dev-tips/DevTips'

import NEXT_TIPS from './../../data/code-tips/next-js'

const NextJs = () => {
    return (        
        <React.Fragment>
            <Layout>
                <TopContent title="Next.js Tips" subtitle="The best tips for everyday use of Next.js, by Pedro Programmer"/>
                {NEXT_TIPS.map( ( tip, index ) => <DevTips title={tip.title} content={tip.content} key={index}/> )}
            </Layout>   
        </React.Fragment>               
    );
}
 
export default NextJs;