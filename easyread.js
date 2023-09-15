var aiscript = document.createElement('script');
aiscript.src = 'https://pmadhusudhan.github.io/interview/Readability.js';

// Append the script element to the head of the document.
document.head.appendChild(aiscript);

// Add an event listener to the script element to be notified when it has loaded.
aiscript.addEventListener('load', function() {
  // Alert the user that the readability.js file has loaded.
  var documentClone = document.cloneNode(true); 
  var article = new Readability(documentClone).parse();
  var d = document.createElement("div");
  d.innerHTML = "<button id='openAI' style='padding:5px;background:black;color:white'>AI</button>";
  d.setAttribute("id","aicontainer");
  d.innerHTML += article.content;
  d.setAttribute("style","background:white;padding:20px;font-size:20px;border:2px orange solid;position:fixed;top:0px;right:0px;width:100%;height:800px;overflow:auto;z-index:999999;");
  document.getElementsByTagName("body")[0].appendChild(d);

  document.getElementById("openAI").addEventListener("click", function() {
    copyToClipboard(article.textContent,"https://bard.google.com");
  });
  
});
function copyToClipboard(text,url) {
    try{
        var i = document.createElement("input");
        i.setAttribute("id","in");
        i.setAttribute("style","display:none");
        document.getElementsByTagName("body")[0].appendChild(i);
        
        
        copyText = document.getElementById("in");
        copyText.value = text;
        // Select the text field
        
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the text inside the text field
    
        
        navigator.clipboard.writeText(copyText.value)
            .then(() => {
        open(url);
        })
        .catch(err => {
        console.log('Failed to copy text: ', err);  
        });
    }catch(err){
    });
  }



