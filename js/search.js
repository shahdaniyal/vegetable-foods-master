document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('#searchInput');
    const productItems = document.querySelectorAll('.product');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        filterProducts(query);
    });

    function filterProducts(query) {
        productItems.forEach((product) => {
            const productName = product.querySelector('h2').textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
});
