import Layout from "../components/all-pages/Layout";
import MagazineArticle from "../components/MagazineArticle";

import { projectsData } from './../data/projects';

const Projects = () => {
    return (
        <Layout seo={ {title: "Projects | Pedro Programmer", description: "The best projects made by Pedro Almeida", author: "Pedro Almeida"} }>
            <h1 className='mt-3 display-4'>Projects</h1>
            {projectsData.map((project, index) => 
                <MagazineArticle 
                    key={index}
                    imageOn='left' 
                    title={project.title}
                    sourceImagePath={project.sourceImagePath}
                    imagePath={project.imagePath}
                    imageDescription={project.imageDescription}
                    videoPath={project.videoPath}
                    description={project.description}
                    tags={project.tags}
                />
            )}
        </Layout>
      );
}
 
export default Projects;