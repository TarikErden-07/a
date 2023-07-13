const inputDiv=document.querySelector(".inputDiv");
const input=document.getElementById("input");
const button=document.getElementById("button");
const contentDiv=document.querySelector(".contentDiv");

var calculate=0;
button.addEventListener("click",go);
input.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        go();
    }
})
function go(){   
    if(input.value!=""){
        calculate++;
        var parag = document.createElement('p');
        parag.innerText = calculate + ")" +input.value;
        contentDiv.appendChild(parag);
        input.value="";    
        var deleteButton=document.createElement("div");   
        deleteButton.classList.add("deleteButton");
        parag.appendChild(deleteButton);
        input.value="";
        deleteButton.innerText="Sil";

        deleteButton.addEventListener("click",function(){
            contentDiv.removeChild(parag);
        });

        var bitirButton = document.createElement("div");
        bitirButton.classList.add("bitirButton");
        parag.appendChild(bitirButton);
        bitirButton.innerText="Yaptım";

        bitirButton.addEventListener("click",function(){
            parag.classList.toggle("deneme");
        });
        
    }
    Yazıdeğiştir()


}


function Yazıdeğiştir(){
    var input=document.getElementById("input");
    input.placeholder="Başka ne yapmak istersiniz";
}