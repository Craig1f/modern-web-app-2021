# modern-web-app-2021
Basics for a modern web app. This is a highly-opinionated repository. But I try to back my opinions up. 

## Quick Start

TODO: Elaborate on this list
- Explain steps
- Spin up a cloud9 instance so you have tools you need, and we don't need to teach people to install node/npm/awscli/etc
- [Set up ssh keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) in cloud9 to connect to git
- Clone this repo from git

TODO: Consider a BLUF (bottom line up front). Just get users into cloud 9, and deploy the stack. Show them the app running. Now they have something they can visualize that is familiar. A web page that does "stuff". Now work backwards, and describe the parts that they can see, so they don't have to use extra energy to visualize. 

## Describing the software stack

A modern web, running on [AWS](https://aws.amazon.com/), has these main parts: 

### Repository

That's this git repo right here! Learn to clone using [ssh keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

### Front end

This is the part that is loaded into the user's browser and runs on their machine. Think html, javascript, and css. We will use one of the main modern frameworks for this: [Angular](https://angular.io/), [React](https://reactjs.org/), and [Vue](https://vuejs.org/). These are SPAs (Single Page Apps). This means that they run in your browser, like a typical desktop app, and react to changes on-the-fly. This is different from tranditional web pages, in which each click would cause a navigation, and a complete reload of html/css/js. SPAs are fast and more visually satisfying than traditional websites. 

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

- [x] Node example
- [x] Deployed

### Persistence/Database

This is where information persists between sessions with your app. We will use [Dynamo](https://aws.amazon.com/dynamodb), which is a [no-sql database](https://en.wikipedia.org/wiki/NoSQL), to avoid the complication of learning how [relational databases](https://en.wikipedia.org/wiki/Relational_database) (sql databases) work. 

Todo: 

- [x] Dynamo example
- [x] Deployed

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

Typescript is becoming more and more popular, and will improve your quality. 

## What does the stack look like?

### Front end

When you browse to a website, a few things happen: 

1. DNS resolution: Your computer uses a DNS service, typically provided by your ISP (Verizon, Comcast, etc), to convert the address to an IP address. For example, [google.com](google.com) becomes `172.217.0.46` 
2. GET call on the server: Your computer will make a GET request on the server at that location, on port 443 (for secure websites that start with https://, which is most these days ) or port 80 (for insecure websites that start with http://). Ports are just a way of computers allowing communication for more than one type of thing. There are many ports, and these are the main two most people care about. 
3. If making a secure call on port 443, there is a process beyond the scope of this tutorial, where you will use a copy of the public key (provided by your browser) as a way of verifying the private key of this site, to ensure that the computer you're talking to is the one that owns that site. This is to eliminate a man-in-the-middle attack, where a malicious site could somehow pretend to be, say, google.com. This is why it's important to only use https sites these days, so that you know that you're communicating with the site you think you are. 
4. Your browser will now download the html from that server, and any css or js referenced in that html. 
5. Now that the page is loaded, any js that was also loaded will run. In the case of an SPA (single page app), your app will begin making calls to your backend layer, to load data into your app. We call this process [hydrating](https://en.wikipedia.org/wiki/Hydration_(web_development)) the app. 

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

## Man, this is so interesting!

It's time to learn a little about the cloud. Your code needs to go somewhere. You don't own traditional (bare-metal) servers. if you did, they would cost tens of thousands of dollars each. You would need several of them. You would need someplace with strong air condition, security, and a high-bandwidth internet connection to put them. You would need to order them ahead of time and wait weeks or months. You'd have to anticipate how many you need. Too many, you waste money. Too few, your app can't meet demand. 

Or, you spend a couple dollars and spin up cloud resources. Cloud resources sit in secure locations, with armed guards, powerful air conditioning, a reliable power supply from a power company that has agreements with the facility, and fast fiber internet connections that are laid strategically. In the case of AWS, there are several regions (e.g., us-east-1, us-east-2, us-west-1, etc), each of which has several Availability Zones, which are the actual buildings that contain what you need. 

And for an affordable amount of money, you can request servers, or cloud services, do give you want you want right now. For example, we will be using a service called [Lambda](https://aws.amazon.com/lambda/pricing/), which will allow you to make one million calls for 20 cents. If you're wondering, you will probably not make more than a few dozen calls with this tutorial, so I don't think you'll be missing any meals to pay for this (also, you hopefully have a free-tier educational account and will be paying nothing). 

So, here's our stack, from top (front end) to bottom (data):

- [S3 Buckets](https://aws.amazon.com/s3/): Cheap file storage. A cheap and easy way of serving our SPA web app
- [API Gateway](https://aws.amazon.com/api-gateway/): Endpoints. Provides endpoints that our SPA app can call to get and update data
- [Lambda](https://aws.amazon.com/lambda/): Arbitrary serverless code. Hides behind API Gateway, and actually runs the code on those endpoints
- [IAM](https://aws.amazon.com/iam/): Identity and access management. This is mostly abstracted out to you, but limits the permissions your lambda has for security purposes. Be aware that it exists if you continue learning about cloud. 
- [Dynamo](https://aws.amazon.com/dynamodb): Nosql database. Where we save our data

You will notice we don't have anything that resembles a traditional server here. That is called [EC2](https://aws.amazon.com/ec2). We will be avoiding this, as we're taking a serverless approach, which is more modern, and more likely to be where your careers take you. If you ever become comfortable with learning Linux, you will use ec2s more. 

You might also notice that there are a lot of pieces, each only doing one distinct thing. This is a common modern software concept called the [single responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle). That is, do one thing very well instead of doing too many things poorly. S3 buckets are used for things besides hosting web apps. Lambdas don't have to serve as endpoints. Different combinations of these services, and others, can be used to solve different problems than our web app example. 

TODO: I probably need to give an intro to cloud9. Users won't have Admin on their computers or now how to use linux or any of that, which they'll need to deploy all this stuff. Consider another README that gets them started on cloud9, so they can get started. But the list of things is ... piling up. 

TODO: 

- [x] Start with cdk
- [x] Deploy dynamo
- [x] Deploy hello world lambdas and API Gateway
- [x] Iterate lambdas to touch Dynamo
- [ ] Add 3 s3 buckets to host front end examples
- [ ] Create Angular hello world
- [ ] Create Vue hello world
- [ ] Create React hello world
- [ ] Profit

Actual steps: 

<!-- TODO: Add explanations for why -->

- Use cloud9 so you have access to basic development tools
- `npm i aws-cdk`
- `npx cdk init sample-app typescript`
- `npm install eslint --save-dev`
- `npx eslint --init`
- `npm i @aws-cdk/aws-dynamodb --save-dev`
- `npx cdk deploy`
- Verified dynamo db table in aws account
