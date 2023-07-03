# Frontend

## Be extremely familiar with the following concepts for frontend interview:
- CSS: Specificity, Box model, Layout, Positioning
- JavaScript: this keyword, Prototypes, closures, Async-style code, Promises, Timers (setTimeout, setInterval)
- JavaScript design patterns: Observer pattern, Module pattern
- HTML: Event delegation (it was useful in almost every interview), DOM traversal, DOM manipulation, Form validation and submission
- Vanilla JS, or jQuery at the very least. Not all interviews allow you to use React as they want to see mastery of the fundamentals

# Questions:

## Differentiate between div and span?
- It is utilized for separating the elements that are block-line, line break before and after it. /	Span is utilized for grouping inline elements in the HTML doc.
- At times para tag <P> is utilised for inner side of the <div> tag.	/ In a paragraph, <span> tag is utilized to use a CSS style for certain words with the selected font sets.
- In div tag, we make use of borders with width height with specified color pixels to emphasize the front end document.	/ In the Span tag, we utilize specified color coding to depict the front-end document.

## Describe the advantages of REST web services?
- The curve of learning is simple since it works on the HTTP protocol.
- No contract clears between server and client, so roughly coupled application.
- REST approaches can be effortlessly tested on the browser.
- It also backs multiple technologies for the transfer of, for instance, image, JSON, XML, text, etc.
- It is a lightweight protocol.

## How browsers render the UI?
The primary responsibility of the rendering engine is to highlight the requested page on the browser’s screen. Rendering engines can show XML and HTML images and documents. If you’re utilising additional plugins, the engines can also exhibit various documents like PDF.

Receives the requested document: The contents of the requested document is obtained by the rendering engine from HTML’s networking layer.

Construct the DOM tree: Parsed the HTML to the parsed tree and then set up the DOM tree, making use of it.

Construct the CSSOM: CSSOM stands for CSS Object Model. Post the construction of the DOM tree, it identifies a link tag in the head section, which references the external style.css CSS style sheet. So, it parsed the CSS file in CSSOM tree, something which the Browser can comprehend as the DOM tree.

Construct the Render tree: Utilise the HTML DOM tree coupled with the styling data of the CSSOM tree to set up a render tree. Render tree is the graphical depiction of the HTML, with the corresponding CSS. This tree enables painting the contents in their right order. Every node in the Render Tree is regarded as a renderer. The Render tree looks like this:

Layout: When the renderer is developed and incorporated into the tree, it does not have a size or position. Computing these values is defined as layout. We use the coordinates system to position the element, such as the position of the root renderer is 0,0. The layout continues recursively via a part of the entire renderer hierarchy, calculating geometric info for every renderer that needs it. Beginning the layout process implies allowing every node the exact coordinates where it should show up on the screen.

Painting of the Render Tree: The renderer tree is traversed in this stage and the renderer’s paint() method is hailed to exhibit the content on the screen. For good UX, the rendering engine will aim to exhibit the contents on the screen as soon as possible. It will not stand by until all the HTML is parsed to develop and layout the render tree.


## Describe the distinction between Class and Prototypal inheritance in Javascript?
From most other programming languages, Inheritance in JavaScript is different. JavaScript's object system is prototype-based, not class-based. Objects in JavaScript are just a set of value pairs and a name (key). Talking about inheritance, JavaScript just has one construct: objects. Each object has a private property that includes a link to another object named its prototype.

## Explain user-centered design?
An iterative design procedure, User-centred design lets the designers focus on the clients and their needs in every design process phase. The user-centered design calls for linking users in the design process via a variability of design and research techniques to make usable and highly accessible products. User-centered design demands that designers should utilize a combination of generative (such as brainstorming) and investigative (interviews and surveys) methods and instruments to create an understanding of user requirements.

## Tell me when and why should I make use of Webpack?
While creating a complicated front-end application with tons of non-code static possessions, for instance, CSS, fonts, images, etc, then, of course, you should make use of Webpack since it has a lot of amazing benefits.

If you have a small application that doesn't have a lot of static resources and you only have to create one file of JavaScript to help the customers, then Webpack should be more overhead than needed.

## Mention three ways to decrease page load time?
There are numerous things accountable for lowering page load time. Let us look at the three best ways to reduce its loading time:

Image Optimization: It is always advised to scale your videos and pictures before uploading them to a page.
Browser Cache: The utilization of cache will boost speed for pages that you have visited already.
Optimize and compress content: Compressing the content of a website decreases the load time of a page to a great extent.
StyleSheet Reference on Top: Setting stylesheet reference to the header of a doc allows your page to load quickly.

## How does the server hanger the page in which content is present in several languages?
When an HTTP request is sent to the server by the user, the user browser also sends a chunk of additional information regarding the language preference as the Accept-Language header. Then the server reads the HTTP request with the Accept-Language header and sends the document version back along with the right language and declares the language attribute Lang in the HTML tag.

## How does the server hanger the page in which content is present in several languages?
When an HTTP request is sent to the server by the user, the user browser also sends a chunk of additional information regarding the language preference as the Accept-Language header. Then the server reads the HTTP request with the Accept-Language header and sends the document version back along with the right language and declares the language attribute Lang in the HTML tag.
```html
<ul>
<li data-car-type="GTC"> Ferrari </li>
<li data-car-type="X5"> BMW </li>
</ul>
```

