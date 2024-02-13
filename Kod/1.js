function Dodaj() {
    const button = document.createElement('button');
    
    button.innerText = '🧺';
    button.style.width = "auto";
    button.style.height = "auto";
    button.style.position = "grid";
    button.style.alignContent = "center";

    
    var node = document.createElement("li");

    const ptaszek = document.createElement("button");
    
    ptaszek.innerText = "✅";
    ptaszek.style.width = "auto";
    ptaszek.style.height = "auto";
    ptaszek.style.position = "grid";
    ptaszek.style.alignContent = "center"
    ptaszek.style.marginLeft = 'auto'

    

    input.value[0].toUpperCase()



    
    var inputFirstLetter = input.value.charAt(0).toUpperCase()
    var inputRestLetters = input.value.slice(1);
    var textnode = document.createTextNode(inputFirstLetter+inputRestLetters);

    var textnode1 = document.createElement("input");

    
    textnode1.checked = false;

    textnode1.type = "checkbox";
    if(input.value=="") {
        return "";
    }


    node.appendChild(textnode);
    node.appendChild(textnode1);
    node.appendChild(ptaszek);
    node.appendChild(button);


    button.addEventListener('click', () => {
        
        
        node.remove()


        node.appendChild(textnode="");
        
    })





    ptaszek.addEventListener("click", () => {

        if(textnode1.checked==false) {
            return textnode1.checked = true
        } else {
            return textnode1.checked = false;
        }
        
    });
    

 
    document.getElementById("listaElementow").appendChild(node);



}


function DeleteTxt() {
    document.getElementById("input").value  = "";
}

function Delete() {
    document.getElementById("listaElementow").removeChild(none);

    document.getElementById("listaElementow").re

}
