const name = document.querySelector('pepsi-mini')

function changeimg(imagem) {
  document.getElementById('pepsi-principal').src = imagem
}

function changebg(color) {
  const sec = document.querySelector('.sec')
  sec.style.background = color
}
