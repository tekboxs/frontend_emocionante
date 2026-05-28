// Filtros — marca o botão clicado como ativo
const botoes = document.querySelectorAll('.filtro-btn');

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
  });
});
