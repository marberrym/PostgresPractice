const pg = require('pg-promise')();
const db = pg('postgres://matt@localhost:5432/phonebook');


let listAll = () => {
    db.query(`SELECT * from contacts`)
    .then(results => console.log(results))
}

let searchByName = (name) => {
    return db.query(`SELECT firstname, lastname, phone from contacts WHERE lastname='` + name + `';`)
}


let searchByID = (id) => {
    db.query(`SELECT * FROM contacts WHERE id=` + id + `;`)
    .then(results => console.log(results))
}

let addContact = (firstname, lastname, address, zipcode, phone) => {
    db.query(`INSERT INTO contacts (firstname, lastname, address, zipcode, phone) values
        ('`+firstname+`', '`+lastname+`', '`+address+`', '`+zipcode+`', '`+phone+`');`)
        .then(results => console.log(results))
}

// addContact('Alex', 'K', 'Smokey', '23123', '74637362');
// listAll();
// searchByID(2);
searchByName('Cronin') 
    .then((results) => {
            console.log(results)
        }) 

