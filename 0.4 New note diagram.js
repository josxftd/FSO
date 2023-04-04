sequenceDiagram
    participant Browser
    participant Server

    rect rgb(191, 223, 255)
    note right of Browser: user creates new note on page.
    Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    rect rgb(200, 150, 255)
    Server-->>-Browser: URL redirected!
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server-->>-Browser: HTML doc
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>-Browser: response is the css file
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server-->>-Browser: response is the JavaScript file
    end
    note right of Browser: Browser executes the JavaScript code that requests updated JSON data from Server.
    Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>-Browser: [{content: "taking you thru", date: "2023-04-04T15:48:27.879Z"}]
    note right of Browser: Browser executes and loads updated notes to display on page.
    end