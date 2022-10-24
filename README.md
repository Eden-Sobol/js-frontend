# js-frontend
Some utilities to make JavaScript frontent easier (if you're out of your mind enought to try this anyway)


Its cool because you can install this on a website temporarily even if its not yours, like google, and use it normally


HOW TO USE:


 
 jsf.cr() (create) takes three arguments.
 The first argument is type. You can set this to something like "p" or "div" or even "p id='myId'". It decides the type of element.
 The second is content. That decides that goes between <> and </>. So like the "text" in <>text</>
 The third is id. Just input the id of the element you can create.
 
 jsf.re() (remove) is a lot simpler. It takes 1 argument. Just the id of the element. So if you have a < p  id="removeMe" > < / p > and you run remove("removeMe") it will be removed.
 
 jsf.ed() (edit) takes three args. The first is id (so same as jsf.re()).
 The second is newContent, and its the thing to edit to. The third is editType, and it HAS to be "inner" or "outer". "inner" changes the things inside the text, like the "text" in < p > text < / p > and outer would change the < p >.
 You should specify a new id in newContent, because if not it's stuck like that.
 
 jsf.rc() (rectangle) takes 4 args. Arg 1 is width, 2 is height, self explanatory. Arg 3 is color. arg 4 is id.
 
 jsf.tr (triangle) takes 5 args. Args 1 is width, 2 is height, 3 is color, 4 is id again. But 5 decides what rotation the triangle is on. You can pick "bottom", "top", "left" or "right" that decides where the bottom side of the triangle faces.
 
 jsf.ci() (circle) is the exact same as jsf.rc(), but round
 
 FOR ALL FUNCTIONS THAT CREATE A NEW ELEMENT (cr, re, tr): its the args + two other args (left and top), and those set where the element is.
 
 Examples for all:
 
 create:
 jsf.cr("p", "hi", "myId") --> < p  id="myId" >hi< / p >
 <br>
   
 remove:
 jsf.re("myId")
 <br>
   
 edit:
 jsf.ed("myId", "hello", "outer") --> < p  id="myId" >hello< / p>
 <br>  
 
 jsf.ed("myId", "div id="newId"", "inner") --> < div  id="newId" >< / div > (you need to edit inner content manually)
 
 jsf.rc(100, 100, "red", "myId", 10, 30)
 <br>

jsf.tr("red", 100, 100, "myId", "bottom", 10, 30)
<br>


ALSO IMPORTANT!

To acually use the commands on YOUR website you need to put them in a setTimout. To do that, do setTimeout(function() {code here}, 1)
