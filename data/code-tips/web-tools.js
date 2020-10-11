const CODE_TIPS_DATA = {
    "main-page": {
        title: "Web API Tips",
        description: "The best tips for everyday use of Web API, by Pedro Programmer"
    },

    tips: [
    {
        title: "How to put a link witch go to a whatsapp number?",
        content: "<a href='https://api.whatsapp.com/send?phone=YOUR_PHONE&text=YOUR%20MESSAGE' rel='noopener noreferrer' target='_blank'>chat me on WhatsApp</a>"
    },

    {
        title: "Where to find Icons/logos",
        content: "Font Awsome: https://fontawesome.com/ and https://www.npmjs.com/package/@fortawesome/react-fontawesome for react / CSS Icons: https://css.gg/app"
    },

    {
        title: "How record screen (to readme of Github projects)",
        content: "Desktop: ShareX / CellPhone: V Recorder"
    },

    {
        title: "Where to find good photos?",
        content: "https://unsplash.com/ and https://pixabay.com/"
    },

    {
        title: "Crop images online",
        content: "https://www.iloveimg.com/crop-image"
    },

    {
        title: "GIF to Video (to include on Linkedin)",
        content: "https://ezgif.com/gif-to-mp4"
    },

    {
        title: "Share content in social media",
        content: "https://gist.github.com/apisandipas/74d396c7853b93f5f861091a2135d527"
    },

    {
        title: "Nice Gradients Colors",
        content: "https://www.eggradients.com/"
    },

    {
        title: "Record Screen on Computer",
        content: "Desktop: Share X"
    },

    {
        title: "Work as voluntary",
        content: "https://www.volunteermatch.org/"
    },  
    
    {
        title: "CSS Box Shadow Tool",
        content: "https://www.cssmatic.com/box-shadow"
    },    

    {
        title: "Write and test Markdown",
        content: "https://stackedit.io/app#"
    },    

        {
        title: "Start Strapi server",
        content: "npm run strapi develop"
    },  

    {
        title: "Steps to run Strapi on Heroku",
        content: {
            __html:
                `<ol>
                    <li>                        
                        Prepare PostgreSQL server
                            <ol>
                                <li>
                                    Open pgAdmin4 on computer
                                    <ul>
                                        Notes:
                                        <li>If receive an error, open the browser in http://127.0.0.1:53039/browser/</li>
                                        <li>It should open a tab on browser with pgAdmin postgree</li>
                                    </ul>
                                </li>

                                <li>Create a new database (or use an existing one)</li>
                                <li>Create a new user (or use an existing one) </li>
                            </ol>
                    </li>

                    <li>
                        Follow this steps: https://tute.io/install-configure-strapi-postgresql
                        <ul>Notes:
                            <li>Except the postgree CLI steps (you already create on steps above)</li>
                            <li>To create, use the red Git Bash (the yellow doens't allow change the options using the arrows)</li>
                        </ul>
                    </li>
                                
                    <li>
                        Check if it is working locally
                        <ol>
                            <li>Start server (git bash or VS Code) - npm run develop</li>
                            <li>In http://localhost:1337/admin/auth/register-admin, create a profile</li>
                            <li>Create new collection type (Content-Types Builder)</li>
                            <li>Check in pgAdmin was created there too: Project Database > Schemas > Public > Tables (find the name of your inserted colection in plural)</li>
                        </ol>
                    </li>
                    
                    <li>
                        Follow this steps (VS Code): https://strapi.io/documentation/v3.x/deployment/heroku.html
                    </li>

                    <li>
                        On production link, insert "/admin" e create a profile (this database is not the same of the development enviorement, it is needed to create a new user)
                    </li>

                    <li>Check if it is working fine
                        <ol>
                            <li>Check if the Collection Type created exist in production enviorment (it should exist)</li>
                            <li>Create a new data inside this colection in Dev Envioremnt, commit the project and check (the data don't update, because are two diferents database)</li>
                            <li>Create a new Collection type in Dev Enviorement (it is not possible do it in production anyway), commit the project and check (the Collection Type migrate do production databse)</li>
                        </ol>                    
                    </li>

                    <li>Grab a coffee, you deserve it!</li>
                    
                </ol>`
        }
    },

    {
        title: "Qhat to do When broke the GraphQL playground",
        content: "run on console: localStorage.clear(); localStorage.setItem = () => {}"
    }, 

]}

export default CODE_TIPS_DATA;









