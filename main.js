const foodRecipes = [
  {
    id: 1,
    title: "Greek Salad Classic",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0CV0V0xJhOXjDGgYYSb1Q0Wg2U3tBiKWiA&s",
    recipes: "Tomato, cucumber, onion, feta, olives with olive oil & oregano.",
    rate: 5,
    cat: "salad",
  },
  {
    id: 2,
    title: "Greek Salad with Bell Pepper",
    imageSrc:
      "https://cleananddelicious.com/wp-content/uploads/2022/05/Greek-Salad-5.jpg",
    recipes: "Classic Greek salad plus green bell pepper.",
    rate: 4,
    cat: "salad",
  },
  {
    id: 3,
    title: "Greek Salad Variation",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZACUdO3i5QcrljVZYZzRbs5ZHOUBxjjliQ&s",
    recipes: "Greek salad with extra herbs.",
    rate: 3,
    cat: "salad",
  },
  {
    id: 4,
    title: "Grilled Salmon Fillet",
    imageSrc:
      "https://www.wellplated.com/wp-content/uploads/2023/03/Easy-Grilled-Salmon.jpg",
    recipes: "Salmon fillet grilled with herbs, served with salad.",
    rate: 5,
    cat: "fish",
  },
  {
    id: 5,
    title: "Salmon with Lemon Herb",
    imageSrc:
      "https://sallysbakingaddiction.com/wp-content/uploads/2015/09/baked-lemon-salmon.jpg",
    recipes: "Grilled salmon topped with lemon slices & herbs.",
    rate: 5,
    cat: "fish",
  },
  {
    id: 6,
    title: "Salmon and Veggies",
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg",
    recipes: "Grilled salmon served on zucchini and asparagus.",
    rate: 4,
    cat: "fish",
  },
  {
    id: 7,
    title: "Chocolate Cake Classic",
    imageSrc:
      "https://www.theflavorbender.com/wp-content/uploads/2018/09/Classic-Chocolate-CakeFeatured2-500x500.jpg",
    recipes: "Rich moist chocolate cake with frosting.",
    rate: 5,
    cat: "dessert",
  },
  {
    id: 8,
    title: "Mini Chocolate Tart",
    imageSrc:
      "https://apronandwhisk.com/wp-content/uploads/2020/11/Chocolate-Peanut-Fudge-Tarts-10.jpg",
    recipes: "Chocolate tart with ganache and berries.",
    rate: 4,
    cat: "dessert",
  },
  {
    id: 9,
    title: "Chocolate Brownie",
    imageSrc:
      "https://40204166.fs1.hubspotusercontent-na1.net/hubfs/40204166/Best%20Chocolate%20Brownie%20Recipe%20NZ%20Chelsea%20Sugar.jpg",
    recipes: "Fudgy chocolate brownie squares.",
    rate: 3,
    cat: "dessert",
  },
  {
    id: 10,
    title: "Avocado Toast",
    imageSrc:
      "https://www.allrecipes.com/thmb/H1mSgOExKFdto3PWLfC9aTgJmlI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11699506-avocado-toast-4x3-ea45b882fb0c454a9ca31647d4fd3c01.jpg",
    recipes: "Toasted bread with mashed avocado & seasoning.",
    rate: 4,
    cat: "breakfast",
  },
  {
    id: 11,
    title: "Fruit Smoothie Bowl",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmVj-W8WCAWTM_zMAiGClw-uRejIrCgjLCA&s",
    recipes: "Smoothie bowl with fresh fruits & granola.",
    rate: 5,
    cat: "breakfast",
  },
  {
    id: 12,
    title: "Berry Pancakes",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf-6pKPUp-Vpw_RYBd0uFtpfLSn9kA-RVAg&s",
    recipes: "Fluffy pancakes topped with mixed berries.",
    rate: 4,
    cat: "breakfast",
  },
  {
    id: 13,
    title: "Caesar Salad",
    imageSrc:
      "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
    recipes: "Romaine, croutons, Parmesan & Caesar dressing.",
    rate: 3,
    cat: "salad",
  },
  {
    id: 14,
    title: "Fruit Salad Mix",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1ozUx3VL_WqIDtIJ4_xUfS1mMfksVr2LoA&s",
    recipes: "Mixed tropical fruits with mint and lime.",
    rate: 4,
    cat: "salad",
  },
  {
    id: 15,
    title: "Greek Salad with Olive Oil",
    imageSrc:
      "https://gimmedelicious.com/wp-content/uploads/2021/02/Images-11-9.jpg",
    recipes: "Horiatiki style with extra olive oil.",
    rate: 5,
    cat: "salad",
  },
  {
    id: 16,
    title: "Grilled Steak",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOxRSq350Cw1sX-_lj8GjUZt48PISrmrtrA&s",
    recipes: "Juicy grilled steak served with garlic butter and herbs.",
    rate: 5,
    cat: "meat",
  },
  {
    id: 17,
    title: "BBQ Ribs",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoytcTyO058UFQMAqLBj0ifYBu3KxBfnTDyA&s",
    recipes: "Tender BBQ pork ribs glazed in smoky sauce.",
    rate: 4,
    cat: "meat",
  },
  {
    id: 18,
    title: "Beef Stir Fry",
    imageSrc:
      "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg",
    recipes: "Slices of beef sautéed with vegetables in soy-ginger sauce.",
    rate: 5,
    cat: "meat",
  },
];

