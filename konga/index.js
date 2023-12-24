let fetcher = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  localStorage.setItem("products", JSON.stringify(products));
};

fetcher();

let fetchedData = JSON.parse(localStorage.getItem("products"));
console.log(fetchedData);

let numbs = [4, 7, 9];
let nums = [23, 24, 25, 26, 27, 28, 29];
let wholeNum = [10, 12];

function randomCreator(num) {
  let random = Math.floor(Math.random() * (num.length - 1));
  return random;
}

let randomNum = Math.floor(Math.random() * (nums.length - 1));

let todaysDeals = fetchedData.slice(
  Math.floor(Math.random() * numbs[randomCreator(numbs)]),
  wholeNum[randomCreator(wholeNum)]
);
console.log(todaysDeals);

let dealsContent = document.getElementById("deals-content");

function displaySlide(name, arr, flex, num, type) {
  arr.forEach((deal, i) => {
    name.innerHTML += `<button id="${
      deal.id
    }" onclick="showProduct(event)" value='${
      deal.price
    }'  class="border-0 ${flex} rounded deal${num} d-flex  justify-content-around">
         
    <img width="100px" id="${deal.id}" value='${
      deal.price
    }' height="110px" style="border-radius:10px;" src='${
      deal.images[0]
    }' alt="">


 <p value='${deal.price}' id="${
      deal.id
    }"  class="${type}text d-flex align-items-start justify-content-start flex-column">
  <span class="mb-2 mt-3" >
${deal.title}
  </span>

  <s id="${deal.id}" value='${
      deal.price
    }' style="font-size:12px; font-weight:300;">N${(
      deal.price +
      deal.price * (deal.discountPercentage / 100)
    ).toFixed(2)} </s>
 
  <b id="${deal.id}" value='${
      deal.price
    }' class="d-flex mb-2 align-items-center justify-content-between w-100 "style="font-size:12px;> 
  <legend style="font-size:10px;">  N${deal.price}.00  </legend> 
     
 <small id="${deal.id}" value='${
      deal.price
    }' class="danger" style="font-size:8px; color:#ff706d;"> -${
      deal.discountPercentage
    }%</small>
  </b>

 

  <b id="${deal.id}" value='${
      deal.price
    }' style="font-size:11px; color:#32b27a;"> You saved N${(
      deal.price *
      (deal.discountPercentage / 100)
    ).toFixed(2)} </b>


 </p>

</button>`;
  });
}

displaySlide(dealsContent, todaysDeals, "flex-row", 1, "deals");

let sponsoredArr = fetchedData.slice(23, 29);
console.log(sponsoredArr);
let sponsoredContent = document.getElementById("sponsored-content");
displaySlide(sponsoredContent, sponsoredArr, "flex-column", 2, "sponsored");

let recommendedArr = fetchedData.slice(20, nums[randomNum]);
let recommendedContent = document.getElementById("recommended-content");
displaySlide(recommendedContent, recommendedArr, "flex-row", 3, "recommended");

document.addEventListener("DOMContentLoaded", function () {
  let navBar = document.getElementById("nav");
  let searchBar = document.getElementById("search-bar");
  let shoppingLine = document.getElementById("shopping-line");
  window.addEventListener("scroll", () => {
    let windowHeight = window.scrollY;

    if (windowHeight > 100) {
      navBar.style.display = "none";
      searchBar.style.transition = "1s";
      shoppingLine.style.transition = "1s";
      searchBar.style.top = "0px";
      shoppingLine.style.top = "60px";
    } else if (windowHeight < 100) {
      navBar.style.display = "flex";
      searchBar.style.top = "40px";
      shoppingLine.style.top = "100px";
    }
  });
});
