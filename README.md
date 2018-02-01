# Ruby Miner

A React single page app clone of rubygems.org. Built on top of my personal [React Redux Starter](https://github.com/spbsamuel/react-redux-starter)

## Features

### In page browsing
Browse gems while viewing search results

### Open multiple tabs
Gems can be opened with new tab using CMD + Click

### Nested Gem browsing
When looking through dependencies, a browsing history is kept to go back

### Favourites Stored Locally
Favorite gems are stored in localstorage along with saved queries

## Requirements
* node
* yarn [Installation guide](https://yarnpkg.com/lang/en/docs/install/)


## Installation

```bash
$ yarn  # Install project dependencies
```

Add your api key

`/src/secret.template.js` 

```
export default 'type your secret api key here'
```
rename file
```bash
$ mv src/secret.template.js src/secret.js
```

## Run application locally

After [installing the  application](#installation), you're good to go!

```bash
$ yarn serve
```

The application will be running at [localhost:8080](http://localhost:8080)

## Other scripts

|`yarn <script>`    |Description|
|-------------------|-----------|
|`serve`            |Serves your app at `localhost:8080`|
|`build`            |Builds the application to ./dist|
|`serve:prod`       |Serves ./dist files via http-server at `localhost:8080`|