# candidates-service

a [Sails v1](https://sailsjs.com) application - Sails v1.2.3.

## Install Project

* Install `node 12.14.1`.
* Run `npm install sails -g` to install sails js.
* Navigate to folder project and run `npm install`.

## Development server

* Run `sails lift`, it will ask for an option to run the server, choose option 1 `alter`.
* Navigate to `http://localhost:1337/` to check server is running.

## Populated local sails database

Populate the local sails database in order to let the angular side project run with initial data since there is not an interface to add candidates.

* Download [file with curl requests](https://github.com/maries-15/candidates-service/blob/master/Candidates.postman_collection.json).
* Import the file in postam and run every request (`4`) to create candidates.