let foodArrayFav = JSON.parse(localStorage.getItem("foodArryFav")) || [];
let arryUsers=JSON.parse(localStorage.getItem("arrayUsers"))||[];
localStorage.setItem("foodArry", JSON.stringify(foodRecipes));
localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
localStorage.setItem("arrayUsers",JSON.stringify(arryUsers));
const data = window.localStorage.getItem("foodArry");
const foodArray = JSON.parse(data);

let randomImage;
let choose;

const categoryDropdown = $(`
  <div class="dropdown">
    <label id="category">Category :</label>
    <select class="dropdown-list">
      <option value="all">All</option>
      <option value="salad">Salad</option>
      <option value="fish">Fish</option>
      <option value="dessert">Dessert</option>
      <option value="breakfast">Breakfast</option>
      <option value="meat">Meat</option>
    </select>
  </div>
`);

const mainDiv = $(".container");
const navBar = $(`<div class="navClass">
   

   </div>`);

const main = $(`  <div class="main">
        
       </div>`);
const logInPage =$(`<div class ="logInPageClass"></div>`)
const signinPage =$(`<div class ="signinPageClass"></div>`)

const slider = $(`
        <div class="sliderClass">
       
        </div>
        `);

const separator = $(`<div class ="separator"><div>`);
const items = $(`<div class="items"></div>`);
const imageLogo = $(` <div id="imgLogo">
        <img src="https://fabrx.co/fullpreview/tastebite/assets/images/brands/brand4.svg"/>
    </div>`);
const menuBar = $(`
     <div id="menu">
         <p id="home">Home</p>
     
         <p id="favourite">favourite</p>
         <div>
         <span class="search-icon" >🔍</span>
         </div>
        </div>`);
const profilepic = $(`
    <div id="profilePic">
  <img src="https://randomuser.me/api/portraits/men/75.jpg"/>
    </div>`);
const itemsArea = $(`
      <div class ="itemBox"></div>
      `);
const sliderBox = $(` <div id="sliderBox">
        </div>`);
const catItems = $(`  <div class="catItemsClass">
        
          </div>`);
const FavItems = $(`  <div class="favItemsClass">
        
            </div>`);
const SearchDiv = $(`<div class ="searchClass">
             
              </div>`);
const chooseItem = $(`<div class="chooseClass">
        
            </div>`);
const itemsAreaCat = $(`
            <div class ="itemBoxCat"></div>
            `);
const itemsAreaFav = $(`
              <div class ="itemBoxfav"></div>
              `);
const itemsAreaChoose = $(`
                <div class ="sliderBox"></div>
                `);
const searchAreaDiv = $(`<div class ="searchBox">
                 <div id="myDiv">
      <span id="closeBtn">&times;</span></div>
 
                          <input id="search" type="text" oninput="funSearch()" name="search" placeholde
         r="Search..">
                
                </div>`);
const logoLogin = $(`<div class="logoLogin">  <img src="https://fabrx.co/fullpreview/tastebite/assets/images/brands/brand4.svg"/>
    </div>`);
