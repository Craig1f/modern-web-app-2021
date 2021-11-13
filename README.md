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
- [ ] Deployed

### Back end

This is the part that the front end talks to. It's where it gets information and sends updates. It's also the bridge to the persistence, or database layer. We will use [Node](https://nodejs.org/), which is backend javascript, so we can use the same language that we use on the front end. 

Todo: 

- [ ] Node example
- [ ] Deployed

### Persistence/Database

This is where information persists between sessions with your app. We will use [Dynamo](https://aws.amazon.com/dynamodb), which is a [no-sql database](https://en.wikipedia.org/wiki/NoSQL), to avoid the complication of learning how [relational databases](https://en.wikipedia.org/wiki/Relational_database) (sql databases) work. 

Todo: 

- [ ] Dynamo example
- [ ] Deployed

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

Todo

- [ ] CDK example

### Typescript

[Typescript](https://www.typescriptlang.org/) is a layer on top of Javascript, which makes code much easier to write, to refactor (change), and to understand, even without having to run it. In all the places I've mentioned Javascript above, we will actually be using Typescript, which looks exactly the same, except you declare what types you're using. For example: `let x = 3;` would result in `x` having the type of `number`. Trying to assign `x = 'hello'` later would result in a type error that you would see immediately. 

## What does the stack look like?

### Front end

When you browse to a website, a few things happen: 

1. DNS resolution: Your computer uses a DNS service, typically provided by your ISP (Verizon, Comcast, etc), to convert the address to an IP address. For example, [google.com](google.com) becomes `172.217.0.46` 
2. GET call on the server: Your computer will make a GET request on the server at that location, on port 443 (for secure websites that start with https://, which is most these days ) or port 80 (for insecure websites that start with http://). Ports are just a way of computers allowing communication for more than one type of thing. There are many ports, and these are the main two most people care about. 
3. If making a secure call on port 443, there is a process beyond the scope of this tutorial, where you will use a copy of the public key (provided by your browser) as a way of verifying the private key of this site, to ensure that the computer you're talking to is the one that owns that site. This is to eliminate a man-in-the-middle attack, where a malicious site could somehow pretend to be, say, google.com. This is why it's important to only use https sites these days, so that you know that you're communicating with the site you think you are. 
4. Your browser will now download the html from that server, and any css or js referenced in that html. 

#### Html

Html is the text on the page, and references to any more interesting stuff

```html
<html>
  <head>
    <title>Basic page</title> <!-- Title of the page that shows up in the tab at the top -->
    <script src=".app.js"></script> <!-- Reference to some javascript, which will make the page "do stuff" -->
  </head>
  <body>
    <!-- The body of the page you see in your browser window -->
    This is what a bare-bones html page looks like
  </body>
</html>
```

#### Javascript

Javascript is code. It will look like this: 

```javascript
var car = {
    startEngine: function () {
        console.log("Car started");             
    }        
}
  
car.startEngine();
```

Or Javascript will look different. We will use a more mature language to build our website, and it will changed into regular javascript that runs on the page with a transpiler. Our javascript will also be communicating with our back end layer.

TODO: Give a quick http call example here to warm them up to the concept. 

#### Cascading StyleSheet

CSS is a way of changing the visuals of your site, without making the HTML too messy. For example, to make the text in the html example above red, I can reference a file in my html with this: 

```css
body {
  text: red;
}
```

### Back end

The back end will wait for request from the front end to do stuff. This is typically some kind of CRUD operation (Create, Read, Update, Delete). CRUD operations touch the backend, which persists. 

### Persistence

This part will not include code. You'll set up your DB, and connect to it from your back end. 

## Man, this is so interesting! Tell me more. How do I literally do this?

TODO: 

- [ ] Start with cdk
- [ ] Deploy dynamo
- [ ] Deploy a simple CRUD layer in lambda using node
- [ ] Add api gateway
- [ ] Add 3 s3 buckets for front end examples
- [ ] Create Angular hello world
- [ ] Create Vue hello world
- [ ] Create React hello world
- [ ] Profit

