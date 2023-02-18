const product = [
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/metro-modern-close-coupled-toilet-with-soft-close-seat/mainimages/metcc_lrg.webp?origin=metcc_lrg.jpg&w=620",
    title: "Metro Rimless Close Coupled Modern Toilet + Soft Close Seat",
    style: "modern",
    price: 250,
    rating: "⭐️⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/venice-modern-toilet-with-soft-close-seat/mainimages/vccwc_lrg.webp?origin=vccwc_lrg.jpg&w=620",
    title: "Venice Modern Toilet + Soft Close Seat",
    style: "modern",
    price: 199,
    rating: "⭐️⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/alps-modern-short-projection-toilet-soft-closing-seat/mainimages/alp350_n_lrg.webp?origin=alp350_n_lrg.jpg&w=620",
    title: "Alps Modern Rimless Short Projection Toilet + Soft Closing Seat",
    style: "traditional",
    price: 189,
    rating: "⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/seattle-combined-two-in-one-wash-basin-toilet/mainimages/se2in1_nl.webp?origin=se2in1_nl.jpg&w=620",
    title: "Seattle Combined Two-In-One Wash Basin + Toilet",
    style: "modern",
    price: 269,
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/arezzo-btw-close-coupled-toilet-with-soft-close-seat/mainimages/arzbtwcc_lrg2.webp?origin=arzbtwcc_lrg2.jpg&w=620",
    title: "Arezzo BTW Close Coupled Toilet + Soft Close Seat",
    style: "traditional",
    price: 250,
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/arezzo-square-close-coupled-toilet-seat/mainimages/azsqcc_n_lrg.webp?origin=azsqcc_n_lrg.jpg&w=620",
    title: "Arezzo Square Close Coupled Toilet + Soft Close Seat",
    style: "traditional",
    price: 199,
    rating: "⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/arezzo-smart-toilet-with-bidet-wash-function-heated-seat-dryer/mainimages/azsmwc_l.webp?origin=azsmwc_l.jpg&w=620",
    title: "Arezzo Smart Toilet with Bidet Wash Function, Heated Seat + Dryer",
    style: "modern",
    price: 549,
    rating: "⭐️⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/sofia-modern-close-coupled-toilet-with-soft-close-seat/mainimages/sccwc_l2.webp?origin=sccwc_l2.jpg&w=620",
    title: "Sofia Modern Close Coupled Toilet + Soft Close Seat",
    style: "traditional",
    price: 139,
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/turin-square-rimless-close-coupled-toilet-soft-close-seat/mainimages/tsrwc_lrg.webp?origin=tsrwc_lrg.jpg&w=620",
    title: "Toreno Square Rimless Close Coupled Toilet + Soft Close Seat",
    style: "modern",
    price: 229,
    rating: "⭐️⭐️⭐️",
  },
  {
    query: "toilets",
    image:
      "https://images.victorianplumbing.co.uk/products/arezzo-square-close-coupled-rimless-toilet-with-soft-close-seat/mainimages/azssqcc_lrg.webp?origin=azssqcc_lrg.jpg&w=620",
    title: "Arezzo Square Close Coupled Rimless Toilet with Soft Close Seat",
    style: "traditional",
    price: 249,
    rating: "⭐️⭐️⭐️⭐️",
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
document.getElementById("search-input").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchData);
  });
  displayItem(filterData);
});

const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      var { image, title, price, rating } = item;
      return `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2 class='itemPrice'>£ ${price}.00</h2>
                    <p>${rating}</p>
                </div>        
            </div>`;
    })
    .join("");
};

const sortItems = (item) => {
  var { price } = item;

  //   let productList = document.getElementById(".itemPrice");
  let sortOrder = document.getElementById("select");

  sortOrder.addEventListener("change", () => {
    const allProducts = [product.price];
    allProducts.sort((a, b) => {
      const priceA = parseFloat(a.querySelector(".itemPrice"));
      const priceB = parseFloat(b.querySelector(".itemPrice"));

      if (sortOrder.value === "LowToHigh") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    allProducts.forEach((box) => {
      productList.appendChild(box);
    });
  });
};

displayItem(categories);
