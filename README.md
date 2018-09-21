# havenlyProj
### Set up a webpack project to both serve a React site locally for development and build a bundle for production.

The development environment should include:

* Support for CSS Modules **_DONE_**

* Hot Module Reloading **_DONE_**

* Proxying of asset requests to a different URL (you do not need to implement a dev server to respond to proxied requests, if they 404 that will be good enough). **_NEED TO IMPLEMENT_**

Your production build config should include:

* Dead code elimination **_DONE_**

* Any necessary polyfills **_DONE_**

* Code minification **_DONE_**

* Source maps **_DONE?_**

* Feel free to copy and paste from any previous webpack configs you've done, but please do not use a pre-built template like create-react-app or react-slingshot.  **_I've never done this before so this is where the majority of my time was spent. I don't like putting things together or copy & pasting without understanding how they work._**


* Build the following page design to match the responsive.png mock-up as closely as you can. Use the React/webpack project set up in the last question. We don't have a mobile mock for this page, but be sure to build it mobile-first and make your own decisions about how to display the layout at that size.  **_DONE_**  

* The page shown on the mock is the max-width - if a user's screen is wider than 1150px, the page should be the size shown and centered in the browser. **_DONE_**

****

Take a look at the attached mockups, and assume you're being assigned to build them – but, for some reason, have been given very little information. These are screenshots of a feature that a Havenly designer uses to show a room design concept, and its products, to a user.

Answer the following questions:

### What are the most important questions you have about the mocks and how they should work?  
**_VERY IMPORTANT:_** 
* **_What is the main purpose of this page (something I always like to ask, sometimes this is not as obvious as you would think)._**      
* **_What is that on/off switch on the rt. side??_**  
* **_How should the page work/look on mobile?  Will mobile have the same functionality?_**   
* **_Is the main center image one static image or is it broken up into separate images (each item of furniture is a separate image?)_**    
* **_What do you want it to look like when any button is clicked, or when another message is sent/received?_**  
* **_After a furniture piece has been rated, or added to the cart, should there be some indication that it has been done (like the hover icon turns lighter or it turns into the smiley or frowny face)?_**  

**_SLIGHTLY LESS IMPORTANT/I MIGHT ALREADY KNOW IF I WORK THERE:_**  
 
* **_Is there a shopping cart somewhere that will indicate it will be added to the cart?_**   
* **_What does the data look like that I will be loading in?_**   
* **_Have you done any User Testing on this page, if so what where the results?_**  
* **_Will I need to inject any specific analytics tracking to this page's code?_**  
* **_What is the user doing before and after this page?_**  

### What seems like, potentially, the biggest unknown?  
**_What is that "on/off" switch in the "your living room concept" div on the right side?? What is the proposed functionality?_**

### What changes would you recommend making to make this interface work well on mobile?
**_I would recommend having each furniture item stack down the page (instead of just having a large image that can be zoomed in). Everything else is pretty straightforward and seems like it will resize/stack fairly easily. Any other recommendations would be from the app level (i.e. easy ways to acces your account, favorite items, etc)_**

****

### Write a function that takes two arrays full of objects and outputs a list of their changes, as seen below.

You can assume that the IDs of the objects will be persistent, but other values won't be. Don't assume that "name" and "quantity" are the only values to diff.

-- **_I HAVE NOT STARTED THIS_** --

I WILL PASTE THE REPO ADDRESS HERE WHEN COMPLETE


