function validaForm(){
    let validaCod = document.forms['cadastrar']['codigo'].value;
    let validaData = document.forms['cadastrar']['data'].value;
    let validaTitulo = document.forms['cadastrar']['titulo'].value;
    let validaDiretor = document.forms['cadastrar']['diretor'].value;
    let validaAtor = document.forms['cadastrar']['ator'].value;
    let validaNota = document.forms['cadastrar']['nota'].value;
    let ValidaRadio = document.forms['cadastrar']['rad'].value;


    if(validaCod == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaData == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaTitulo == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaDiretor == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaNota == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(validaAtor == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
    if(ValidaRadio == ""){
        alert("O campo deve ser preenchido!");
        return false;
    }
}

function insere(){
    let  Cod = document.forms['cadastrar']['codigo'].value;
    let  Data = document.forms['cadastrar']['data'].value;
    let  Titulo = document.forms['cadastrar']['titulo'].value;
    let  Diretor = document.forms['cadastrar']['diretor'].value;
    let  Ator = document.forms['cadastrar']['ator'].value;
    let  Nota = document.forms['cadastrar']['nota'].value;
    let  Rad = document.forms['cadastrar']['rad'].value;

    let inserir = window.document.getElementById("inserirTabela");
    inserir.innerHTML = `<th scope="row">${Cod}</td>`;
    inserir.innerHTML += `<td>${Titulo}</td>`;
    inserir.innerHTML += `<td>${Diretor}</td>`;
    inserir.innerHTML += `<td>${Data}</td>`;
    inserir.innerHTML += `<td>${Rad}</td>`;
    inserir.innerHTML += `<td>${Ator}</td>`;
    inserir.innerHTML += `<td>${Nota}</td>`;
} 