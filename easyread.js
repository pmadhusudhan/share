/*var s = document.createElement("script");
s.src = "https://code.jquery.com/jquery-3.7.1.min.js";
document.getElementsByTagName("body")[0].appendChild(s);

$(document).ready(function(){
 
alert("jquery ready");
})
*/
s = document.createElement("script");
s.src = "https://pmadhusudhan.github.io/interview/Readability.js";
document.getElementsByTagName("body")[0].appendChild(s);
window.setTimeout(function(){var documentClone = document.cloneNode(true); 
var article = new Readability(documentClone).parse();
var d = document.createElement("div");
d.innerHTML = article.content;d.setAttribute("style","background:white;padding:10px;border:2px orange solid;position:fixed;top:0px;right:0px;width:50%;height:800px;overflow:auto;z-index:999999;");
document.getElementsByTagName("body")[0].appendChild(d);},1000);

