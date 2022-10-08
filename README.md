# js-frontend
Some utilities to help make Javascripting a frontend website easier
Ill maybe add more sometime.

Its cool because you can install this on a website temporarily even if its not yours, like google, and use it normally


HOW TO USE:

 create(), remove(), and edit() each are their own functions from their own .js files. You have to install them seperately.
 
 create() takes four arguments. The first argument is the name of your name. You can pretty much ignore it, but the system cant handle a no-name arg for some reason.
 The second argument is type. You can set this to something like "p" or "div" or even "p id='myId'". It decides the type of element.
 The third is content. That decides that goes between <> and </>. So like the "text" in <>text</>
 The fourth is id. Just input the id of the element you can create.
 
 remove() is a lot simpler. It takes 1 argument. Just the id of the element. So if you have a <p id="removeMe"></p> and you run remove("removeMe") it will be removed.
 
 edit() takes three args. The first is id (so same as remove()).
 The second is newContent, and its the thing to edit to. The third is editType, and it HAS to be "inner" or "outer". "inner" changes the things inside the text, like the "text" in "<p>text</p>" and outer would change the <p>.
 You should specify a new id in newContent, because if not it's stuck like that.
 
 Examples for all:
 
 create("name", "p", "hi", "myId") --> < p  id="myId" >hi< / p >
 <br>
   
 remove("myId")
 <br>
   
 edit("myId", "hello", "outer") --> < p  id="myId" >hello< / p>
 <br>  
 
 edit("myId", "div id="newId"", "inner") --> < div  id="newId" >< / div > (you need to edit inner content manually)
