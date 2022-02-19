var button=document.getElementById("enter");
var input=document.getElementById("list");
var remove=document.getElementById("remove");
var ul=document.querySelector("ul");

button.addEventListener("click", function() {
	if(input.value.length > 0){
	var li=document.createElement("li");
	
    li.appendChild(document.createTextNode(input.value))
    var x= document.createElement("button");
    x.innerHTML ="&#9747";
    x.onclick=function(){
    	li.parentNode.removeChild(li);
    }
    li.appendChild(x);
        ul.appendChild(li) ;
input.value = "";

}
})
input.addEventListener("keypress", function(event) {
	
	if (input.value.length > 0 && event.keycode === 13){
 	var li=document.createElement("li");
   li.appendchild(document.createTextNode(input.value))
   ul.appendChild(li);
   
   input.value ="";
}
})











        
 		
    
 	
 