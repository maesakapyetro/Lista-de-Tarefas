const listaTarefa = document.getElementById("listaTarefa");
const input = document.getElementById("input");

function adicionarTarefa() {
    const tarefa = input.value.trim();
    if (tarefa !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
<span>${tarefa} </span>
<button class= "editarBotao" onClick = "editarTarefa(this)">Editar</button>
<button class = "deletarBotao" onClick = "deletarTarefa(this)">Remover</button>
`;

        listaTarefa.appendChild(li);
        input.value = "";
    }
}

function editarTarefa(button) {
    const li = button.parentElement;
    const span = li.querySelector("span");
    const novaTarefa = prompt("Editar tarefa:", span.textContent);
    if (novaTarefa !== null && novaTarefa.trim() !== "") {
        span.textContent = novaTarefa.trim();
    }
}

function deletarTarefa(button) {
    const li = button.parentElement;
    listaTarefa.removeChild(li);
}