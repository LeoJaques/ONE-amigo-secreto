//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo(){
    let nomeAmigoInput = document.querySelector("#amigo")
    
    let nomeAmigo = nomeAmigoInput.value.trim().toLowerCase()
    
    if (!nomeAmigo) {
        alert("Digite o nome do amigo")
        nomeAmigoInput.focus()
        return
    }
    
    if (amigos.includes(nomeAmigo)) {
        alert("Amigo já adicionado")
        nomeAmigoInput.focus()
        return
    }

    adicionarItem("listaAmigos", nomeAmigo)
    nomeAmigoInput.value = ""
    nomeAmigoInput.focus()
    amigos.push(nomeAmigo.toLowerCase())
    return
}

function adicionarItem(listID, textContent) {
    const ul = document.getElementById(listID)
    const li = document.createElement("li")
    li.textContent = textContent
    ul.appendChild(li)
    return
  }


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }
    
    let amigoSorteado = amigos[parseInt(Math.random() * amigos.length)]

    resultado.innerHTML = ""
    adicionarItem('resultado', `O amigo secreto sorteado é: ${amigoSorteado}`)
    listaAmigos.innerHTML = ""
    amigos = []
}

let amigos = []
let listaAmigos = document.querySelector("#listaAmigos") // ul
let resultado = document.querySelector("#resultado")