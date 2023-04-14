sequenceDiagram
    participant Browser
    participant Server

    rect rgb(191, 223, 255)
    note right of Browser: user creates new note on single-page app page.
    end
    rect rgb(200, 150, 255)
    note left of Browser: spa.js does not traditionally send the form data but uses the JavaScript code it fetched from the server as a POST with code 201
    Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server-->>-Browser: [{"message":"note created"}]
    note right of Server: Browser executes and adds the new note to the list locally before rerendering the note list on the page and sending to the server, therefore, loading updated notes to display on page.
    end