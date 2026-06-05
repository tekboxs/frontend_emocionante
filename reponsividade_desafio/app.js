// Filtros — marca o botão clicado como ativo
const botoes = document.querySelectorAll('.filtro-btn');

const _carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
const carrinho = _carrinhoSalvo || {
  // mostra os itens dentro do carrinho
  valorTotal: 0,
  itens: [],
  
};

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

       localStorage.setItem('carrinho', JSON.stringify(carrinho)
      //Json.Stringify transforma em texto no banco de dados, pois o localStorage só aceita texto. 
    );
    // Lógica para adicionar item ao carrinho
  });
});
// Recupera carrinho do localStorage se houver, senão cria um novo



const itens = [{ nome: 'Fettuccine', preco: 58.0 },
{ nome: 'Pizza Margherita', preco: 49.0 },
{ nome: 'Salada', preco: 34.0 },
{ nome: 'Tiramisu', preco: 28.0 },
{ nome: 'Vinho', preco: 120.0 },
{nome: 'Ossobuco', preco: 89.0},];

const valorTotal= document.querySelector('.pedido-bar-total')
const itensCarrinho = document.querySelector('.pedido-bar-itens')

  
  




