function LeiaMais(){
    var pontos = document.getElementById("pontos");
    var maistexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maistexto.style.display = "none";
        btnLeiaMais.innerHTML = "ver mais";
    }else{
        pontos.style.display = "none";
        maistexto.style.display = "inline";
        btnLeiaMais.innerHTML = "ver menos";
    }
}

function NovoTopico(){
    var btnNovoTopico = document.getElementById("btnNovoTopico");
    var btnEnviar = document.getElementById("btnEnviar");
    var btnOutroTopico = document.getElementById("btnOutroTopico");
    var pagInicial = document.getElementById("adicionar-p1");
    var pagForm = document.getElementById("adicionar-p2");
    var pagEnviado = document.getElementById("adicionar-p3");

    if(pagInicial.style.display === "inline"){
        btnNovoTopico.style.display = "inline";
        btnEnviar.style.display = "none";
        pagForm.style.display = "none";
        pagEnviado.style.display = "none";
        btnOutroTopico.style.display = "none";
    }else{
        pagInicial.style.display = "none";
        pagForm.style.display = "inline";
        btnNovoTopico.style.display = "none";
        btnEnviar.style.display = "inline";
        pagEnviado.style.display = "none";
        btnOutroTopico.style.display = "none";
    }
}

function EnviarTopico(){
    var btnEnviar = document.getElementById("btnEnviar");
    var btnOutroTopico = document.getElementById("btnOutroTopico");
    var pagForm = document.getElementById("adicionar-p2");
    var pagEnviado = document.getElementById("adicionar-p3");

    if(pagEnviado.style.display === "none"){
        btnEnviar.style.display = "none";
        pagForm.style.display = "none";
        pagEnviado.style.display = "inline";
        btnOutroTopico.style.display = "inline";
    }else{
        pagForm.style.display = "inline";
        btnEnviar.style.display = "inline";
        pagEnviado.style.display = "none";
        btnOutroTopico.style.display = "none";
    }
}

function OutroTopico(){
    var btnEnviar = document.getElementById("btnEnviar");
    var btnOutroTopico = document.getElementById("btnOutroTopico");
    var pagForm = document.getElementById("adicionar-p2");
    var pagEnviado = document.getElementById("adicionar-p3");

    if(pagForm.style.display === "none"){
        btnEnviar.style.display = "inline";
        pagForm.style.display = "inline";
        pagEnviado.style.display = "none";
        btnOutroTopico.style.display = "none";
    }else{
        pagForm.style.display = "none";
        btnEnviar.style.display = "none";
        pagEnviado.style.display = "inline";
        btnOutroTopico.style.display = "inline";
    }
}

function ExpandirComentario(){
    var comentarioPre = document.getElementById("comentario-pre");
    var comentarioPos = document.getElementById("comentario-pos");

    comentarioPos.style.display = "inline";
    comentarioPre.style.display = "none";

}

function RetrairComentario(){
    var comentarioPre = document.getElementById("comentario-pre");
    var comentarioPos = document.getElementById("comentario-pos");

    comentarioPos.style.display = "none";
    comentarioPre.style.display = "inline";
}