const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    const color = document.getElementById("color").value;
    if(color == "") {
        alert("Please Select a Color");
        return;
    }
    document.body.style.backgroundColor = color;            
});