const pg = require('pg-promise')();
const db = pg('postgres://matt@localhost:5432/exercises');

db.query(`SELECT bks.starttime, facs.name 
            FROM cd.bookings bks 
            INNER JOIN cd.facilities facs on bks.facid = facs.facid 
            WHERE facs.name LIKE 'Tennis Court%' 
            AND bks.starttime > '2012-09-21' 
            AND bks.starttime < '2012-09-22' 
            ORDER BY bks.starttime asc;`)
    .then(results => console.log(results))
    .then(() => pg.end());