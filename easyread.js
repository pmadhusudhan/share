const script = document.createElement('script');
script.src = 'https://pmadhusudhan.github.io/interview/Readability.js';

// Append the script element to the head of the document.
document.head.appendChild(script);

// Add an event listener to the script element to be notified when it has loaded.
script.addEventListener('load', function() {
  // Alert the user that the readability.js file has loaded.
  var documentClone = document.cloneNode(true); 
  var article = new Readability(documentClone).parse();
  var d = document.createElement("div");
  d.innerHTML = "<button id='openAI' style='padding:5px;background:black;color:white'>AI</button>";
  d.setAttribute("id","aicontainer");
  d.innerHTML += article.content;
  d.setAttribute("style","background:white;padding:20px;font-size:20px;border:2px orange solid;position:fixed;top:0px;right:0px;width:100%;height:800px;overflow:auto;z-index:999999;");
  document.getElementsByTagName("body")[0].appendChild(d);
});



document.getElementById("openAI").addEventListener("click", function() {
  
 // document.querySelector("#aicontainer").innerHTML =  article.content;
  open("https://bard.google.com");
});
