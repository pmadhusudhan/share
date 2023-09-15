s.src = "https://pmadhusudhan.github.io/interview/Readability.js";
document.getElementsByTagName("body")[0].appendChild(s);
window.setTimeout(function(){var documentClone = document.cloneNode(true); 
var article = new Readability(documentClone).parse();
var d = document.createElement("div");
d.innerHTML = "<button id='openAI'>AI</button>";
d.innerHTML += article.content;d.setAttribute("style","background:white;padding:20px;font-size:20px;border:2px orange solid;position:fixed;top:0px;right:0px;width:100%;height:800px;overflow:auto;z-index:999999;");
document.getElementsByTagName("body")[0].appendChild(d);},1000);

document.querySelector("#openAI").addEventListener("click", function() {
  open("https://bard.google.com");
});
