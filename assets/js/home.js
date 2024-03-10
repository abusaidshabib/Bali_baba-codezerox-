
document.addEventListener("DOMContentLoaded", function(){
    fetch("https://hexabazaar-abusaidshabib.vercel.app/products")
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById("products-container");
        productContainer.innerHTML = "";

        data?.forEach(product => {
            console.log(product._id)
            let productElement = document.createElement('div');
            productElement.classList.add("shadow-2xl","rounded-2xl","p-5", "max-w-[384px]");

            productElement.innerHTML = `
            <div class="h-96">
                <img class="h-full w-full object-cover rounded-xl" src=${product.images[0]} alt="imran vai er fider" srcset="">
            </div>
            <p class="pt-2">${product.price}</p>
            <p>title: ${product.title}</p>
            <button class="buy-now-btn bg-primary text-white px-2 rounded" data-product-id="${product._id}">Buy Now</a>
            `;
            productContainer.appendChild(productElement);
        });

        const buyNowButtons = document.querySelectorAll('.buy-now-btn')
        buyNowButtons.forEach(button => {
            button.addEventListener('click', function(){
                const productId = this.getAttribute('data-product-id')
                window.location.href = `singleProduct.html?id=${productId}`
            })
        })
    })
    .catch(error => {
        console.log(error)
    })
})