# Nodejs-rest-project
The following would highlight Nodejs, Typescript Proficency 
Project: Node.js REST API Development

## Getting Started

These instructions will instruct how to get the project setup, installed and running on your local machine for development and testing purposes. Enjoy! 

----------------------
Command Line Arguments
----------------------
### Installing dependencies
`yarn install` or `npm install`

Example:  `yarn start` or `npm start` will initalize the project and run.

For more information, please read package.json **scripts* section

-------------------------
Design Decisions
-------------------------
import nodejs typescript support libraries, express, morgan, winston, compress, etc. 

Q.  Reason for folder structure?

A.  I wanted to modularize project funcitonal areas, which make modifying features easier to identify and isolate

Q.  Why use environmnet.ts vs .env ?

A.  Personally, it's just easier and less of a headace and it doesn't require an entire package module to manage or update.



/api/v1/parse & /api/v2/parse REST API WorkFlow - `yarn test` or `npm run test`

		    |--------------------------------|         |---------------------|
                | Nodejs - (Express - Typescript)          |--has-a----->| body  |
                |                                |         |--has-a----->| data  |
                |                                |         |--has-a----->| Object|
                |--------------------------------|         |---------------------|
                           ^    ^                           ^  ^
                          /      \                          |  |
                         /        \                         |  |
                        /          \                        |  |
                       /           |--------------|         |  |
                      /            |  Route Parse |-has-a---|  |
                     /             |--------------|            |
                    /                                        is-special client
                   /                                           |
                  /                                            V
    |----------------|                                  |--------------------|
    |     Client     |<--------------has-a------------->| Object response    |
    |----------------|                                  |--------------------|
   



Q.  Did you work with any tests?

A.  Yes, using Moch Chai - I tested both individual endpoints and workflows to accomplish the assesment. However, though not required I felt it necessary to include an affinity to apply funtional unit testing. Though, the assesmnent does not state the test coverage requirements. 

-------------------------
Testing
-------------------------

The following would relate to testing, application operation(s) tests methods, and processes

 - Running application (node.js, express via single port: 8080)
 - Test moch chai, if library is available, `context basic operation`

Test case 2
```
 - Test Endpoint /api/v1/parse
```
Test case 2
```
 - Test Endpoint /api/v2/parse
```

-------------------------
Deployment
-------------------------
This section would presume docker is installed. If so, the project can then be built and test locally or deployed via cloud service provider.

- ` docker-compose up -d `

**NOTE** The project `Dockerfile` has been included in this project to build a custom image / container.