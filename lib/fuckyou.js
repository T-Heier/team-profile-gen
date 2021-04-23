function createCards(employees) {
    console.log("test")

    const employeeCard = document.getElementById('cards')

    for (i = 0; i < employees.length; i++) {

        function card(employees) {
            let borgDuck = `<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">${employees[i].name}</div>
            <div class="card-body">
            <p class="card-text">${employees[i].id}</p>    
            <p class="card-text">${employees[i].email}</p>
            <p class="card-text">${employees[i]}</p>
            </div>`
            employeeCard.append(borgDuck)
        }
        card(employees)
    }

}

module.exports = createCards