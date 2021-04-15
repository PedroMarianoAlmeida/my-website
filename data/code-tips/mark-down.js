const CODE_TIPS_DATA = {
  "main-page": {
    title: "Mark Down",
    description: "Tips to work with .md files",
  },

  tips: [
    {
      title: "Title",
      content: "# My Title (with space between the # and the text)",
    },
    {
      title: "Subtitle",
      content:
        "## (the number of '#' is equivalent to <h> in HTML - with space between the ## and the text)",
    },

    {
      title: "Link",
      content: "[text](link address) or <address clicable>",
    },

    {
      title: "Bold",
      content: "**text** or __text__",
    },

    {
      title: "Italic",
      content: "*text* or _text_",
    },

    {
      title: "List",
      content: "* ul and 1. ol (with space between the symbol and the text)",
    },

    {
      title: "Image",
      content: "![Image Title](image url) or <address clicable>",
    },

    {
      title: "Quotes",
      content: "> text (in each line)",
    },

    {
      title: "Code",
      content:
        "`single line code` / ```multi line code``` or ~~~multi line code~~~",
    },

    {
      title: "Checkbox",
      content: "[ ] uncheck box / [x] checked box",
    },
  ],
};

export default CODE_TIPS_DATA;
