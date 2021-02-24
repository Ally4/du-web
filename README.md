# task-force-awesomity-backend-challenge
The Backend challenge at Awesomity


## Badges

[![Build Status](https://travis-ci.org/Ally4/task-force-awesomity-backend-challenge.svg?branch=develop)](https://travis-ci.org/Ally4/task-force-awesomity-backend-challenge) [![Coverage Status](https://coveralls.io/repos/github/Ally4/task-force-awesomity-backend-challenge/badge.svg?branch=develop)](https://coveralls.io/github/Ally4/task-force-awesomity-backend-challenge?branch=develop)

## Features

- All normal users get the landing page
- The user can register
- The user can signin
- The user can create todo
- The user can update todo
- The user can delete todo
- The user can get all todos
- The user can get a todo



#### Accessing the hosted environment

- [The heroku hosting](https://awesomity-task-force-challenge.herokuapp.com/)


## Development tools

 - NodeJs
 - Express JS
 - Mocha
 - Chai
 - Babel
 - Postgres(Sequelize)
 - JsonWebToken

  
### Endpoints and their caracteristics

| VERBS  | ENDPOINTS                        | STATUS   | DESCRIPTION                       |
|--------|----------------------------------|----------|-----------------------------------|
| GET    | /                                |  200 OK  | Welcome message                   |
| GET    | /api/v1/todo/get-todo            |  200 OK  | Getting a todo                    |
| GET    | /api/v1/todo/get-todos           |  200 OK  | Getting all todos                 |
| PATCH  | /api/v1/todo/update-todo         |  200 OK  | Updating a todo                   |
| POST   | /api/v1/todo/create-todo         |  200 OK  | Creating a todo                   |
| POST   | /api/v1/auth/login               |  200 OK  | Login in the system               |
| POST   | /api/v1/auth/register            |  201 OK  | Register in the system            |
| DELETE | /api/v1/todo/delete-todo         |  200 OK  | Delete a todo                     |

### Other Tools

Other tools and technologies used in development of this application are;
- Hoster: [Heroku](http://heroku.com).
- Compiler: [Babel](https://babeljs.io/).
- Integrate: [TravisCI](https://travis-ci.org/github/Ally4/task-force-awesomity-backend-challenge).
- Integrate: [Coveralls](https://coveralls.io/github/Ally4/task-force-awesomity-backend-challenge).
- API checking environment: [Postman](https://www.getpostman.com).
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/).
- RunTime environment: [NodeJS](https://nodejs.org/en/).
- Framework: [ExpressJS](http://expressjs.com/).
- Text Editor: [VSCode](https://code.visualstudio.com).

### Getting Started

1. Follow the instruction to start the project

- Clone this project on your machine , by running this command on in your command line or Terminal:
 ```
git clone https://github.com/Ally4/task-force-awesomity-backend-challenge.git
 ```
 - Install the required dependencies found in package.json by running this command:
 ```
npm install
 ```
 - And then to start running  this project on your computer , run :
 ```
npm run dev
 ```

 - Check the endpoint in postman on  :
 ```
http://localhost:1234
 ```
 - See the test, run command:
 ```
npm run test
```

#### Made with :heart: by Ally
