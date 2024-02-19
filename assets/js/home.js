
document.addEventListener("DOMContentLoaded", function(){
    fetch('https://dummyjson.com/products/1')
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById("products-container");
        productContainer.innerHTML = "";

        data.forEach(product => {
            console.log(product._id)
            let productElement = document.createElement('div');
            productElement.classList.add("shadow-2xl","rounded-2xl","p-5", "max-w-[384px]");

            productElement.innerHTML = `
            <div class="h-96">
                <img class="h-full w-full object-cover rounded-xl" src=${product.images[0]} alt="imran vai er fider" srcset="">
            </div>
            <p class="pt-2">${product.price}</p>
            <p>title: ${product.title}</p>
            <a href="singleProduct.html" class="bg-primary text-white px-2 rounded">Buy Now</a>
            `;
            productContainer.appendChild(productElement);
        });
    })
    .catch(error => {
        console.log(error)
    })
})