sequenceDiagram
    participant Browser
    participant Server

    rect rgb(191, 223, 255)
    note right of Browser: user creates new note on single-page app page.
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    rect rgb(200, 150, 255)
    Server-->>-Browser: returns HTML code (doc)
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>-Browser: response is the css file
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>-Browser: response is the JavaScript file
    end
    note right of Browser: Browser executes the JavaScript code that requests updated JSON data from Server to display all notes.
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>-Browser: [{content: "x", date: "2023-04-14T06:02:31.881Z"}, {content: "z", date: "2023-04-14T06:03:46.816Z"},…]
    note right of Browser: Browser executes and loads all notes to display on page.
    end