const inputlOgIn= $(`<div class="inputLogin">
  <label>User Name</label>
   <input type="text" id="userNameId" placeholder="Enter your UserName"/>
   <label id="invalidUser" style="color: red;">inavild input</label>
   <label>Password</label>
    <input type="password" id ="passwordId"   placeholder="Enter your password"/>
    <label id="invalidpass" style="color: red;">inavild input</label>
  </div>`);
  const logoSignin = $(`<div class="logoLogin">  <img src="https://fabrx.co/fullpreview/tastebite/assets/images/brands/brand4.svg"/>
    </div>`);
const inputSignin= $(`<div class="inputLogin">
  <label>User Name</label>
   <input type="text" id="userNameIdSignin" placeholder="Enter your UserName"/>
   <label>Password</label>
    <input type="password" id ="passwordIdSignin"   placeholder="Enter your password"/>
    <label id="invalid" style="color: red;">inavild input</label>
     <label>current password</label>
    <input type="password" id ="passwordIdSignin2"   placeholder="Enter your password"/>
    <label id="invalid2" style="color: red;">inavild input</label>
  </div>`);

const buttons = $(`<div><button id="btnLogin">log in</button>
   <button id="btnSignin">sign in</button></div>`)
   const regester =$(`<div><button id="btnRegester">reg</button></div>`)
logInPage.append(logoLogin);
logInPage.append(inputlOgIn);

logInPage.append(buttons);
signinPage.append(logoSignin);
signinPage.append(inputSignin);
signinPage.append(regester);
signinPage.hide();
searchAreaDiv.hide()
mainDiv.append(navBar);
navBar.append(imageLogo);
navBar.append(menuBar);
menuBar.append(categoryDropdown);
navBar.append(profilepic);
mainDiv.append(main);
mainDiv.append(logInPage)
mainDiv.append(signinPage);
main.append(slider);
main.append(itemsArea);
slider.append(sliderBox);
mainDiv.append(catItems);
mainDiv.append(FavItems);
mainDiv.append(SearchDiv);
catItems.append(itemsAreaCat);
FavItems.append(itemsAreaFav);
SearchDiv.append(searchAreaDiv);
mainDiv.append(chooseItem);
chooseItem.append(itemsAreaChoose);
chooseItem.hide();
 
main.append(items);
$("#invalidUser").hide();
$("#invalidpass").hide();
$("#invalid").hide();
$("#invalid2").hide();
const funSlider = () => {
  const randomIndex = Math.floor(Math.random() * foodRecipes.length);
  const randomElement = foodRecipes[randomIndex];
  const ImageSlider = $(`<div class="imagDivSlider">
  <img id="sliderImg" src=${randomElement.imageSrc} alt="slider image" >
  </div>`);
  const descrptionSlider = $(
    `<div class="descDivSlider"><p id ="sliderDesc">${randomElement.recipes}</p></div>`
  );
  sliderBox.append(ImageSlider);
  sliderBox.append(descrptionSlider);
};
funSlider();

navBar.css({
  "display": "none",
  "flex-direction": "row",
  "justify-content": "space-between",

  "margin-top": "40px",
});
menuBar.css({
  "display": "flex",
  "flex-direction": "row",
  "align-items": "center",
  " justify-content": "space-between",
  gap: "20px",
});
logInPage.css({
  "display": "flex",
  "flex-direction": "column",
  "align-items": "center",
  " justify-content": "space-between",
  "gap": "20px",
  "margin-top":"10%"
});
inputlOgIn.css({
  "display": "flex",
  "flex-direction": "column",
})

buttons.css({
  "display": "flex",
  "flex-direction": "column",
})
signinPage.css({
  "display": "none",
  "flex-direction": "column",
  "align-items": "center",
  " justify-content": "space-between",
  "gap": "20px",
});
profilepic.css({
  "width": "20px",
  "height": "20px",
});

main.css({
  "display": "none",
  "flex-direction": "column",
  "justify-content": "space-between",
});
itemsArea.css({
  "display": "grid",
  "grid-template-columns": " 1fr 1fr 1fr 1fr",
  "grid-template-rows": "1fr 1fr 1fr 1fr",
  "object-fit": "cover",
  "overflow": "hidden",
  "justify-content": "space-between",
  
});
itemsAreaCat.css({
  "display": "grid",
  "grid-template-columns": " 1fr 1fr 1fr 1fr",
  "grid-template-rows": "1fr 1fr 1fr 1fr",
  "object-fit": "cover",
  overflow: "hidden",
  "justify-content": "space-between",
});
itemsAreaFav.css({
  "display": "grid",
  "grid-template-columns": " 1fr 1fr 1fr 1fr",
  "grid-template-rows": "1fr 1fr 1fr 1fr",
  "object-fit": "cover",
  overflow: "hidden",
  "justify-content": "space-between",
});
$("#closeBtn").css({
  "position": "absolute",
  "top": "5px",
  "right": "10px",
  "font-size": "20px",
  "font-weight": "bold",
  'cursor': "pointer",
  "color": "#888",
});

