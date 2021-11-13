# modern-web-app-2021
Basics for a modern web app. This is a highly-opinionated repository. But I try to back my opinions up. 

A modern web, running on [AWS](https://aws.amazon.com/), has these main parts: 

### Repository

That's this git repo right here! Learn to clone using [ssh keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh): 

### Front end

This is the part that is loaded into the user's browser and runs on their machine. Think html, javascript, and css. We will use one of the main modern frameworks for this: [Angular](https://angular.io/), [React](https://reactjs.org/), and [Vue](https://vuejs.org/). 

[Angular](https://angular.io/) is a product of Google, and started the Single Page Application revolution. 

[React](https://reactjs.org/) is a product of Facebook, and improved on Angular by supporting much faster change-detection processes. [Angular](https://angular.io/) has since updated to keep pace and stay in the top 3. 

[Vue](https://vuejs.org/) is a produce of an ex-Angular developer. It is very similar to Angular, but is much simpler. 

[Angular](https://angular.io/) is a Framework, and can do pretty much everything without using other libraries. [React](https://reactjs.org/) and [Vue](https://vuejs.org/) require other libraries to be complete. However, they have easier learning curves. 

I will try to give examples of all three. 

Todo: 
- [ ] Angular Example
- [ ] React Example
- [ ] Vue Example

### Back end

This is the part that the front end talks to. It's where it gets information and sends updates. It's also the bridge to the persistence, or database layer. We will use [Node](https://nodejs.org/), which is backend javascript, so we can use the same language that we use on the front end. 

### Persistence/Database

This is where information persists between sessions with your app. We will use [Dynamo](https://aws.amazon.com/dynamodb), which is a [no-sql database](https://en.wikipedia.org/wiki/NoSQL), to avoid the complication of learning how [relational databases](https://en.wikipedia.org/wiki/Relational_database) (sql databases) work. 

### Deployment process

[AWS](https://aws.amazon.com/) is the pioneer and leader of the cloud. [Azure](https://azure.microsoft.com/) comes in as a distant second, but it is still becoming important to learn both. However, we will focus on AWS to get the core concepts. There are no practical third options for cloud providers at this time. 

To deploy on AWS, we have a few options: 

- [Cloudformation](https://aws.amazon.com/cloudformation/)
  - The original way to deploy stacks (your stack is your front end/back end/data layer, and all the things you need to have a working app). 
- [Terraform](https://www.terraform.io/)
  - A popular Cloudformation alternative, which supports other clouds besides AWS, including a stack that spans across multiple clouds. 
- [Severless Framework](https://www.serverless.com/)
  - Another popular way of deploying serverless applications, that is an abstraction on top of cloudformation. 
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
  - A way of deploying your stack with code, which is currently my preferred way to deploy
  - Why? Deployments get complicated no matter which method you use. Being able to use Javascript to write my deployment allows me to avoid complicating my deployment using yet again other process, such as bash scripts (a linux thing). Simple deployments stay simple, but complicated deployments are easier to do with CDK than with the other options above. 

### Typescript

[Typescript](https://www.typescriptlang.org/) is a layer on top of Javascript, which makes code much easier to write, to refactor (change), and to understand, even without having to run it. In all the places I've mentioned Javascript above, we will actually be using Typescript, which looks exactly the same, except you declare what types you're using. For example: `let x = 3;` would result in `x` having the type of `number`. Trying to assign `x = 'hello'` later would result in a type error that you would see immediately. 
