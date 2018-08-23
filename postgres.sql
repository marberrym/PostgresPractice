CREATE TABLE contacts (
    id serial primary key,
    lastname character varying (200),
    firstname character varying (200),
    address character varying (300),
    zipcode integer UNIQUE,
    phone character varying (200));

INSERT INTO contacts (
    lastname,
    firstname,
    address,
    zipcode,
    phone )
    values (
        'Marberry',
        'Matthew',
        'Atlanta, GA',
        '30042',
        '7703675775'
    );

INSERT INTO contacts (
    lastname,
    firstname,
    address,
    zipcode,
    phone )
    values (
        'Cronin',
        'Chelsea',
        'Matts Heart',
        '30062',
        '7703675775'
    );

UPDATE contacts SET
    group_id = 1
WHERE
    id = 1;

ALTER TABLE contacts ADD COLUMN group_id integer;