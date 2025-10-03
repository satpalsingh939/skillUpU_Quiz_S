const Question = require("./models/Question");

async function seedQuestions() {
  const data = [
    // HTML
    {
      domain: "html",
      question: "Which tag is used to define a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<hyper>"],
      answer: "<a>",
      level: "easy"
    },
    {
      domain: "html",
      question: "Which HTML tag is used to display the largest heading?",
      options: ["<h1>", "<h6>", "<heading>", "<title>"],
      answer: "<h1>",
      level: "easy"
    },
    {
      domain: "html",
      question: "Which attribute is used to provide alternative text for an image?",
      options: ["alt", "title", "src", "href"],
      answer: "alt",
      level: "easy"
    },
    {
      domain: "html",
      question: "Which tag is used to insert a line break?",
      options: ["<br>", "<hr>", "<break>", "<line>"],
      answer: "<br>",
      level: "easy"
    },
    {
      domain: "html",
      question: "Which HTML element is used to create an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: "<ul>",
      level: "easy"
    },

    // CSS
    {
      domain: "css",
      question: "Which property changes the background color?",
      options: ["color", "bgcolor", "background-color", "background"],
      answer: "background-color",
      level: "easy"
    },
    {
      domain: "css",
      question: "Which CSS property controls text size?",
      options: ["font-style", "text-size", "font-size", "text-style"],
      answer: "font-size",
      level: "easy"
    },
    {
      domain: "css",
      question: "Which property makes text bold?",
      options: ["font-style", "font-weight", "bold", "text-decoration"],
      answer: "font-weight",
      level: "easy"
    },
    {
      domain: "css",
      question: "Which value of position makes an element stay fixed?",
      options: ["absolute", "relative", "fixed", "sticky"],
      answer: "fixed",
      level: "easy"
    },
    {
      domain: "css",
      question: "Which property sets space between lines?",
      options: ["letter-spacing", "word-spacing", "line-height", "spacing"],
      answer: "line-height",
      level: "easy"
    },

    // JavaScript
    {
      domain: "javascript",
      question: "Which keyword declares a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above",
      level: "easy"
    },
    {
      domain: "javascript",
      question: "Which method is used to print values in console?",
      options: ["print()", "console.log()", "log.print()", "echo()"],
      answer: "console.log()",
      level: "easy"
    },
    {
      domain: "javascript",
      question: "Which operator is used for strict equality check?",
      options: ["=", "==", "===", "!="],
      answer: "===",
      level: "easy"
    },
    {
      domain: "javascript",
      question: "Which built-in method converts JSON string to object?",
      options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "toJSON()"],
      answer: "JSON.parse()",
      level: "easy"
    },
    {
      domain: "javascript",
      question: "Which symbol is used for single-line comments?",
      options: ["//", "/* */", "#", "<!-- -->"],
      answer: "//",
      level: "easy"
    },

    // React.js

    {
      domain: "reactjs",
      question: "Which hook is used for state management in React?",
      options: ["useState", "useEffect", "useContext", "useMemo"],
      answer: "useState",
      level: "easy"
    },
    {
      domain: "reactjs",
      question: "What does JSX stand for?",
      options: ["JavaScript XML", "JavaScript Extension", "Java Syntax Extension", "JSON-like Syntax"],
      answer: "JavaScript XML",
      level: "easy"
    },
    {
      domain: "reactjs",
      question: "Which method is used to render elements into DOM in older versions?",
      options: ["ReactDOM.render()", "React.render()", "root.render()", "renderDOM()"],
      answer: "ReactDOM.render()",
      level: "easy"
    },
    {
      domain: "reactjs",
      question: "Which hook is used for side effects?",
      options: ["useEffect", "useState", "useMemo", "useReducer"],
      answer: "useEffect",
      level: "easy"
    },
    {
      domain: "reactjs",
      question: "Which prop is used to pass data to components?",
      options: ["props", "state", "data", "context"],
      answer: "props",
      level: "easy"
    },


    // Node.js
    {
      domain: "nodejs",
      question: "Which command is used to initialize a Node.js project?",
      options: ["npm init", "node init", "npm start", "node install"],
      answer: "npm init",
      level: "easy"
    },
    {
      domain: "nodejs",
      question: "Which module is used to work with file system in Node.js?",
      options: ["fs", "http", "path", "os"],
      answer: "fs",
      level: "easy"
    },
    {
      domain: "nodejs",
      question: "Which keyword is used to import modules in Node.js (CommonJS)?",
      options: ["require", "import", "include", "export"],
      answer: "require",
      level: "easy"
    },
    {
      domain: "nodejs",
      question: "Which global object is used to print to console in Node.js?",
      options: ["console", "log", "process", "stdout"],
      answer: "console",
      level: "easy"
    },
    {
      domain: "nodejs",
      question: "Which module is used to create a web server in Node.js?",
      options: ["http", "fs", "events", "url"],
      answer: "http",
      level: "easy"
    },

    // Express.js
    {
      domain: "expressjs",
      question: "Which function creates an Express application?",
      options: ["express()", "createApp()", "init()", "new Express()"],
      answer: "express()",
      level: "easy"
    },
    {
      domain: "expressjs",
      question: "Which method is used to handle GET requests?",
      options: ["app.get()", "app.post()", "app.use()", "app.route()"],
      answer: "app.get()",
      level: "easy"
    },
    {
      domain: "expressjs",
      question: "Which middleware parses incoming JSON requests?",
      options: ["express.json()", "express.urlencoded()", "bodyParser()", "express.static()"],
      answer: "express.json()",
      level: "easy"
    },
    {
      domain: "expressjs",
      question: "Which method is used to start an Express server?",
      options: ["app.listen()", "app.run()", "app.start()", "app.init()"],
      answer: "app.listen()",
      level: "easy"
    },
    {
      domain: "expressjs",
      question: "Which middleware is used to serve static files?",
      options: ["express.static()", "express.json()", "app.use()", "app.route()"],
      answer: "express.static()",
      level: "easy"
    },

    // Mongodb

    {
      domain: "mongodb",
      question: "Which command is used to show all databases in MongoDB?",
      options: ["show dbs", "show databases", "list dbs", "get databases"],
      answer: "show dbs",
      level: "easy"
    },
    {
      domain: "mongodb",
      question: "Which data format does MongoDB use to store documents?",
      options: ["BSON", "JSON", "XML", "CSV"],
      answer: "BSON",
      level: "easy"
    },
    {
      domain: "mongodb",
      question: "Which command is used to switch to a database?",
      options: ["use dbname", "switch dbname", "select dbname", "db.use()"],
      answer: "use dbname",
      level: "easy"
    },
    {
      domain: "mongodb",
      question: "Which command inserts one document into a collection?",
      options: ["insertOne()", "insert()", "addOne()", "create()"],
      answer: "insertOne()",
      level: "easy"
    },
    {
      domain: "mongodb",
      question: "Which operator is used for pattern matching in MongoDB?",
      options: ["$regex", "$match", "$like", "$search"],
      answer: "$regex",
      level: "easy"
    },

    // Sql

    {
      domain: "mysql",
      question: "Which command is used to show all databases in MySQL?",
      options: ["SHOW DATABASES;", "LIST DATABASES;", "GET DATABASES;", "DISPLAY DATABASES;"],
      answer: "SHOW DATABASES;",
      level: "easy"
    },
    {
      domain: "mysql",
      question: "Which keyword is used to create a database?",
      options: ["CREATE DATABASE", "MAKE DATABASE", "NEW DATABASE", "ADD DATABASE"],
      answer: "CREATE DATABASE",
      level: "easy"
    },
    {
      domain: "mysql",
      question: "Which SQL statement retrieves data?",
      options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
      answer: "SELECT",
      level: "easy"
    },
    {
      domain: "mysql",
      question: "Which command is used to remove all rows from a table but keep its structure?",
      options: ["TRUNCATE", "DELETE", "DROP", "REMOVE"],
      answer: "TRUNCATE",
      level: "easy"
    },
    {
      domain: "mysql",
      question: "Which symbol is used for a single-line comment in MySQL?",
      options: ["--", "/*", "//", "#"],
      answer: "--",
      level: "easy"
    },

    // Ui/Ux

    {
      domain: "uiux",
      question: "What does UX stand for?",
      options: ["User Experience", "User Extension", "Unique Experience", "Universal Exchange"],
      answer: "User Experience",
      level: "easy"
    },
    {
      domain: "uiux",
      question: "What does UI stand for?",
      options: ["User Integration", "User Interface", "Universal Interaction", "Unique Input"],
      answer: "User Interface",
      level: "easy"
    },
    {
      domain: "uiux",
      question: "Which color is considered most calming for users?",
      options: ["Blue", "Red", "Yellow", "Black"],
      answer: "Blue",
      level: "easy"
    },
    {
      domain: "uiux",
      question: "Which principle is about keeping designs simple and clear?",
      options: ["Clarity", "Complexity", "Animation", "Hierarchy"],
      answer: "Clarity",
      level: "easy"
    },
    {
      domain: "uiux",
      question: "Which tool is widely used for UI design?",
      options: ["Figma", "MySQL", "Node.js", "MongoDB"],
      answer: "Figma",
      level: "easy"
    },


  ];

  for (const q of data) {
    const exists = await Question.findOne({ question: q.question, domain: q.domain });
    if (!exists) await Question.create(q);
  }

  console.log("✅ Questions seeded into MongoDB");
}

module.exports = seedQuestions;
