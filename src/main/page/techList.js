let techList = [
    {
        type: "Frontend",
        description: "Frontend technologies are used to build the user interface of the website.",
        list: [
            {
                name: "HTML",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                icon: "fab fa-html5",
                description: "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "CSS",
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                icon: "fab fa-css3-alt",
                description: "CSS is a language that describes the style of an HTML document. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "JavaScript",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                icon: "fab fa-js",
                description: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is often characterized as a "scripting language."',
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "React",
                url: "https://reactjs.org/",
                icon: "fab fa-react",
                description: "A JavaScript library for building user interfaces.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "Vue",
                url: "https://vuejs.org/",
                icon: "fab fa-vuejs",
                description: "A progressive framework for building user interfaces.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "SASS",
                url: "https://sass-lang.com/",
                icon: "fab fa-sass",
                description: "Sass is a language extension to CSS originally created by Hampton Catlin and developed by Natalie Weizenbaum.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "Bootstrap",
                url: "https://getbootstrap.com/",
                icon: "fab fa-bootstrap",
                description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
        ],
    },
    {
        type: "Backend",
        description: "Backend technologies are used to build the server-side logic of the website.",
        list: [
            {
                name: "NodeJs",
                url: "https://nodejs.org/en/",
                icon: "fab fa-node-js",
                description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "Express",
                url: "https://expressjs.com/",
                icon: "fab fa-express",
                description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "Mongodb",
                url: "https://www.mongodb.com/",
                icon: "fab fa-mongodb",
                description: "MongoDB is a cross-platform document-oriented database program.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "MySQL",
                url: "https://www.mysql.com/",
                icon: "fab fa-mysql",
                description: "MySQL is a relational database management system (RDBMS) based on SQL.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
            {
                name: "Golang",
                url: "https://golang.org/",
                icon: "fab fa-golang",
                description: "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            },
        ]
    },
]

export default function GetTechList() {
    return techList
}