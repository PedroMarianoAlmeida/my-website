const CODE_TIPS_DATA = {
    "main-page": {
        title: "Bootstrap Tips",
        description: "The best tips for everyday use of Bootstrap, by Pedro Programmer"
    },

    tips: [
        {
            title: "How to center anything?",
            content: {
                __html: `
                    <ul>
                        <li>Text (or SVG) - Horizontal:</li>
                        <ul><li>class text-center on parent</li></ul>
                        <li>Content inside the DIV (the div is 100% his parent but the content not fill all height) - Horizontal:</li>
                        <ul><li>align-self-center</li></ul>
                        <li>Center the content of a DIV only in md screens - Horizontal:</li>
                        <ul><li> d-flex d-md-block justify-content-center</li></ul>
                        <li>Center a div witch is nested in another div larger - horizontal:</li>
                        <ul><li>d-flex justify-content-center (on parent)</li></ul> 
                        <li>Center a div witch is nested in another div taller - vertical:</li>
                        <ul><li>my-auto</li></ul>
                        <li>Center a div inside a row - vertical:</li>
                        <ul><li>d-flex align-items-center</li></ul>
                    </ul>
                `}
        },

        {
            title: "How to adjust margin and padding to diferent screen sizes?",
            content: "insert the name of the biggest screen betwwen the 'p' and or 'm' and number (example: my-md-5 py-md-5) for shorter sizes this margin will not exist source:https://getbootstrap.com/docs/4.4/utilities/spacing/ "
        },

        {
            title: "All screen sizes",
            content: "Smalest to biggest: xs (>768), sm(768 to 992), md (992 to 1200), lg (<1200)"
        },

        {
            title: "All colors",
            content: "primary, secondary, sucess, danger, warning, info, light, dark, muted, white"
        },

        {
            title: "Image treatment classes",
            content: "img-thumbnail img-fluid"
        },

    ]
}

export default CODE_TIPS_DATA;