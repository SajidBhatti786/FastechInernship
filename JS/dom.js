const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    const color = document.getElementById("color").value;
    if(color == "") {
        alert("Please Select a Color");
        return;
    }
    document.body.style.backgroundColor = color;
    
});

function saveData(e){
    console.log(e);
    e.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const secondname = document.getElementById('secondname').value;
    const date = document.getElementById('date').value;
    if(firstname === '' || secondname==='' || date===''){
        alert('Please fill all fields');
        return;
    }
    alert(`Data saved!!\nFirstname: ${firstname} | Lastname: ${secondname} | date: ${date}`);
}