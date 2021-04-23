let html = `<!DOCTYPE html>
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

`

const generateHTML = (arr) => {
    arr.forEach(employees => {
        switch(employees.getRole()){
            case "Manager":
            createManagerCard(employees);
            break;

            case "Engineer":
            createEngineerCard(employees);
            break;

            default:
            createInternCard(employees);
            break;
        }
    });
    return html +=   `</body>
    </html>`
}

const createManagerCard = (manager) => {
    html+= `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.name}</div>
    <div class="card-body">
    <p class="card-text">${manager.id}</p>    
    <p class="card-text">${manager.email}</p>
    <p class="card-text">${manager.officeNumber}</p>
    </div>`
}
const createEngineerCard = (engineer) => {
    html+= `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">${engineer.name}</div>
    <div class="card-body">
    <p class="card-text">${engineer.id}</p>    
    <p class="card-text">${engineer.email}</p>
    <p class="card-text">${engineer.github}</p>
    </div>`
}
const createInternCard = (intern) => {
    html+= `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">${intern.name}</div>
    <div class="card-body">
    <p class="card-text">${intern.id}</p>    
    <p class="card-text">${intern.email}</p>
    <p class="card-text">${intern.school}</p>
    </div>`
}



module.exports = generateHTML