## Mention the benefits of CoffeeScript over JavaScript?
Write less do more − For a huge code in JavaScript, we require comparatively a very less number of lines of CoffeeScript.

Easily understandable − The shorthand form of JavaScript is CoffeeScript, its syntax is quite simple as compared to JavaScript. Making use of CoffeeScript, we can document clean, clear, and easily discernible codes.

Reliable − CoffeeScript is a secure and reliable programming language to create dynamic programs.

Readable and maintainable − CoffeeScript offers aliases for most of the operators, making the code readable. Also maintaining the programs 
written in CoffeeScript is effortless.

Class-based inheritance − JavaScript does not have classes, in place of them, it offers powerful but complicated prototypes. Unlike JavaScript, in CoffeeScript, we can make classes and inherit them. Additionally, it also provides instant and static properties along with mixins. It utilizes JavaScript's native prototype to construct classes.

No var keyword − There is no requirement to utilize the var keyword to form a variable in CoffeeScript, hence we can evade accidental or undesirable scope deceleration.

Avoids problematic symbols − There is no requirement to utilize the problematic parenthesis and semicolons in CoffeeScript. In place of curly braces, we can utilize whitespaces to distinguish the block codes such as functions, loops, etc.

Extensive library support − In CoffeeScript, we can utilize the JavaScript libraries and vice versa. Thus, we have access to a myriad set of libraries while operating with CoffeeScript

## Why is CoffeeScript hated?
it's kind of annoying to write one language and debug a different one. Coffeescript doesn't really add much to javascript, so all you are doing is taking your code, then jumbling it up a bit. Then forcing yourself to context switch whenever you debug it.

## What is Progressive Rendering?
Progressive rendering is a process that is utilized generally to boost the web page's rendering content process. Now the rendering process is utilized in modern web development to enhance the mobile data uses of the user, async HTML fragments, prioritizing visible content, and lazy loading of images.

##  In an image tag, what is the benefit of the srcset attribute?
srcset is utilized when we wish to generate several resolutions of the exact image on several devices. This improves the UI. The browser will display low resolution on low-end devices, and high resolution of an image on high-end devices.

Example:

<img srcset="picture_low.jpg 480w,
             picture_high.jpg 800w"
     sizes="(max-width: 600px) 480px,
            800px"
     src="picture_high.jpg"
     alt="Elva dressed as a fairy">

## Define the Anonymous function in JS?
Generally, the function name is defined when we define the function itself, in normal user-defined functions, but in the case of an anonymous function, the function name is not defined. Here we make use of an assignment operator and variable to store the function as an object, then utilizing that variable, we will be capable to invoke the function itself.
```js
const add = function(a,b) { console.log(a+b); }
add(2,3);
```

## What do you know about the CSS image sprites and why it is utilized?
CSS image sprites assist to render numerous images in a single line image. In a nutshell, the CSS sprites merge numerous photos into a single large image. If a web page comprises different images, then it would raise its loading time as for every image the browser has to send a distinct HTTP request, but with the help of sprites, we have a single image to request.

## Drawbacks of the CSS image sprites:
If images become larger than 10 mb then it can delay the overload page load.

## Suggest some ways on how to fix the browser-specific styling issue?
- We can make a distinctive stylesheet for various browsers making use of server-side rendering.
- Another method is utilizing a library such as Bootstrap, which already has the code to manage the browser-specific styling issue.
- Reset or Normalize CSS can also be utilized. Multiple 3rd party plugins equip libraries for browser styling issues.

## Mention the pitfalls for using a CSS Preprocessor like Sass, Less, Stylus, etc?
- An extra tool for the preprocessor is required.
- Preprocessor files can not be performed directly on the browser.
- Slow re-compilation of the preprocessor.
- For the preprocessor, you ought to know extra tools, which improve the learning curve of CSS.

## Why do we utilize the “use strict”; statement?
The ‘use strict’ statement sets a few restrictions in the script. Typically, it is utilized to facilitate the strict mode of the script, making sure there could be no loose coupling like undeclared variables.

## Name the major HTTP requests
**GET**	It is sent when we wish to recover data from the server. GET request is the most typically used HTTP request.

**HEAD**	The HEAD is a reaction that is the same as the GET request but doesn’t possess a message-body in the response. The HEAD request method is beneficial in retrieving meta-data that is documented as per the headers, without transferring the entire content. The method is commonly utilised when testing hypertext links for recent change, accessibility, and validity.

**TRACE**	TRACE requests are implemented to invoke a remote, application loop-back test along the path to the target resource. The TRACE method lets users to witness whatever message is being received at the other end of the request chain so that they can utilise the data for testing or diagnostic functions.

**POST**	This request is utilized to transmit data from the user to the server. By submitting web forms, these requests can be made. The POST request is generally utilized to build data in the database.
For instance, when we build a new account on any webpage, we make use of the POST request.

**PUT**	It is identical to POST, but it is utilized to revise the existing data on the server. For instance, when we wish to revamp our complete account on a web page, we utilize the PUT request.

**PATCH**	It is identical to PUT and is utilized when we wish to revise a certain field of our data. For instance, when we just wish to update our name or any additional information about our account, we can make use of the PATCH request.

## A TARGET value that is utilized when a webpage is locked in a frame, is called?
_top

## Which function of the Number object would show output in exponential format?
toExponential()

## Which String object functions return the capitalized string while respecting the current locale?
toLocaleUpperCase()

