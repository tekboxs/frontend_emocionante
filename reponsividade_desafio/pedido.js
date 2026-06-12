const carrinho =
JSON.parse(localStorage.getItem('carrinho')) || {
  itens: [],
  valorTotal: 0
};

const listaPedidos =
document.getElementById('lista-pedidos');

const total =
document.getElementById('total');

carrinho.itens.forEach((item,index) => { //index diz a posição dele no array o indexof retornava o que estava na primeira posição

  listaPedidos.innerHTML += `
    <p>${item.nome} - R$ ${item.preco.toFixed(2)} - Quantidade:1</p>
    <button onclick="removerItem(${index})"> Remover </button>  

    `;
     // envia apenas a posição do item 
  

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

function removerItem(index){
    const item = carrinho.itens[index];
    carrinho.itens.splice(index, 1);  // o splice faz ser removido o objeto clicado
    carrinho.valorTotal -= item.preco;  // ajustar valor total
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.location.reload();  // recarregar pagina
    

}
document.addEventListener("DOMContentLoaded", function() {
    const lista = document.getElementById('lista');
    const btnAdicionar = document.getElementById('adicionar');
    let contador = 4;

    // Remover item clicado (Event Delegation)
    lista.addEventListener('click', function(event) {
        if (event.target.classList.contains('remover')) {
            const li = event.target.closest('li');
            if (li) {
                li.remove();
            }
        }
    });

    // Adicionar novo item
    btnAdicionar.addEventListener('click', function() {
        const li = document.createElement('li');
        li.innerHTML = `Item ${contador} <button class="remover">X</button>`;
        lista.appendChild(li);
        contador++;
    });
});


