const carrinho =
JSON.parse(localStorage.getItem('carrinho')) || {
  itens: [],
  valorTotal: 0
};

const listaPedidos =
document.getElementById('lista-pedidos');

const total =
document.getElementById('total');

carrinho.itens.forEach(item => {

  listaPedidos.innerHTML += `
    <p>${item.nome} - R$ ${item.preco.toFixed(2)} - Quantidade:1</p>
    <button onclick="removerItem(${JSON.stringify(item).replace(/"/g, '&quot;')})"> Remover </button>
    

  `;
  
//mostra os produtos na tela criando um htm na div listaPedidos
});

total.textContent =
`Total: R$ ${carrinho.valorTotal.toFixed(2)}`;

const btnFinalizar =
document.getElementById('finalizarCompra');

btnFinalizar.addEventListener('click', () => {

  alert('Compra finalizada!');

  localStorage.removeItem('carrinho');

  window.location.href = 'desafio.html';

});

function removerItem(item){
    const index = carrinho.itens.map(i =>JSON.stringify(i)).indexOf(JSON.stringify(item));
    console.log(item===carrinho.itens[0]);
    console.log(index);
    console.log( JSON.stringify(item) === JSON.stringify(carrinho.itens[0]));




    if (index > -1) {
        carrinho.itens.splice(index, 1);
        carrinho.valorTotal -= item.preco;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        window.location.reload();

    
    }

}
