const pg = require('pg-promise')();
const db = pg('postgres://matt@localhost:5432/phonebook');


let listAll = () => {
    return db.query(`SELECT * from contacts`)
    
}

let searchByName = (name) => {
    return db.query(`SELECT firstname, lastname, phone from contacts WHERE lastname='` + name + `';`)
}


let searchByID = (id) => {
    return db.query(`SELECT * FROM contacts WHERE id=` + id + `;`)
}

let addContact = (firstname, lastname, address, zipcode, phone) => {
    return db.query(`INSERT INTO contacts (firstname, lastname, address, zipcode, phone) values
        ('`+firstname+`', '`+lastname+`', '`+address+`', '`+zipcode+`', '`+phone+`');`) 
}

let deleteContact = (id) => {
    return db.query(`DELETE FROM contacts WHERE id=` + id + `;`)
}
searchByName('Cronin') 
    .then((results) => {
            console.log(results)
        }) 

exports.listAll = listAll
exports.searchLName = searchByName
exports.searchByID = searchByID
exports.addContact = addContact
exports.deleteContact = deleteContact

