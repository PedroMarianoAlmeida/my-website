const CODE_TIPS_DATA = {
    "main-page": {
        title: "Next.js Tips",
        description: "The best tips for everyday use of Next.js, by Pedro Programmer"
    },

    tips: [

    {
        title: "My intere workflow to create a project",
        content: {
            __html: `
                <ul>
                    <li>Create Project</li>
                    <ul>
                        <li>Open gitbash and navigate to folder that I will create the project</li>
                        <li>On terminal type: npx create-next-app MY-APP-NAME and choose default template</li>
                    <ul>
                    <li>Open the project</li>
                    <ul>
                        <li>Go to GitHub desktop</li>
                        <li>Add this repository</li>
                        <li>Click in option "Open in VS Code</li>
                        <li>Open terminal</li>
                        <li>type <strong>npm run dev</strong>, go to localhost:3000 and check if is runing</li>
                    </ul>
                    <li>Add Bootstrap</li>
                    <ul>
                        <li>Choose some random element in index.js and insert class "bg-danger" to see when it's work</li>
                        <li>Open a new terminal (because the first one is running the aplication)</li>
                        <li>type <strong>npm install --save bootstrap</strong> on terminal and wait conclude</li>
                        <ul><li>This install the bootstrap itself </li></ul>
                        <li>The stpes above is fallowing <a href="https://www.youtube.com/watch?v=fKSMMmQGruM" target="_blank">this youtube tutorial</a></li>
                        <li>type <strong>npm install --save @zeit/next-css</strong></li>
                        <ul><li>This was in offical documentation but is not there anymore, and zeit is the previous name of Vercel (the company who create Next.js)<li></ul>
                        <li>In pages folder create a file called <strong>_app.js</strong></li>
                        <ul><li>This is in the <a href="https://nextjs.org/docs/basic-features/built-in-css-support" target="_blank"></a>offical documentation to insert global CSS</ul><li>
                        <li>Inside insert this code (also in documentation): <br /> 
                        export default function MyApp({ Component, pageProps }) { <br /> 
                            return &lt;Component {...pageProps} />&lt;br /> 
                          }
                        </li>
                        <li>Insert the bootstrap import on first line: <strong>import 'bootstrap/dist/css/bootstrap.min.css';</strong></li>
                        <li>Save all</li>
                        <li>Go to first terminal (runing the aplication) and stop it (ctrl C and Y)<li>
                        <li><strong>npm run dev</strong> and check if your component is with background red (the bg-danger you set before)<li>
                    </ul>
                    <li> Add Golbal CSS (alwas there are something that bootstrap doesnt do)</li>
                    <ul><li>Finish later</li></ul>
                    <li>Add Reactstrap(to use the Bootstrap components)</li>
                    <ul>
                        <li>In terminal type <strong>npm install --save reactstrap</strong></li>
                        <li>On the component where will use, type before component: <strong>import { DESIRE-COMPONENT } from 'reactstrap';</strong>
                        <ul><li>Check the <a href="https://reactstrap.github.io/" target="_blank">Oficial Documentation</a> to see all components</li></ul>
                    </ul>
                    <li>Add FontAwsome (to insert cool icons on project)</li>
                    <ul><li>Finish later</li></ul>
                    <li>Layout with footer and SEO</li>
                    <ul><li>Finish later - insert my components on github</li></ul>
                    <li>Global Context (if the web site would have language change or dark theme)</li>
                    <ul><li>Finish later</li></ul>                  
                </ul>
            `}
    },

    {
        title: "How create a Next.js app?",
        content: "npx create-next-app app-name"
    },
    
    {
        title: "How initialize Next.js?",
        content: "Short answer: npm run dev"
    },

    {
        title: "How to run Next.js page locally (and how to interrupt it)",
        content: {
            __html:
                `<ul>
            <li>Initialize: npm run dev</li>
            <li>Interrupt it: Ctrl C (on terminal), then Y</li>
        </ul>`
        }
    },

    {
        title: "How to put image in Next.js",
        content: "1.Put the image in public folder, on the root of project / 2.<img src='/local-in-public-folder' alt='your-image-description'/> 3.Source: https://nextjs.org/docs/basic-features/static-file-serving"
    },

    {
        title: "How use Bootstrap with in Next.js",
        content: "way I use: https://www.youtube.com/watch?v=fKSMMmQGruM / another way: https://www.youtube.com/watch?v=xhriGpfq-Uw (the first seems be more reliable)"
    },

    {
        title: "How include private Key in Projects",
        content: {
            __html:
                `<ul>
            <li>Create a file ".env.local" on root (no need to include in .gitignore pecause it already there</li>
            <ul><li>Insert the variable and the string value (if have more than one, put in diferent lines without comma or semicolon)</li></ul>
            <li>Create a file "next.config.js" on root</li>
            <ul>
                <li>Insert an object "module.export"</li>    
                <li>Inside this object, create a "env" property</li>
                <li>The value of this property is another object with the variables as properties</li>
                <li>The value should be "process.env.NAME_OF_MY_VARIABLE"</li>
            </ul>
            <li>Here use in project, insert "process.env.NAME_OF_MY_VARIABLE" too</li>
            <li>On vercel dashboard, create this variables and its values (without quotation marks)</li>
            <ul><li>If the project is alread commited to master, is needed to redeploy (and when changed the Enviorement Variables)</li></ul>
        </ul>`
        }
    },

        {
        title: "How to go to another page without click on a Link component",
        content: "useRouter hook (https://nextjs.org/docs/api-reference/next/router)"
    },


]}

export default CODE_TIPS_DATA;