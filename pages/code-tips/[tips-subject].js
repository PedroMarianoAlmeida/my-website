import Layout from './../../components/all-pages/Layout';
import TopContent from './../../components/dev-tips/TopContent';
import DevTips from './../../components/dev-tips/DevTips';

const CodeTips = (props) => {
  return (
    
      <Layout>
        <TopContent title={props.title} subtitle={props.description} />
        <ul className="list-group list-group-flush w-100">
          {props.tips.map((tip, index) => <DevTips title={tip.title} content={tip.content} key={index} />)}
        </ul>
      </Layout>
    
  );
}

export async function getStaticProps({ params }) {
  const allData = require(`./../../data/code-tips/${params["tips-subject"]}`).default
  return {
    props: { 
      title: allData["main-page"].title,
      description:allData["main-page"].description, 
      tips: allData.tips 
    }
  }
}

export async function getStaticPaths() {
  const allPaths = ["bootstrap", "css", "next-js", "reactstrap", "vs-code", "web-tools", "react", "javascript"]
  const allPathFormated = []
  allPaths.forEach( path => allPathFormated.push( {params: {"tips-subject": path} } ))
  
  return {
    paths: allPathFormated,
    fallback: false
  }
}

export default CodeTips;