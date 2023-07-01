const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaSuspensa = document.querySelector('#listaSuspensa')

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    exibeOcultaLista();
    caixaTexto.focus();
});

function adicionaTarefa(textoDaTarefa) {
    const elementLI = document.createElement('li')
    const elementSPAN = document.createElement('span');
   
    elementSPAN.setAttribute('id','tarefa');
    elementSPAN.textContent = textoDaTarefa;
    elementLI.className = 'naoRealizada';
    elementLI.appendChild(elementSPAN);
    elementLI.appendChild(adicionaBtnRem()); 
    
    elementSPAN.addEventListener('click', function(){
        if(this.id === 'tarefa'){
            if (this.parentNode.className === 'naoRealizada'){
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            }
        }
});

    return elementLI;
}

function adicionaBtnRem(){
    const botaoRemover = document.createElement('button');
    botaoRemover.className ='remover';
    botaoRemover.textContent = '✖';

    botaoRemover.addEventListener('click', function(){
    listaTarefas.removeChild(this.parentNode);
    exibeOcultaLista();

    });

    return botaoRemover;
}

function exibeOcultaLista(){
    const elementSPAN = document.querySelector('#tarefa');
    if(elementSPAN === null) {
        listaSuspensa.setAttribute('hidden','hidden');
    } else {
        listaSuspensa.removeAttribute('hidden');    
    }
}

listaSuspensa.addEventListener('change',function(){
    if(listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
         for (tarefa of vetorTarefas) {
            tarefa.dispatchEvent(new Event('click'));
        }
    } else if (listaSuspensa.selectedIndex === 3) {
        const vetorBotoes = listaTarefas.querySelectorAll('.remover');
         for (botao of vetorBotoes) {
            botao.dispatchEvent(new Event('click'));
        }
    }

})

function howTo(){
    window.alert("How to use:\n\n1 - Enter the task and click the + button\n2 - Click on the task to mark it as done. Click again to deselect it.\n3 - To delete a single task, click the x button\n4- At the end of the list, there is a selection box with more options, including the option to delete everything.\n\nThank you for support!");
  } 