let fetchedData = JSON.parse(localStorage.getItem("products"));
console.log(fetchedData);

let allItems = document.getElementById('allItems')
 fetchedData.forEach((data,i) => {
allItems.innerHTML += `<button id="button${i}" value='${
  data.id
}' style="width:250px; height:400px; margin:auto; text-align:center;"  class="border-0 mb-2  flex-column align-items-center  rounded data${1} d-flex  justify-content-around">
     
<img width="85%" height="210px" style="border-radius:10px;" class="mt-2" src='${
  data.images[0]
}' alt="">


<p class="text d-flex align-items-center justify-content-start flex-column w-100">

<span class="mb-2 mt-3 w-100  "  >
${data.title}
</span>



<b class="d-flex mb-2 align-items-center justify-content-between w-75 "style="font-size:12px;> 

<legend style="font-size:10px;" class="ms-2 me-2">  N${data.price}.00  </legend> 

<s  class="ms-2 me-2" style="font-size:12px; font-weight:300;">N${
    (  data.price + data.price * (data.discountPercentage / 100)).toFixed(2)
    } </s>

<small class=" ms-2 me-2 danger" style="font-size:8px; color:#ff706d;"> -${
data.discountPercentage
}%</small>

</b>



<b onclick="addToCart(event)" onmouseenter="changeColor(event)"  style="font-size:14px;height:30px; width:95%; border:1px solid #f855a6; color:#f855a6;" class="d-flex align-items-center justify-content-center "> Add to cart </b>


</p>

</button>`
 })

 function goHome(){
    window.location.href = 'index.html'
  
  }

 

  function changeColor(event) {
    el = event.target
    el.style.backgroundColor = '#f855a6'
        el.style.color = 'white'

        el.addEventListener('mouseleave' , ()=>{
            el.style.backgroundColor = 'white'
            el.style.color = '#f855a6'
        })
  }