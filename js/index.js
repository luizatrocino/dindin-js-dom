// -------------------- GERAL --------------------

// 1- O header deve ter cor de fundo #2E948A.
let header = document.getElementsByTagName('header')
header[0].style.backgroundColor = '#2E948A'


// 2- No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)')
linkCursos.setAttribute('href', 'cursos.html')


// -------------------- HOME --------------------


let caminho = window.location.pathname;

if (caminho === '/dindin-js-dom/index.html'){

// 1 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
let tituloDepo = document.querySelector('.titulo.depoimento h3')
tituloDepo.innerHTML = "O que falam sobre nós"

// 2 - No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
let banner = document.querySelector('#introducao')
banner.style.justifyContent = 'center'


// 3 - Na etapa de blog, o título deveria ser "Mais conteúdo pra você".
let blog = document.querySelectorAll('.titulo h3')
blog[1].innerHTML="Mais conteúdo para você"

// 4 - Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.
let maiuscula = document.querySelectorAll('.titulo')
maiuscula.forEach( titulo => {
    titulo.style.textTransform="uppercase"
})


// 5 - o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
let botao = document.querySelector('#todos_posts')
botao.setAttribute('href','blog.html')


// 6- Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
let cursos = document.querySelector('#investimentos_poupando_independencia')

let novoCurso = document.createElement('div')
novoCurso.setAttribute('id',"independencia")

cursos.appendChild(novoCurso)

novoCurso.appendChild(document.createElement('img'))
let imagem = document.querySelector('#investimentos_poupando_independencia #independencia img')
imagem.setAttribute('src','imagens/independencia_financeira.png')
imagem.setAttribute('width','180px')
imagem.setAttribute('alt','Independência Financeira')

novoCurso.appendChild(document.createElement('h2'))
let h2 = document.querySelector('#investimentos_poupando_independencia #independencia h2')
h2.innerHTML="Independencia Financeira"

novoCurso.appendChild(document.createElement('p'))
let p = document.querySelector('#investimentos_poupando_independencia #independencia p')
p.innerHTML="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

novoCurso.appendChild(document.createElement('a'))
let a = document.querySelector('#investimentos_poupando_independencia #independencia a')
a.setAttribute('class','comecar_agora')
a.setAttribute('href','curso.html')
a.innerHTML="começar agora"
}




// -------------------- CONTATO --------------------

if (caminho === '/dindin-js-dom/contato.html'){


// 1- O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
let forms = document.querySelector('#formulario form')
forms.setAttribute('action','sucesso.html')

// 2- Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
let telefone = document.createElement('input')

telefone.setAttribute('type','tel')
telefone.setAttribute('placeholder','telefone')

let mensagem = forms.childNodes[6]
forms.insertBefore(telefone, mensagem)

// 3- O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;
mensagem.style.boxSizing = 'border-box'

// 4- O botão não está do tamanho adequado, precisa ter uma largura maior
let botao = document.querySelector('#enviar')
botao.style.width='100px'

// 5- Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.
let novaSecao = `<section class='titulo depoimento'>
<h3>Depoimentos</h3>
</section>

<section id='falam_sobre'>
<div class="depoimentos">
    <img src="imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam.”
        <br>
        <br>
        Wally, 25
    </p>
</div>

<div class="depoimentos">
    <img src="imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Jaden Smith, 23
    </p>
</div>

<div class="depoimentos">
    <img src="imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Whoopi Goldberg, 37
    </p>
</div>

<div class="depoimentos">
    <img src="imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Janes Joplin, 29
    </p>
</div>
</section>`

let main = document.querySelector('main')

main.innerHTML+=novaSecao

//configurando os depoimentos

let tituloDepo = document.querySelector('.titulo.depoimento h3')
tituloDepo.innerHTML = "O que falam sobre nós"
tituloDepo.style.color = '#009688'
tituloDepo.style.fontSize = '30px'
tituloDepo.style.marginLeft='50px'


}


