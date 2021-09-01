var prefM = [
  "elevado ao",
  "vezes o",
  "mais o"
]

var prefF = [
  "elevado à",
  "vezes a",
  "mais a"
]

var prefI = [
  "elevado ao",
  "vezes",
  "mais"
]

var msgBox = document.querySelector('#mensagem')

function gerar() {
  var range = document.querySelector('#range')
  var valor = range.value
  var btn2 = document.querySelector('#btn2')

  msgBox.innerHTML = 'Te amo infinito&nbsp'
  var lista = []
  var msg = ''

  var i = 0
  while (i<valor/2) {
    var mensagens = [
      `${prefI[parseInt(Math.random()*prefI.length)]} infinito&nbsp`,
      `${prefM[parseInt(Math.random()*prefM.length)]} número de estrelas do universo&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} quantidade de grãos de areia da Terra&nbsp`,
      `${prefM[parseInt(Math.random()*prefM.length)]} número de gotas de água no oceano&nbsp`,
      `${prefM[parseInt(Math.random()*prefM.length)]} número de pingos de chuva num temporal&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} quantidade de moléculas que compõem o Sol&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} população de formigas de todas as espécies somadas&nbsp`,
      `${prefM[parseInt(Math.random()*prefM.length)]} tamanho em milímetros do monte Everest&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} todas as mensagens que ja trocamos no whatsapp&nbsp`,
      `${prefM[parseInt(Math.random()*prefM.length)]} peso de todas as baleias juntas&nbsp`,
      `${prefM[parseInt(Math.random()*prefM.length)]} número de palavras num dicionário&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} distância entre a Terra e o Sol&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} quantidade de árvores na Amazônia&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} distância da terra pra galáxia mais distante&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} velocidade da luz&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} velocidade do som&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} área da maior estrela do universo&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} área do território da Rússia&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} quantidade de células no nosso corpo&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} força de mil cavalos&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} idade do universo&nbsp`,
      `${prefF[parseInt(Math.random()*prefF.length)]} circunferência de Júpter&nbsp`,
      `${prefM[parseInt(Math.random()*prefM.length)]} raio da Via Láctea&nbsp`,
      `${prefM[parseInt(Math.random()*prefM.length)]} número de litros de cerveja que a gente já tomou&nbsp`,
    ]

    var random = parseInt(Math.random()*mensagens.length)

    if (!lista.includes(random)) {
      lista.push(random)

      msg += `${mensagens[random]}`

      i++
    } else msg += `${mensagens[0]}`
  }

  msgBox.innerHTML += msg
  btn2.style.backgroundColor = '#438ec0'
  console.log(`${lista} e ${valor}`)
}

function limpar() {
  msgBox.innerHTML = ''
  btn2.style.backgroundColor = '#666'
}
