function validaForm(){
    let validaNome       = document.forms['cadastrar']['nome'].value;
    let validaElemento   = document.forms['cadastrar']['elemento'].value;
    let validaAtaque     = document.forms['cadastrar']['ataque'].value;
    let validaDefesa     = document.forms['cadastrar']['defesa'].value;
    let validaVida       = document.forms['cadastrar']['vida'].value;
    let validaVelocidade = document.forms['cadastrar']['velocidade'].value;

    if(validaNome == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaElemento == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaAtaque == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaDefesa == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaVida == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaVelocidade == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }

}

function insere(){
    let Nome        = document.forms['cadastrar']['nome'].value;
    let Elemento    = document.forms['cadastrar']['elemento'].value;
    let Ataque      = document.forms['cadastrar']['ataque'].value;
    let Defesa      = document.forms['cadastrar']['defesa'].value;
    let Vida        = document.forms['cadastrar']['vida'].value;
    let Velocidade  = document.forms['cadastrar']['velocidade'].value;

    let inserir = window.document.getElementById("inserirTabela");
    inserir.innerHTML = `<td scope="row">${Nome}</td>`;
    inserir.innerHTML += `<td>${Elemento}</td>`;
    inserir.innerHTML += `<td>${Ataque}</td>`;
    inserir.innerHTML += `<td>${Defesa}</td>`;
    inserir.innerHTML += `<td>${Vida}</td>`;
    inserir.innerHTML += `<td>${Velocidade}</td>`;
}