

function Dodaj() {
    const button = document.createElement('button');
    
    button.innerText = '🧺';
    button.style.width = "auto";
    button.style.height = "auto";
    button.style.position = "grid";
    button.style.alignContent = "center";


    
    const ptaszek = document.createElement("button");
    
    ptaszek.innerText = "✅";
    ptaszek.style.width = "auto";
    ptaszek.style.height = "auto";
    ptaszek.style.position = "grid";
    ptaszek.style.alignContent = "center"
    ptaszek.style.marginLeft = 'auto'



    var node = document.createElement("li");

    var textnode = document.createTextNode(input.value);

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

        textnode1.checked = true;

        node.appendChild(textnode="");



    });
    
    
    document.getElementById("listaElementow").appendChild(node);


}

