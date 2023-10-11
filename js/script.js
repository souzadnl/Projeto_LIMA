// Lista de produtos

const produtos = [
    {
        codigoProduto: 1,
        nomeProduto: "Óculos",
        preco: 12.99,
        imagemProduto: "imagens/senai.jpg",
        descricaoProduto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium quos, commodi illum, architecto tempora sapiente nam optio quaerat perspiciatis corporis quisquam neque numquam alias assumenda, qui enim incidunt rerum!"
    }, 
    {
        codigoProduto: 2,
        nomeProduto: "Botas",
        preco: 32.99,
        imagemProduto: "https://www.google.com/aclk?sa=l&ai=DChcSEwjm2_WJje6BAxXuDK0GHTngA5EYABADGgJwdg&ase=2&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdodPuokzJhH0H4soiig3T8aUXrq7lMtgeLZDQ0nuS1AQHp0tIE0qa0aAvnUEALw_wcB&sig=AOD64_0yDrYs_-icMFZQy3u-bF24FXeP0w&ctype=5&nis=6&adurl&ved=2ahUKEwjcneWJje6BAxUOspUCHTrLCdMQvhd6BAgBEHQ",
        descricaoProduto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium quos, commodi illum, architecto tempora sapiente nam optio quaerat perspiciatis corporis quisquam neque numquam alias assumenda, qui enim incidunt rerum!"
    },
    {
        codigoProduto: 3,
        nomeProduto: "Luva",
        preco: 10.99,
        imagemProduto: "https://www.google.com/aclk?sa=l&ai=DChcSEwjm2_WJje6BAxXuDK0GHTngA5EYABADGgJwdg&ase=2&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdodPuokzJhH0H4soiig3T8aUXrq7lMtgeLZDQ0nuS1AQHp0tIE0qa0aAvnUEALw_wcB&sig=AOD64_0yDrYs_-icMFZQy3u-bF24FXeP0w&ctype=5&nis=6&adurl&ved=2ahUKEwjcneWJje6BAxUOspUCHTrLCdMQvhd6BAgBEHQ",
        descricaoProduto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium quos, commodi illum, architecto tempora sapiente nam optio quaerat perspiciatis corporis quisquam neque numquam alias assumenda, qui enim incidunt rerum!"
    },
    {
        codigoProduto: 4,
        nomeProduto: "Capacete",
        preco: 12.99,
        imagemProduto: "https://www.google.com/aclk?sa=l&ai=DChcSEwjm2_WJje6BAxXuDK0GHTngA5EYABADGgJwdg&ase=2&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdodPuokzJhH0H4soiig3T8aUXrq7lMtgeLZDQ0nuS1AQHp0tIE0qa0aAvnUEALw_wcB&sig=AOD64_0yDrYs_-icMFZQy3u-bF24FXeP0w&ctype=5&nis=6&adurl&ved=2ahUKEwjcneWJje6BAxUOspUCHTrLCdMQvhd6BAgBEHQ",
        descricaoProduto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium quos, commodi illum, architecto tempora sapiente nam optio quaerat perspiciatis corporis quisquam neque numquam alias assumenda, qui enim incidunt rerum!"
    }, 
    {
        codigoProduto: 5,
        nomeProduto: "Máscara de solda",
        preco: 32.99,
        imagemProduto: "https://www.google.com/aclk?sa=l&ai=DChcSEwjm2_WJje6BAxXuDK0GHTngA5EYABADGgJwdg&ase=2&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdodPuokzJhH0H4soiig3T8aUXrq7lMtgeLZDQ0nuS1AQHp0tIE0qa0aAvnUEALw_wcB&sig=AOD64_0yDrYs_-icMFZQy3u-bF24FXeP0w&ctype=5&nis=6&adurl&ved=2ahUKEwjcneWJje6BAxUOspUCHTrLCdMQvhd6BAgBEHQ",
        descricaoProduto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium quos, commodi illum, architecto tempora sapiente nam optio quaerat perspiciatis corporis quisquam neque numquam alias assumenda, qui enim incidunt rerum!"
    },
    {
        codigoProduto: 6,
        nomeProduto: "Gel de silicone",
        preco: 10.99,
        imagemProduto: "https://www.google.com/aclk?sa=l&ai=DChcSEwjm2_WJje6BAxXuDK0GHTngA5EYABADGgJwdg&ase=2&gclid=Cj0KCQjwj5mpBhDJARIsAOVjBdodPuokzJhH0H4soiig3T8aUXrq7lMtgeLZDQ0nuS1AQHp0tIE0qa0aAvnUEALw_wcB&sig=AOD64_0yDrYs_-icMFZQy3u-bF24FXeP0w&ctype=5&nis=6&adurl&ved=2ahUKEwjcneWJje6BAxUOspUCHTrLCdMQvhd6BAgBEHQ",
        descricaoProduto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium quos, commodi illum, architecto tempora sapiente nam optio quaerat perspiciatis corporis quisquam neque numquam alias assumenda, qui enim incidunt rerum!"
    }
]

console.log(produtos.nome)
console.log(produtos[4].preco)
console.log(produtos[4].nomeProduto)
// Página de produtos, configuração de de produtos

const divProdutos = document.querySelector("#divProdutos") 
console.log(divProdutos)

let product = `<div class="card-produto">
<img src="${produtos[0].imagemProduto}" alt="">
<h2 class="produto-titulo">Touca</h2>
<span class="preco">R$ 2.00</span>
<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-cart icones" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
</div>`

divProdutos.innerHTML = product

// Pegar titulo

const title = document.querySelector("#title")
console.log(title)

// Alterar o titulo de acordo com a página clicada

// Pegar os cards

const texto = document.querySelector("#texto-principal")
console.log(texto)

const divPapelaria = document.querySelector("#sectionCategorias")
console.log(divPapelaria)
