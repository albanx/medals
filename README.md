# Medals Sorter
This is a small project that get some JSON data over a remote API and sort them displaying in a web page
I selected Angular 2 to developed the front end , opposed to pure Javascript code or ReactJS, to show a demo of the
new Google framework, which offers great features.

The final provided package contains 2 folders, 1 file:
- final_app containing all the necessary to run the app
- medals containing all the sources, Angular 2, CSS, TypeScript
- questions.md are the replies to the test questions

## Frameworks and libraries
This project makes use of the following frameworks and libraries:
- Angular 2 on the front end with TypeScript
- Bootstrap for the base CSS and look and feel
- SASS for the Angular 2 css components

## Front End Developer Guide
To start using the app in Developer mode follow this steps:
- Install Node/npm
- Install Angular CLI https://github.com/angular/angular-cli
- Run `npm install` to load the Node Modules needed for the development
- Run `npm start` to load the application in the browser

## Source (src) Folder Structure
- `config` javascript unit testing config files
- `public` final production javascript files
- `src` TypeScript / Angular 2 sources for the FrontEnd, images and CSS/SASS
- `dist` Contains the final build of the front end app

## Notes
 - The Javascript code is not minified due to an Angular CLI bug on build
 - The Filter input by Country was not implemented due to time reasons

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
The only test implemented is the app/components/medals/medals.component.spec.ts test

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.



## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
