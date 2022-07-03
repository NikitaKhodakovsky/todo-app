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

To run the application you need to install [Docker](https://docs.docker.com/engine/install)

Then, run this command to verify that the installation is correct

```console
docker -v
```

You should see something like that:

```console
Docker version 20.10.17, build 100c701
```

Then, you need to clone this repository

```console
git clone https://github.com/NikitaKhodakovsky/todo-app.git
```

Navigate to directory with this repository

```console
cd todo-app
```

Then you need to execute this command:

```console
docker-compose --env-file ./.env.example up -d
```

The app is now available at http://localhost

<br>

To stop the application run:

```console
docker-compose down
```
