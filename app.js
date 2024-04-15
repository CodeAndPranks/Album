function myFunc () {      
  alert("Free edition")
  document.body.style.backgroundColor="black"
  demo.innerHTML="EMPTY HARD DISK"
  demo.style.color="white"
  img.style.display="none"
      
    let timePerLetter = 40,
    text = document.createTextNode('');

    document.getElementById("text").appendChild(text);
    document.getElementById("text").style.color="white"
    document.body.style.backgroundColor="black"

function printOut(str) {
   var i = 0;
   (function main() {
    var char = str[i++];
    text.nodeValue += char;
if(i < str.length)
   setTimeout(main, timePerLetter);
 else
   setTimeout(function() {
     text.nodeValue = ""
     demo.innerHTML = ""
  }, 2000);  
  })();
}
printOut("...Your hardisk is empty please install a OS before you can use this unit\n All Coyrihgts reserved by \nFed.11/99-ADv/SACR.USA Dist.of.Alabm 047\n \nHP Internactional,Sacramento,California USA. ")
}
   setTimeout(function() {
 
 myFunc();
 }, 2000);