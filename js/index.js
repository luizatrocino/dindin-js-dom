// 1- O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header')

// console.log(header[0])

header[0].style.backgroundColor = '#2E948A'


// 2- No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html

let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)')
// console.log(linkCursos)

linkCursos.setAttribute('href', 'cursos.html')

// 1 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

let tituloDepo = document.querySelector('.titulo.depoimento h3')
// console.log(tituloDepo)

tituloDepo.innerHTML = "O que falam sobre nós"

// 2 - No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.

let banner = document.querySelector('#introducao')
// console.log(banner)

banner.style.justifyContent = 'center'


// 3 - Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

let blog = document.querySelectorAll('.titulo h3')
// console.log(blog[1])

blog[1].innerHTML="Mais conteúdo para você"

// 4 - Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

let maiuscula = document.querySelectorAll('.titulo')

// console.log(maiuscula)

maiuscula.forEach( titulo => {
    titulo.style.textTransform="uppercase"
})


// 5 - o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html

let botao = document.querySelector('#todos_posts')

// console.log(botao)

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

