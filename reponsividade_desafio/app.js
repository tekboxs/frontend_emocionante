// Filtros — marca o botão clicado como ativo
const botoes = document.querySelectorAll('.filtro-btn');

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
  });
});

const btns = document.querySelectorAll(`.btn-add`);
btns.forEach((btn,indice) => {
  btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#046b1a';
    btn.textContent = 'Adicionado';
    carrinho.itens.push(itens[indice]);
    carrinho.valorTotal+= itens[indice].preco;
      valorTotal.textContent = `R$ ${carrinho.valorTotal.toFixed(2)}`;
      itensCarrinho.textContent = `${carrinho.itens.length} itens no carrinho`;

    // Lógica para adicionar item ao carrinho
  });
});
const carrinho = {

  valorTotal: 0,
  itens: [],
  
  

};


const itens = [{ nome: 'Fettuccine', preco: 58.0 },
{ nome: 'Pizza Margherita', preco: 49.0 },
{ nome: 'Salada', preco: 34.0 },
{ nome: 'Tiramisu', preco: 28.0 },
{ nome: 'Vinho', preco: 120.0 },
{nome: 'Ossobuco', preco: 89.0},];

const valorTotal= document.querySelector('.pedido-bar-total')
const itensCarrinho = document.querySelector('.pedido-bar-itens')




