let carrinho = [];
let total = 0;

function addCarrinho(item, preco) {
    carrinho.push({ nome: item, preco: preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';
    total = 0;
    carrinho.forEach((produto, index) => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - R$ ${produto.preco}`;
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerDoCarrinho(index);
        li.appendChild(btnRemover);
        lista.appendChild(li);
        total += produto.preco;
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

function pedirAgora() {
    if (carrinho.length === 0) {
        alert('Adicione itens ao carrinho antes de pedir!');
        return;
    }
    let mensagem = 'Olá, gostaria de pedir:\n';
    carrinho.forEach(item => {
        mensagem += `${item.nome} - R$ ${item.preco}\n`;
    });
    mensagem += `Total: R$ ${total.toFixed(2)}`;
    const url = `https://wa.me/5511949285106?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
