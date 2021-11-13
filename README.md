# modern-web-app-2021
Basics for a modern web app

A modern web, running on AWS, has these main parts: 

### Repository

That's this git repo right here! Learn to clone using [ssh keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh): 

### Front end

This is the part that is loaded into the user's browser and runs on their machine. Think html, javascript, and css. We will use one of the main modern frameworks for this: Angular, React, and Vue. 

Angular is a product of Google, and started the Single Page Application revolution. 

React is a product of Facebook, and improved on Angular by supporting much faster change-detection processes. Angular has since updated to keep pace and stay in the top 3. 

Vue is a produce of an ex-Angular developer. It is very similar to Angular, but is much simpler. 

Angular is a Framework, and can do pretty much everything without using other libraries. React and Vue require other libraries to be complete. However, they have easier learning curves. 

I will try to give examples of all three. 

### Back end

This is the part that the front end talks to. It's where it gets information and sends updates. It's also the bridge to the persistence, or database layer. We will use Node, which is backend javascript, so we can use the same language that we use on the front end. 

### Persistence/Database

This is where information persists between sessions with your app. We will use Dynamo, which is a no-sql database, to avoid the complication of learning how relational databases (sql databases) work. 

### Deployment process

AWS is the pioneer and leader of the cloud. Azure comes in as a distant second, but it is still becoming important to learn both. However, we will focus on AWS. 

To deploy on AWS, we have a few options: 

- Cloudformation
  - The original way to deploy stacks (your stack is your front end/back end/data layer, and all the things you need to have a working app). 
- Terraform
  - A popular Cloudformation alternative, which supports other clouds besides AWS, including a stack that spans across multiple clouds. 
- Severless Framework
  - Another popular way of deploying serverless applications, that is an abstraction on top of cloudformation. 
- AWS CDK
  - A way of deploying your stack with code, which is currently my preferred way to deploy
  - Why? Deployments get complicated no matter which method you use. Being able to use Javascript to write my deployment allows me to avoid complicating my deployment using yet again other process, such as bash scripts (a linux thing). Simple deployments stay simple, but complicated deployments are easier to do with CDK than with the other options above. 

### Typescript

Typescript is a layer on top of Javascript, which makes code much easier to write, to refactor (change), and to understand, even without having to run it. In all the places I've mentioned Javascript above, we will actually be using Typescript, which looks exactly the same, except you declare what types you're using. For example: `let x = 3;` would result in `x` having the type of `number`. Trying to assign `x = 'hello'` later would result in a type error. 
