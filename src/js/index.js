const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () =>{

        tirarselecaobotao();
        tirarselecaopersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    })
})

function tirarselecaopersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function tirarselecaobotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
