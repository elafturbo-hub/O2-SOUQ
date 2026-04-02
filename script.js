function callNow(number) {
  alert("اتصل الآن على: " + number);
}

// عرض المنتجات تلقائيًا مع ترقيم
window.onload = function() {
  const productsContainer = document.getElementById('products-list');
  productsContainer.innerHTML = ''; // مسح المحتوى القديم

  productsData.forEach((product, index) => {
    const div = document.createElement('div');
    div.className = 'product';

    div.innerHTML = `
      <h3>${index + 1}. ${product.name}</h3>
      <img src="${product.image}" alt="${product.name}">
      <p>السعر: ${product.price} جنيه</p>
      <button onclick="callNow('${product.phone}')">اطلب الآن</button>
    `;

    productsContainer.appendChild(div);
  });
};