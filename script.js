//  Identificar Elementos
const FORMULARIO = document.querySelector('#formulario')
const ENTRADA = document.querySelector('.entrada')
const TAREFAS = document.querySelector('.tarefas')

const CACHE = JSON.parse(localStorage.getItem('tarefas'))

if (CACHE) {
    CACHE.forEach((item) => {
        adicionar_tarefa(item)

    })
}

// Criar os Eventos
FORMULARIO.addEventListener('submit', (e) => {
    e.preventDefault()
    
    adicionar_tarefa();
})

// Criar as Funções dos Eventos

function adicionar_tarefa(texto)
{
    let tarefa_entrada = ENTRADA.value

    if(texto){
        tarefa_entrada = texto.text
    }

    if(tarefa_entrada)
    {
        const ELEMENTO_TAREFA = document.createElement('li')
        if (texto && texto.completed){
            ELEMENTO_TAREFA.classList.add('completada')

        }
        ELEMENTO_TAREFA.innerText = tarefa_entrada;
        TAREFAS.appendChild(ELEMENTO_TAREFA);

        ELEMENTO_TAREFA.addEventListener('click', () => {
            ELEMENTO_TAREFA.classList.toggle('completada')
            console.log('Sla guri')
            atualizar_cache()

        })

        ELEMENTO_TAREFA.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            ELEMENTO_TAREFA.remove()
            atualizar_cache()
        })

        ENTRADA.value = ''
        atualizar_cache()
    }
}

function atualizar_cache(){
    const ITENS_TAREFAS = document.querySelectorAll('li')
    const LISTA_TAREFAS = []
    ITENS_TAREFAS.forEach((elemento) =>{
        LISTA_TAREFAS.push({
            text: elemento.innerText,
            completed: elemento.classList.contains('completada'),

        })
    })
    localStorage.setItem('tarefas', JSON.stringify(LISTA_TAREFAS))

}