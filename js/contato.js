// 1- O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header')

// console.log(header[0])

header[0].style.backgroundColor = '#2E948A'


// 2- No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html

let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)')
// console.log(linkCursos)

// 1- O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
let forms = document.querySelector('#formulario form')

// console.log(forms)

forms.setAttribute('action','sucesso.html')

// 2- Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.


let telefone = document.createElement('input')

telefone.setAttribute('type','tel')
telefone.setAttribute('placeholder','telefone')

let mensagem = forms.childNodes[6]
forms.insertBefore(telefone, mensagem)

// 3- O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;

console.log(mensagem)
mensagem.style.boxSizing = 'border-box'


// 4- O botão não está do tamanho adequado, precisa ter uma largura maior

let botao = document.querySelector('#enviar')
botao.style.width='100px'

// 5- Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.

