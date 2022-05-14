# Todo app

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshots)
    -   [Built with](#built-with)
-   [How to run an application](#how-to-run-an-application)
    -   [Server](#running-the-server)
    -   [Client](#running-the-client)

<br/>

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Add new todos to the list
-   Mark todos as complete
-   Delete todos from the list
-   Filter by all/active/complete todos
-   Clear all completed todos
-   Toggle light and dark mode

<br/>

### Screenshots
![desktop-dark](https://user-images.githubusercontent.com/52799295/168445850-4cac130f-da62-4b5c-9672-c9f424c30ea8.png)
![desktop-light](https://user-images.githubusercontent.com/52799295/168445871-bba79eaf-fcd7-40b4-8612-db35074cc786.png)
![mobile-dark](https://user-images.githubusercontent.com/52799295/168446171-9dd9721a-a282-41bd-b70e-816d70053e75.png)
![mobile-light](https://user-images.githubusercontent.com/52799295/168446172-14eaca39-6019-4896-82d1-0185cee9b2c2.png)

<br/>

### Built with

-   Client
    -   [React](https://reactjs.org/)
    -   [Apollo Client](https://www.apollographql.com/docs/react/)
    -   [CSS Modules](https://github.com/css-modules/css-modules)
    -   Mobile first approach 

<br/>

-   Server
    -   [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
    -   [TypeGraphQL](https://typegraphql.com/)
    -   [TypeORM](https://typeorm.io/)
    -   [SQLite](https://www.sqlite.org/index.html)
        <br/><br/>

<br/>

## How to run an application

To run the application you need to install [NodeJS](https://nodejs.org/en/)

After installing, you must run this command in the console to verify that the installation is correct

```console
node -v
```

The result of running this command will be the current version of NodeJS. For example:

```console
v14.18.0
```

After that you can start the application

### Running the server

Go to the root folder of the application and run the following commands

```console
cd ./server

npm i

npx tsc

ORIGIN=http://localhost:3000 node ./dist/index
```

You should see the following result

```console
Data Source has been initialized!
Server started on port: http://localhost:4200
```

<br/>

### Running the Client

You have two options to start the client: development mode or [production mode](https://create-react-app.dev/docs/deployment). We will consider the simpler option which is development mode

Make sure that your server is running. Then, open a new terminal window and go to the application root folder and run the following commands

```console
cd ./client

npm i

npm run start
```
 
After running these commands, the client will start on port 3000 by default and will be available at http://localhost:3000/
> 📝 Note that if your client runs on a different port, you must restart the server by replacing the ORIGIN variable with the url where the client ran. 
> 
> For example: 
> ```console
> ORIGIN=http://localhost:5000 node ./dist/index
> ```
