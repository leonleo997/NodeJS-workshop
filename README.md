# NodeJS Course  
Owner: Yesid Leonardo López Sierra  
Link: [Course NodeJS](https://www.udemy.com/understand-nodejs/)  
Philosophy: Don't imitate, understand!  
Not just focus on what, but how and why
## Big words  
**Command Line Interface (CLI):** Type commands to your computer rather than clicking.  
**Micro processors:** very small machine that does a job. It speaks an specific language. It is a physical thing that accept instructuions.  
**Machine code:** programming languages spoken by computer processors.  
**Ecmascript:** The standard javascript is based on. It says how Javascript should work. It is also known as the standard for Javascript.  
**Javascript Engine:** A program that converts Javascript code into something the computer processor can understand.  
**V8:** It is a Google's open source JavaScript written in C++.  
**NodeJS:** It is a server technology.  
**Abstract class:** a type of constructor that you never work directly with, but inherit from.     
## Foundamental Knowledge  
V8 Engine is the javascript engine (The core of NodeJS). NodeJS expand the javascript code because you can write server code.  
* The better you know Javascript, the better you know NodeJS.  
* Node is written in C ++ because Javascript engine is written in C++.  
## Servers and clients
**Server:** computer that is performing services. It does the work.  
**Client:** Makes request to a server.  
## Modules, exports and requires  
**Module:** Reusable block of code.  
**First-class function:** Everything you can do with other types, you can do with functions.  
**Inheritance:** one object gets access to the properties and methods of another object.  
**Prototype chain:** A sequence of objects connected to each other and I can access to any object in the chain.
**Primitive:** A type of data that represents a single value.  
**Scope:** Where in code you have access to particular variable or function.  
## Event and event Emitter  
Event : something that has happening in our app that we can respond to. In node there are two types of events:
    * System Events: They come from C++ core, exactly are managed for libuv.
    * Custome Events: They come inside javascript events. They are made by myself. It comes from Event Emiter.  
## Asynchronous code  
**Callbacks:** A function passed to some other function which we assume that will be invoked in some point.  
**Libuv:** Managed the task made in lower level. It makes a request to OS. It uses a queue for completed tasks. The most important thing is the event loop, it is a loop where the libuv is constantly checking the queue. The operating system puts into the queue tasks done, when the libuv checks that done task, it sends a callback to V8 the code that should be run when the task is done.  
**Non-blocking:** Doing other things without stopping your programming drom running. 
## Streams and Buffers  
**Buffer:** A temporaly spot for data. It moves data from one place to another.
**Stream:** A sequence of data made available over time. It is also seen like a sequence of pieces of data.
**Binary data:** Data stored in binary (0s and 1s). Core of the math computers are based on.  
**Character Set:** a representation of characters as numbers.  
## Buffers  
It exists in Node because javascript didn't have good ways to deal with binary data. But in the ES6  version it is able to deal with it, just it is a new feature.  
## Files and modules  
**Error first callback:** Callback take an error object as their first parameter.  
## Streams  
Data is split on chuncks and streamed.  
Chunck: piece of data being sent through streams.  
Streams are a kind of event emitters.  
We can creat our own custom stream that extends from Stream.  
0.
If the stream is readable we can read information from the stream. If it is writable we can send information through it.  
**Readable:** If the browser makes a request to the web server. The server receives the information.  
**Writable:** When the web server sends a response to the browser.  
## Pipe  
It is the way to connect two streams by writing one stream what is beang read from another. It can be chain or connected.  
**Method chaining:** a method returns an object so we can keep calling more methods.   
## Http and being a web server  
**Protocol:** A set of rules two sides agree on to use when communicating.  
**Adress Port:** Once a computer recieves a packet, how it knows what program to send it to. 
**Http:** Set of rules for data being transferred on the web. It says all the things that contains and the structure. It is composed by status, headers and body.  
**MIME type:** It specifies the type of data being sent.  
If we would like to improve the performance when we load a web page we can use `pipes` instead of end. For example:
```javascript
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    res.end(html);
```
In the code above the index html file is loaded completely, but below is loaded by chuncks. It means that performance will improve:  
```javascript
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
```
**API:** A set of tools for building a software aplication.  
**Endpoint:** One OURL in a web API. Sometimes that endpoint does multiple choices based in the header.  
## Express  
It is a powerful web application framework for NodeJS. It is designed for building web applications and APIs. 
### Routing  
Match HTTP request to content. To get more information check: https://expressjs.com/en/guide/routing.html  

### Midldeware  
Code that sits between two layers of software. In Express, sitting between the request and the response.  
**Static:** Not dynamic.  
There are very interesting middlewares in the following link: https://expressjs.com/en/resources/middleware.html  

### Templates using EJS  

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.  

Using `app.set('view engine', 'ejs');` allow us to change the extension of views. It means that when it has to find views it will search using the extention `.ejs`

 **Note:** By default the views are located in the views folder


