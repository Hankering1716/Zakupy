

function Dodaj() {
    const button = document.createElement('button')
    button.innerText = '🧺'
    button.style.margin = "0 0 0 5%"; 
    var node = document.createElement("li");



    var textnode = document.createTextNode(input.value);

    if(input.value=="") {
        return "";
    }


    node.appendChild(textnode);
    node.appendChild(button);

    button.addEventListener('click', () => {
        licznik += 1;
    
        node.appendChild(textnode="");
        
    })
    
    document.getElementById("listaElementow").appendChild(node);


}