const funShowItem = () => {
  let imageNumber;
   
  foodRecipes.forEach((Element, ind) => {
    let isFav = foodArrayFav.some((fav) => fav.id === Element.id);
    let heartText = isFav ? "♥" : "♡";
    let heartColor = isFav ? "red" : "black";

    if (Element.rate == 1) {
      imageNumber = "";
    } else if (Element.rate == 2) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg";
    } else if (Element.rate == 3) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/three-star-rating-icon-isolated-260nw-1711884229.jpg";
    } else if (Element.rate == 4) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/four-stars-icon-vector-260nw-1316819477.jpg";
    } else {
      imageNumber =
        "https://www.shutterstock.com/image-vector/five-stars-rating-button-experience-260nw-1706225290.jpg";
    }
    const item = $(`<div class ="OneItem"></div>`);
    const contantImg = $(
      `<img id ="imgeCountant" src ="${Element.imageSrc}" />`
    );
    const contantRate = $(
      `<img id= "imgRateCountant" src ="${imageNumber}" />`
    );
    const contantName = $(`<h4 id= " nameCountant">${Element.title}</h4>`);
    const contantDivFav = $(`<div class="fav"></div>`);
    const addTofav = $(`<button  class="fav-btn" id="${ind}">
     Add to  <span   class="heart" id="${ind}">${heartText}</span>
  </button>`);
    addTofav.find(".heart").css("color", heartColor);
    const iconFav = $(
      `<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`
    );
    item.css({
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-between",
      "object-fit": "cover",
      overflow: "hidden",
      border: "2px solid red",
      "border-radius": "25px",
      margin: "20px",
    });
    itemsArea.append(item);
    item.append(contantImg);
    item.append(contantRate);
    item.append(contantName);
    item.append(contantDivFav);
    contantDivFav.append(addTofav);
    contantDivFav.append(iconFav);
  });
};
funShowItem();

// const catFun =()=>{

// }
let arryCat = [];
$(".dropdown-list").on("change", function (e) {
  itemsAreaCat.empty();
  const catSelect = $(this).val();
  if (catSelect == "all") {
    arryCat = foodRecipes;
  } else {
    arryCat = foodRecipes.filter((vaule) => vaule.cat == catSelect);
  }
  console.log(arryCat);
  arryCat.forEach((Element, ind) => {
    let isFav = foodArrayFav.some((fav) => fav.id === Element.id);
    let heartText = isFav ? "♥" : "♡";
    let heartColor = isFav ? "red" : "black";
    if (Element.rate == 1) {
      imageNumber = "";
    } else if (Element.rate == 2) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg";
    } else if (Element.rate == 3) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/three-star-rating-icon-isolated-260nw-1711884229.jpg";
    } else if (Element.rate == 4) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/four-stars-icon-vector-260nw-1316819477.jpg";
    } else {
      imageNumber =
        "https://www.shutterstock.com/image-vector/five-stars-rating-button-experience-260nw-1706225290.jpg";
    }
    const item = $(`<div class ="OneItem"></div>`);
    const contantImg = $(
      `<img id ="imgeCountant" src ="${Element.imageSrc}" />`
    );
    const contantRate = $(
      `<img id= "imgRateCountant" src ="${imageNumber}" />`
    );
    const contantName = $(`<h4 id= " nameCountant">${Element.title}</h4>`);
    const contantDivFav = $(`<div class="fav"></div>`);
    const addTofavCat = $(`<button  class="fav-btn" id="${ind}">
  Add to  <span   class="heart" id="${ind}">${heartText}</span>
</button>`);
    addTofavCat.find(".heart").css("color", heartColor);
    const iconFav = $(
      `<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`
    );
    item.css({
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-between",
      "object-fit": "cover",
      overflow: "hidden",
      border: "2px solid red",
      "border-radius": "25px",
      margin: "20px",
    });
    itemsAreaCat.append(item);
    item.append(contantImg);
    item.append(contantRate);
    item.append(contantName);
    item.append(contantDivFav);
    contantDivFav.append(addTofavCat);
    contantDivFav.append(iconFav);
  });
  main.hide();
  catItems.show();
  FavItems.hide();
  chooseItem.hide();
  $(".fav-btn").on("click", function (e) {
    let heart = $(this).find(".heart");
    if (foodArrayFav.includes(foodRecipes[e.target.id])) {
      heart.text("♡");
      foodArrayFav.splice(foodArrayFav.indexOf(foodRecipes[e.target.id]), 1);
      localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
    } else {
      heart.text("♥");
      heart.css({
        color: "red",
      });
      foodArrayFav.push(foodRecipes[e.target.id]);
      localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
    }
  });
});
$("#home").click(function () {
  main.show();
  catItems.hide();
  FavItems.hide();
  chooseItem.hide();
  $(".dropdown-list").val($(".dropdown-list option:first").val());
});

