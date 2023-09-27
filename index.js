const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
let result_1 = 25024;
let result_2 = 14160;
let result_3 = 2137*5;

let numeroFormatado_1 = result_1.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
let numeroFormatado_2 = result_2.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
let numeroFormatado_3 = result_3.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
document.getElementById("resultado_1").innerHTML = numeroFormatado_1
document.getElementById("resultado_2").innerHTML = numeroFormatado_2
document.getElementById("resultado_3").innerHTML = numeroFormatado_3


menuBtn.addEventListener('click', () => {   
    sideMenu.style.display = 'block';

})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle("active")
    themeToggler.querySelector('span:nth-child(2)').classList.toggle("active")
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td> 
                        <td class="${order.shipping === 'Recusado' ? 'danger' : order.shipping === 'Pendente' ? 'warning' : 'sucess'}">${order.shipping}</td>                  
                        <td class="primary">Detalhes</td>    
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})