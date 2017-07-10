# School Gradebook

Make sure you install / update `Node.js` and `npm`.
`mongod` must be located in system environment path or running from its located directory.

## Install dependencies

```
$ cd SchoolGradebook
$ npm install
$ cd server
$ npm install
```

## Development mode

```
$ mongod
open new console window
$ cd SchoolGradebook\server && gulp
open new console window
$ cd SchoolGradebook
$ ng serve --open
```

## Production mode

Change `devModeUrl` to equal empty path in `student.service.ts`.
Remove cross origin middleware in `app.js`.

```
$ mongod
open new console window
$ cd SchoolGradebook
$ ng build --prod
$ cd server && gulp
```

Open http://localhost:3000/

## Import mock data to your database

```
$ mongod
open new console window
$ cd SchoolGradebook\mock_data
$ mongoimport --db gradebook --collection students --drop --file students.json
```