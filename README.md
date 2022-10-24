# js-frontend
Some utilities to help make Javascripting a frontend website easier

Ill maybe add more sometime.

Its cool because you can install this on a website temporarily even if its not yours, like google, and use it normally


HOW TO USE:

 create(), remove(), and edit() each are their own functions from their own .js files. You have to install them seperately.
 
 create() takes three arguments.
 The first argument is type. You can set this to something like "p" or "div" or even "p id='myId'". It decides the type of element.
 The second is content. That decides that goes between <> and </>. So like the "text" in <>text</>
 The third is id. Just input the id of the element you can create.
 
 remove() is a lot simpler. It takes 1 argument. Just the id of the element. So if you have a < p  id="removeMe" > < / p > and you run remove("removeMe") it will be removed.
 
 edit() takes three args. The first is id (so same as remove()).
 The second is newContent, and its the thing to edit to. The third is editType, and it HAS to be "inner" or "outer". "inner" changes the things inside the text, like the "text" in < p > text < / p > and outer would change the < p >.
 You should specify a new id in newContent, because if not it's stuck like that.
 
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


ALSO

you can use document.getElementById('yourId').style.top = "something" to position it



ALSO IMPORTANT!

To acually use the commands on YOUR website you need to put them in a setTimout. I suggest 15ms. To do that, do setTimeout(function() {code here}, 15)


you could also embed through a script src in html
