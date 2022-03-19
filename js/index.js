// O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header')

// console.log(header[0])

header[0].style.backgroundColor = '#2E948A'


// No menu do header, está faltando o link do item Cursos que deve redirecionar
// para cursos.html

let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)')
// console.log(linkCursos)

linkCursos.setAttribute('href', 'cursos.html')

// Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

let tituloDepo = document.querySelector('.titulo.depoimento h3')
// console.log(tituloDepo)

tituloDepo.innerHTML = "O que falam sobre nós"

// No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.

let banner = document.querySelector('#introducao')
// console.log(banner)

banner.style.justifyContent = 'center'


// Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

let blog = document.querySelectorAll('.titulo h3')
// console.log(blog[1])

blog[1].innerHTML="Mais conteúdo para você"

// Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

let maiuscula = document.querySelectorAll('.titulo')

// console.log(maiuscula)

maiuscula.forEach( titulo => {
    titulo.style.textTransform="uppercase"
})


// o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html

let botao = document.querySelector('#todos_posts')

// console.log(botao)

botao.setAttribute('href','blog.html')


// Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:

let cursos = document.querySelector('#investimentos_poupando_independencia')

console.log(cursos)

let novoCurso = document.createElement('div')

cursos.appendChild(novoCurso)

novoCurso.setAttribute('id',"independencia")

console.log(cursos)

novoCurso.appendChild(document.createElement('img'))
novoCurso.appendChild(document.createElement('h2'))
novoCurso.appendChild(document.createElement('p'))
novoCurso.appendChild(document.createElement('a'))

document.querySelector('#investimentos_poupando_independencia #independencia img').setAttribute('src','imagens/independencia_financeira.png')

console.log(cursos)


