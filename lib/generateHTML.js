function createCard(employees) {

    function card(employees) {
        return     `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${employees.name}</div>
        <div class="card-body">
        <p class="card-text">${employees.id}</p>    
        <p class="card-text">${employees.email}</p>
        <p class="card-text">${employees[4]}</p>
        </div>`
    }
    
    return card(employees);
}
    



function generateHTML(employees) {
    createCard(employees)
    let fuckyou = createCard(employees)

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="#">Team Profile Generator</a>
            </div>
        </nav>

        ${fuckyou}
    
        
    </body>
    </html>`
}

module.exports = generateHTML