let arrayFav = [];
$(".fav-btn").on("click", function (e) {
  chooseItem.hide();
  let heart = $(this).find(".heart");
  if (foodArrayFav.includes(foodRecipes[e.target.id])) {
    heart.text("♡");
    foodArrayFav.splice(foodArrayFav.indexOf(foodRecipes[e.target.id]), 1);
    localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
  } else {
    heart.text("♥");
    heart.css({
      color: "red",
    });
    foodArrayFav.push(foodRecipes[e.target.id]);
    localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
  }
});

$("#favourite").click(function () {
  itemsAreaFav.empty();
  main.hide();
  catItems.hide();
  FavItems.show();
  SearchDiv.hide();
  let imageNumber;
  foodArrayFav.forEach((Element, ind) => {
    if (Element.rate == 1) {
      imageNumber = "";
    } else if (Element.rate == 2) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg";
    } else if (Element.rate == 3) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/three-star-rating-icon-isolated-260nw-1711884229.jpg";
    } else if (Element.rate == 4) {
      imageNumber =
        "https://www.shutterstock.com/image-vector/four-stars-icon-vector-260nw-1316819477.jpg";
    } else {
      imageNumber =
        "https://www.shutterstock.com/image-vector/five-stars-rating-button-experience-260nw-1706225290.jpg";
    }
    const item = $(`<div class ="OneItem"></div>`);
    const contantImg = $(
      `<img id ="imgeCountant" src ="${Element.imageSrc}" />`
    );
    const contantRate = $(
      `<img id= "imgRateCountant" src ="${imageNumber}" />`
    );
    const contantName = $(`<h4 id= " nameCountant">${Element.title}</h4>`);
    const contantDivFav = $(`<div class="fav"></div>`);
    const addTofav = $(`<button  class="fav-btn-remove" id="${ind}">
    Remove from  <span class="heart id="${ind}">♡</span>
  </button>`);
    const iconFav = $(
      `<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`
    );
    item.css({
      display: "flex",
      "flex-direction": "column",
      "justify-content": "space-between",
      "object-fit": "cover",
      overflow: "hidden",
      border: "2px solid red",
      "border-radius": "25px",
      margin: "20px",
    });
    itemsAreaFav.append(item);
    item.append(contantImg);
    item.append(contantRate);
    item.append(contantName);
    item.append(addTofav);
    //contantDivFav.append(addTofav);
    contantDivFav.append(iconFav);
  });
  $(".fav-btn-remove").on("click", function (e) {
    let iteam = foodRecipes[e.target.id];
    foodArrayFav.splice(foodArrayFav.indexOf(iteam), 1);
    localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
    $(this).closest(".OneItem").remove();
  });
});
let arraySearch = [];

