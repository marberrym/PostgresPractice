let queries = require('./phonebook');

let readBody = (req, callback) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        callback(body);
    });
}

let initialReq = (req, res) => {
    res.end("Hello Peon.");
}

let contactsReq = (req, res) => {
    queries.listAll()
        .then((results) => res.end(JSON.stringify(results)));
}

let contactsPost = (req, res) => {
    readBody(req, function(body) {
        let newEntry = JSON.parse(body);
        let firstname = newEntry.firstname;
        let lastname = newEntry.lastname;
        let address = newEntry.address;
        let zipcode = newEntry.zipcode;
        let phone = newEntry.phone;

        queries.addContact(firstname, lastname, address, zipcode, phone)
            .then((results) => {
                res.end("Successful Post for: " + results);
            })
    });
}

let getContact = (req, res) => {
    let id = req.params.id;
    queries.searchByID(id)
        .then((results) => res.end(JSON.stringify(results)));
}

let deleteContact = (req, res) => {
    let id = req.params.id;
    queries.deleteContact(id)
        .then((results) => res.end("Delete Successful!"));
}

let invalidPage = (req, res) => {
    console.log(getSuffix(req.url, '/contacts/'));
    res.end("404 you twat hey")
}




const ex = require('express');
let server = ex();

server.get('/contacts', contactsReq);
server.post('/contacts', contactsPost);
server.get('/contacts/:id', getContact);
server.delete('/contacts/:id', deleteContact);

server.listen(7000);