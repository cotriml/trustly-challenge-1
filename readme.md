# Trustly Challenge 1

I built this application to consume an API and show its results. I used nodejs as backend to make a proxy call to World Clock API and return its response. For the frontend I used simple HTML and JS code with Jquery (to manipulate HTML elements) and Axios (to make HTTP requests) libs. 

> Developed by Lucas Cotrim Machado 

> E-mail: lucascotrim3@hotmail.com

The deliverables are: 
* NodeJs API using SOLID principles
* Simple HTML page to consuming this API
* Postman Collection
* Swagger (yaml file)

> ## Docs

* [Swagger](./Backend/public/swagger/)

* [Postman](./Backend/public/postman/) 

> ## Usecases

- Date Time
  - [Get Current Date Time](./requirements/date-time/get-date-time.md)

> ## Environment Variables

Create a .env file on Backend directory with following environment variables (recommended):

`PORT=3030`\
`DATETIMEAPI=http://worldclockapi.com/api/json/:timeType/now`

 > All of these values are required for the well functioning of the API

> ## Starting

* Install dependencies

	`npm install`
    
* Start application

	`npm start`

> ## Debugging

Make sure to have debugger configured on your text editor or IDE. 

* For watch directories changes, run the following command in a separate terminal bash: 

	`npm run watch`

* Debug mode with Docker (make sure Docker is installed and running)
	
    `npm run up`
    
* Debug mode without Docker
	
    `npm run debug`

> ## Testing

On terminal you can run the following commands: 

* General Tests
	
	`npm test`
    
* Coverage Tests

	`npm run test:ci`
    
* Verbose Tests (more detailed)

	`npm run test:verbose`
    
* Staged Tests (uncommitted files)

	`npm run test:staged`
    
* Unit/Integration Test (changed files)

	`npm run test:unit`

	`npm run test:integration`

> ## How it was built

* NodeJs
* Typescript
* Express
* Jest
	* Unit Tests
	* Integration Tests	 
	* Coverage Tests
	* Mocks
	* Spies
* Swagger
* Docker