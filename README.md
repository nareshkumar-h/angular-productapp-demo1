## Question Set #1: Create Angular Project 

#### What softwares required for angular project ?
* NodeJS - A JavaScript runtime built on Chome's V8 JavaScript engine.
* NPM - Stands for Node Package Manager. It is the default package manager for NodeJS.

#### What is Angular Cli ?
* Angular CLI is the Command Line Interface. 
* It allows you to scaffold and build angular apps using NodeJS style modules. 
* It also handles many common tasks for you, such as generating directives, services, and components.

#### How to create a new angular project ? 
* ng new projectname

#### What is the folder structure of angular application ?
* src - Contains all of the files for the actual Angular project itself.
* node_modules - Where NPM packages are installed.
* e2e - The end-to-end test folder mainly used for integration testing.

#### List some of the files created as part of angular cli project ?
* .angular.json - Hold project name, version of CLI, etc.
* .gitignore - Should be committed into the repository, in order to share the ignore rules with any other users cloning the repository
* package.json - Tells which libraries will be installed into node_modules when you run npm install.
* app folder - The app folder is located within the project's src folder. It contains the following files:

app.module.ts - Contains references to different libraries used within the project
app.component.css - Contains the CSS structure for the component.
app.component.html. Contains the html template for the component.
app.component.ts - Contains the class for the component. Holds the logic to manage the functionality of the component.

## Question Set #2: Bootstrapping
#### What is bootstrapping?
* When we talk about bootstrapping in anything computer related, we are talking about the first piece of code that is loaded. 
* In the case of angular we have to tell it which component is the starting point for our application. 
* Every application has at least one Angular module, the root module that you bootstrap to launch the application. 
* By convention, it is usually called AppModule.
#### What is a module?
#### What is @NgModule? What are some of the attributes inside of the @NgModule decorator?

## Question Set #3: Run Angular Project 
#### How would I start a server using the Angular CLI? What is the name and default port of this server?
* ng serve. localhost:4200.

#### What is linting?
* Linting is the process of checking the source code for programmatic and stylistic errors. 
* It is useful in keeping code consistent as well as pointing out common mistakes that could potentially be problematic.

#### What is TSLint?
* TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors.

#### What is bundling?
* Bundling is the process of rolling up a number of distinct resources together into a single downloadable resource. 
* For example, a bundle may consist of multiple JavaScript or CSS files you bring down to the local machine by making a single HTTP request.

#### What is webpack?
* Webpack is a module bundler, this is useful because our client side application has many files and many dependencies, webpack can be used to bundle these files together so that our server has to send less files. This is even more important in Angular 2, since we are working with TypeScript webpack can also transpile the files into es5 standard of JavaScript. 
* Angular Cli uses Webpack under the hood for bundling functionality, but it also gives us additional functionality. The cli can be used to start projects, create new components, services, pipes, etc.


## Question Set #4: Components 

#### What is a decorator?
#### What is a component?
#### What is @Component? What are some of the attributes inside of the @Component decorator?
#### How would you add a new component to your project using the Angular CLI?
#### How would you add a new component to your project without using the Angular CLI?
#### How would I include a component on another component's HTML template page?
#### What interface does a component class implement and what method does it require the class implement?
#### What is the lifecycle of a component?
* Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.

#### What is the ngOnInit() function?
* The ngOnInit() function gets called by default in any component created. It contains the logic to be executed upon the initialization of a component.

## Question Set #5: SPA and Routing

#### What is a SPA?
*  Single-Page Application. This means that your web app has only a single html page and each "view" that the user sees is actually a fragment of code being added/removed.
####  What is routing? Why does Angular implement its own routing module?
* Routing refers to how the application will navigate between pages. Angular implements its own routing module in order to allow for single-page web applications.
* We first need to add the router to our module, then use the forRoot() function to define all the paths that the router will be able to handle. The router will load the html fragment whereever it sees the <router-outlet> tag. You can use the [routerLink]="/path" attribute inside of html to tell the router to switch views.
  
## Question Set #6: Directives
#### What is a directive?
#### What are some of the different kinds of directives provided by Angular?
* Component directives - Directives with a template
* Structural Directives - Change the DOM layout by adding and removing DOM elements. Examples include *ngFor, *ngIf, and *ngSwitch & *ngDefault
* Attribute Directive - Changes the appearance or behavior of an element, component, or another directive. An example would be ngStyle
#### How could we create an attribute directive?
#### What is *ngIf and how does it work?
#### What is *ngFor and how does it work?
  
## Question Set #7: Data Binding
#### What is data binding? What are some different data binding options provided through Angular?
#### What is event binding?
  
## Question Set #8: Service
* What is Dependency Injection?
* How would you add a new service to your project using the Angular CLI?
* How would you add a new service to your project without the Angular CLI?
* How do you perform HTTP requests in Angular?
* Does the HttpClient object create synchronized requests?
* What is a Promise?
* What is an Observable?
* What must you do in order to use Observables?
* What is the difference between a Promise and an Observable?
  
## Question Set #9: Pipes and Filters