const funSearch = () => {
  console.log($("#search").val())
  choose=""

  let input = $("#search").val();
  $("#results").remove();

  arraySearch = foodRecipes.filter((Element) =>
    Element.title.toLowerCase().includes(input)
  );
  const ulSearch = $(`<ul id="results" style="
    border: 1px solid #ccc;
    max-height: 150px;
    overflow-y: auto;
    position: absolute;
    background: #fff;
    width: 200px;
    padding: 0;
    margin: 0;
    list-style: none;
    z-index: 1000;"></ul>`);

  searchAreaDiv.append(ulSearch);
  arraySearch.forEach((Elemen, ind) => {
    const liSearch = $(`<li class="result-item" style="padding:5px;
          cursor:pointer;">${Elemen.title}</li>`);
    ulSearch.append(liSearch);
    liSearch.on("click", () => {
      choose=""
      itemsAreaChoose.empty()
      $("#search").val(arraySearch[ind].title);
      choose = arraySearch[ind];
      main.hide();
      chooseItem.show();
      FavItems.hide();
      catItems.hide();
      const ImageSChosse = $(`<div class="imagDivSlider">
        <img id="sliderImg" src=${choose.imageSrc} alt="slider image" >
        </div>`);
        const descrptionSChosse = $(
          `<div class="descDivSlider"><p id ="sliderDesc">${choose.recipes}</p></div>`
        );
        itemsAreaChoose.append(ImageSChosse);
        itemsAreaChoose.append(descrptionSChosse);
        SearchDiv.hide();
  $("#search").val("");
  $("#results").remove();
    });
  });
};

$(".search-icon").on("click", () => {
  SearchDiv.show();
  searchAreaDiv.show()
  SearchDiv.css({
    position: "fixed",
    top: "15%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80%",
    height: "30%",
    "z-index": "9999",
    background: "white",
    padding: "10px",
    "box-shadow": "0 2px 10px rgba(0,0,0,0.2)",
    display: "block",
  });
  main.css({
    "z-index": "0",
  });
  console.log("saeed");
});
$("#closeBtn").on("click", () => {
  arraySearch = [];
  SearchDiv.hide();
  $("#search").val("");
  $("#results").remove();
});
$("#btnSignin").on("click",()=>{
  signinPage.css({
    "display":"flex",
   "flex-direction": "column",
    " justify-content": "space-between",
    "gap": "20px",
    "margin-top":"10%"
  })
  logInPage.hide();
  inputSignin.css({
    "display":"flex",
    "flex-direction": "column",
  })
})
$("#btnRegester").on('click',()=>{
  if($("#userNameIdSignin").val()!=""&&($("#passwordIdSignin").val()==$("#passwordIdSignin2").val())){
      
     let user ={
      userName :$("#userNameIdSignin").val(),
      passwors:$("#passwordIdSignin").val()
     }
     arryUsers.push(user);
     
     localStorage.setItem("arrayUsers",JSON.stringify(arryUsers));
     console.log(arryUsers);
     logInPage.show();
     signinPage.hide();
     $("#passwordIdSignin").css({
      "border":" 2px solid black",
       
     })
     $("#passwordIdSignin2").css({
      "border":" 2px solid black",
      
    })
    $("#invalid").hide();
    $("#invalid2").hide();
  }
  else if($("#passwordIdSignin").val()!=$("#passwordIdSignin2").val()){
    $("#passwordIdSignin").css({
      "border":" 2px solid red",
      "border-radius": "25px"
     })
     
     $("#passwordIdSignin2").css({
       "border":" 2px solid red",
      "border-radius": "25px"
     })
     $("#invalid").show();
    $("#invalid2").show();
  }
});
$("#btnLogin").on('click',()=>{
  
 arryUsers.forEach((Element,ind)=>{
  console.log(Element.userName);
  console.log(Element.passwors)
  if((Element.userName== $("#userNameId").val())&&(Element.passwors==$("#passwordId").val())){
    logInPage.hide();
    main.show();
    
    navBar.css("display", "flex");
    $("#invalidUser").hide();
    $("#invalidpass").hide();
    $("#userNameId").css({
      "border":" 2px solid black",
       
     })
     $("#passwordId").css({
      "border":" 2px solid black",
      
    })
    return;
  }
  
 })
 $("#userNameId").css({
  "border":" 2px solid red",
  "border-radius": "25px"
 })
 $("#passwordId").css({
   "border":" 2px solid red",
  "border-radius": "25px"
 })
 $("#invalidUser").show();
$("#invalidpass").show();
})


//api
// $.ajax({
//   url:"https://api.themoviedb.org/3/discover/movie?api_key=dd3b043bc74baf3e8975bb88edc37fa3&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
//   success:(data)=>{
// console.log(data.results)
//   },
//   error:(err)=>{

//   }
// })

