
import Layout from './../components/all-pages/Layout';
import TopContent from './../components/dev-tips/TopContent';
import DevTips from './../components/dev-tips/DevTips';
import MUSIC_DATA from './../data/music';


const Music = () => {
    return (
        <Layout>
            <TopContent title="Música" subtitle="Cifras curtinhas" />
            <ul className="list-group list-group-flush">
                {MUSIC_DATA.tips.map((tip, index) => <DevTips title={tip.title} content={tip.content} key={index} />)}
            </ul>
        </Layout>
    );
}

export default Music;