# NodeJS Course  
Owner: Yesid Leonardo López Sierra  
Link: [course NodeJS](https://www.udemy.com/understand-nodejs/)  
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
**Stream:** A sequence of data made available over time. 
**Binary data:** Data stored in binary (0s and 1s). Core of the math computers are based on.  
**Character Set:** a representation of characters as numbers.  
## Buffers  
It exists in Node because javascript didn't have good ways to deal with binary data. But in the ES6  version it is able to deal with it, just it is a new feature.  
## Callbacks  

