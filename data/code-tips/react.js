const CODE_TIPS_DATA = {
    "main-page": {
        title: "React Tips",
        description: "The best tips for everyday use of React, by Pedro Programmer"
    },

    tips: [
    {
        title: "How to install all dependecies in a project whithout the 'Module Folder'?",
        content: "npm install"
    },

        {
        title: "How to insert innerHTML on react",
        content: {
            __html:
                `<ul>
                    <li>Is not recommended, but is possible</li>
                    <li>HTML should be on a object {__html: "my-html-data"}</li>
                    <li>On element, the HTML should appear, insert it on a propriety named dangerouslySetInnerHTML</li>
                    <li>Source: <a herf="https://pt-br.reactjs.org/docs/dom-elements.html">here</a></li>
                </ul>`
        }
    },

        {
        title: "Input with deboucing",
        content: "https://www.npmjs.com/package/react-debounce-input"
    },
    


]}

export default CODE_TIPS_DATA;