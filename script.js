const products=[
 {id:1,name:"Strawberry Mini",size:"small",emoji:"🍓",price:35000},
 {id:2,name:"Bunny Pink",size:"small",emoji:"🐰",price:40000},
 {id:3,name:"Cloud Mini",size:"small",emoji:"☁️",price:30000},
 {id:4,name:"Pudding Bear",size:"small",emoji:"🍮",price:38000},
 {id:5,name:"Giant Strawberry",size:"large",emoji:"🍓",price:85000},
 {id:6,name:"Big Cute Bunny",size:"large",emoji:"🐰",price:95000},
 {id:7,name:"Cloud Hug",size:"large",emoji:"☁️",price:90000},
 {id:8,name:"Big Bear",size:"large",emoji:"🧸",price:100000}
];
let cart=[];
const money=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
function render(filter="all"){
 const grid=document.getElementById("productGrid");
 grid.innerHTML=products.filter(p=>filter==="all"||p.size===filter).map(p=>`
 <article class="product">
   <div class="product-img">${p.emoji}</div>
   <span class="tag">${p.size==="small"?"MINI":"BIG"}</span>
   <h3>${p.name}</h3><div class="price">${money(p.price)}</div>
   <button class="buy" onclick="addToCart(${p.id})">Tambah ke keranjang ♡</button>
 </article>`).join("");
}
function addToCart(id){
 const p=products.find(x=>x.id===id); const item=cart.find(x=>x.id===id);
 item?item.qty++:cart.push({...p,qty:1});
 document.getElementById("cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);
 const t=document.getElementById("toast");t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800);
}
function showCart(){
 document.getElementById("cartItems").innerHTML=cart.length?cart.map(x=>`<div class="cart-row"><span>${x.emoji} ${x.name} × ${x.qty}</span><b>${money(x.price*x.qty)}</b></div>`).join(""):"<p style='color:#866a75'>Keranjang masih kosong ♡</p>";
 document.getElementById("cartTotal").textContent=money(cart.reduce((a,x)=>a+x.price*x.qty,0));
 document.getElementById("cartModal").classList.add("open");
}
function closeCart(){document.getElementById("cartModal").classList.remove("open")}
function checkout(){
 if(!cart.length)return alert("Keranjang masih kosong ya ♡");
 const text=cart.map(x=>`${x.name} x${x.qty}`).join(", ");
 window.open("https://wa.me/?text="+encodeURIComponent("Halo Squishyy! Aku mau order: "+text)," _blank");
}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");render(btn.dataset.filter)
}));
render();
