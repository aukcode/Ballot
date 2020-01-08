## What is this
This is WIP - Work in progess and under construction. The idea is:
 
This is an app that allows an organization to hold general elections. It's intended use is while holding general assemblies and elections within these. An emphasis have been put on anonymity. Names are associated with polls only, not individual answers.

## What is it made with

#### Front-end
>./client
- UI: TailwindCSS
- Typescript
- React & React Hooks
- React Router

#### Back-end
>./server
- NodeJS & Express
- MongoDB
- JWT and bcrypt library for security
- Hapi/Joi for data validation

## Install and run

cd into both server and client. Then, Run:

`$ npm install`

To run the app locally, run:

`$ npm start`

In order to make the backend work, you must connect a database. The .env file with database secret is not included. 
This file must contain the db connect line "DB_CONNECT={your stuff here}" and "TOKEN_SECRET={random stuff here}".
Go to [cloud.mongodb.com](http://cloud.mongodb.com) to learn how to do this.

