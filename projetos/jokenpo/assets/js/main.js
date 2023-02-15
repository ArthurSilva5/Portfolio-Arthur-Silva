// Seleciona o botão de jogar
const btnJogar = document.querySelector('.escolhas-btn-jogar');
// Bloqueia o botão, pois ainda não houveram escolhas
btnJogar.disabled = true;

// Código para definir escolha do jogador
function exibirEscolhaJogador(elemento){
    // O parâmetro elemento irá retornar um dos valores: Pedra,Papel ou Tesoura, que será armazenado na div .jogador-escolha
    document.querySelector('.jogador-escolha').value = `${elemento}`; 

    // Na sequência, ele exibe uma imagem do elemento escolhido
    document.querySelector('.jogador-escolha').innerHTML = `<img src="./assets/img/${elemento}.png">`
}

// Seleciona as escolhas que o jogador pode fazer
const listaDeEscolhas = document.querySelectorAll('.escolhas-jogador');
for (let contador = 0; contador < listaDeEscolhas.length; contador++){
    const escolha = listaDeEscolhas[contador]; // A variável escolha irá armazenar cada elemento percorrido pelo loop for na lista de escolhas
                          
    escolha.addEventListener('click', () =>{    // Caso algum elemento seja clicado, ativará o botão
        const elementoEscolhido = escolha.classList[1]; // seleciona classe do elemento (ex: Pedra)
        exibirEscolhaJogador(elementoEscolhido); // chama a função com o parâmetro (ex: Pedra)
        btnJogar.disabled = false;  // Libera o botão de jogar
    })
}

// Código para definir escolha do computador
function exibirEscolhaComputador(elemento){
    document.querySelector('.computador-escolha').value = `${elemento}`; // Armazena o valor passado como parâmetro
    document.querySelector('.computador-escolha').innerHTML = `<img src="./assets/img/${elemento}.png">`; // Insere a imagem do elemento
}

btnJogar.addEventListener('click', () =>{ // Ao clicar no botão de jogar
    const escolhasComputador = ['Pedra', 'Papel', 'Tesoura'] // A lista é criada
    const elementoEscolhido = Math.floor(Math.random() * escolhasComputador.length); // Retorna-se um índice
    exibirEscolhaComputador(escolhasComputador[elementoEscolhido]); // Chama a função com um parâmetro que indicará um valor aleatório dentro da lista
    
    for (let contador = 0; contador < listaDeEscolhas.length; contador++){ // Acessa novamente as escolhas do jogador
        const escolha = listaDeEscolhas[contador]; // recebe o indice de cada escolha
        escolha.disabled = true; // bloqueia o botão, para quando clicar em jogar o jogador não possa mudar sua escolha
    }
    setTimeout(exibirResultado, 500); // Após 0.5 segundos, chama a função exibirResultado
})

// Placares são criados:
let pontosJogador = 1;
let pontosComputador = 1;
let empates = 1;
// Começam com o valor 1 pois quando acionados pela primeira vez esse será o valor. Caso fossem igual a 0, esse valor apareceria duas vezes antes de atualizar para 1.

function exibirResultado(){
    // Pega os valores armazenados como escolhas na funções anteriores.
    const escolhaJogador = document.querySelector('.jogador-escolha').value; 
    const escolhaComputador = document.querySelector('.computador-escolha').value;

    // Cria-se as condições para estabelecer o vencedor
    if(escolhaJogador == 'Pedra' && escolhaComputador == 'Tesoura' || escolhaJogador == 'Papel' && escolhaComputador == 'Pedra' || escolhaJogador == 'Tesoura' && escolhaComputador == 'Papel'){
        open_popup_jogador();
        document.querySelector('.placar-jogador').innerHTML = `Jogador: ${pontosJogador}`
        pontosJogador++;
    }
    else if(escolhaJogador == 'Pedra' && escolhaComputador == 'Pedra' || escolhaJogador == 'Papel' && escolhaComputador == 'Papel' || escolhaJogador == 'Tesoura' && escolhaComputador == 'Tesoura'){
        open_popup_empate();

        document.querySelector('.placar-empate').innerHTML = `Empates: ${empates}`
        empates++;
    }
    else{
        open_popup_computador();
        document.querySelector('.placar-computador').innerHTML = `Computador: ${pontosComputador}`
        pontosComputador++;
    }
}

// Armazena-se os poups para vitória do jogador, vitória do computador ou empate;
let popupJogador = document.querySelector('.popup-jogador');
let popupEmpate = document.querySelector('.popup-empate');
let popupComputador = document.querySelector('.popup-computador');

// São criada três funções para abrir o popup, porém só uma funcionará: a que se adequar ao resultado da partida
function open_popup_jogador(){
    popupJogador.classList.add("open-popup");    
}

function open_popup_computador(){
    popupComputador.classList.add("open-popup");    
}

function open_popup_empate(){
    popupEmpate.classList.add("open-popup");    
}

// Função para fechar o popup
function close_popup(){
    popupJogador.classList.remove("open-popup");  
    popupEmpate.classList.remove("open-popup"); 
    popupComputador.classList.remove("open-popup");
    
    for (let contador = 0; contador < listaDeEscolhas.length; contador++){ // Acessa novamente as escolhas do jogador
    const escolha = listaDeEscolhas[contador]; // recebe o indice de cada escolha
    escolha.disabled = false; // bloqueia o botão, para quando clicar em jogar o jogador não possa mudar sua escolha
    }

    document.querySelector('.jogador-escolha').innerHTML = ``
    document.querySelector('.computador-escolha').innerHTML = ``
    btnJogar.disabled = true;
}