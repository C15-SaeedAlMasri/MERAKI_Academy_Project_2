const foodRecipes = [
  {
    id: 1,
    title: "Greek Salad Classic",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0CV0V0xJhOXjDGgYYSb1Q0Wg2U3tBiKWiA&s",
    recipes: "A refreshing mix of ripe tomatoes, crisp cucumbers, thinly sliced onions, creamy feta cheese, and briny Kalamata olives, all tossed together with high-quality extra virgin olive oil and sprinkled with fragrant oregano for the authentic Greek flavor.",
    rate: 5,
    cat: "salad",
  },
  {
    id: 2,
    title: "Greek Salad with Bell Pepper",
    imageSrc:
      "https://cleananddelicious.com/wp-content/uploads/2022/05/Greek-Salad-5.jpg",
    recipes: "Classic Greek salad enhanced with the crunch and sweetness of fresh green bell peppers, combined with juicy tomatoes, crisp cucumbers, tangy feta cheese, olives, and drizzled generously with olive oil and a hint of oregano for extra zest.",
    rate: 4,
    cat: "salad",
  },
  {
    id: 3,
    title: "Greek Salad Variation",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZACUdO3i5QcrljVZYZzRbs5ZHOUBxjjliQ&s",
    recipes: "A unique twist on the traditional Greek salad, featuring fresh tomatoes, crunchy cucumbers, onions, olives, and feta, with added aromatic herbs like dill and parsley to elevate the flavors and give it a vibrant, fresh taste.",
    rate: 3,
    cat: "salad",
  },
  {
    id: 4,
    title: "Grilled Salmon Fillet",
    imageSrc:
      "https://www.wellplated.com/wp-content/uploads/2023/03/Easy-Grilled-Salmon.jpg",
    recipes: "Tender salmon fillet perfectly grilled with a blend of fresh herbs such as thyme and rosemary, lightly seasoned with salt and pepper, served alongside a fresh garden salad with lemon wedges for a light, healthy meal.",
    rate: 5,
    cat: "fish",
  },
  {
    id: 5,
    title: "Salmon with Lemon Herb",
    imageSrc:
      "https://sallysbakingaddiction.com/wp-content/uploads/2015/09/baked-lemon-salmon.jpg",
    recipes: "Oven-baked salmon filet topped with thin slices of fresh lemon and fragrant herbs like dill and parsley, drizzled with olive oil, delivering a zesty and aromatic flavor with every bite.",
    rate: 5,
    cat: "fish",
  },
  {
    id: 6,
    title: "Salmon and Veggies",
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg",
    recipes: "Succulent grilled salmon served on a bed of steamed zucchini and asparagus spears, lightly seasoned with garlic and herbs, creating a nutritious and flavorful dish perfect for any occasion.",
    rate: 4,
    cat: "fish",
  },
  {
    id: 7,
    title: "Chocolate Cake Classic",
    imageSrc:
      "https://www.theflavorbender.com/wp-content/uploads/2018/09/Classic-Chocolate-CakeFeatured2-500x500.jpg",
    recipes: "Decadent, moist chocolate cake layered with smooth, creamy chocolate frosting, made from rich cocoa powder and topped with chocolate shavings for an irresistible dessert experience.",
    rate: 5,
    cat: "dessert",
  },
  {
    id: 8,
    title: "Mini Chocolate Tart",
    imageSrc:
      "https://apronandwhisk.com/wp-content/uploads/2020/11/Chocolate-Peanut-Fudge-Tarts-10.jpg",
    recipes: "Delicate mini tarts filled with silky chocolate ganache, topped with fresh berries and a sprinkle of crushed nuts, combining a perfect balance of sweetness and texture.",
    rate: 4,
    cat: "dessert",
  },
  {
    id: 9,
    title: "Chocolate Brownie",
    imageSrc:
      "https://40204166.fs1.hubspotusercontent-na1.net/hubfs/40204166/Best%20Chocolate%20Brownie%20Recipe%20NZ%20Chelsea%20Sugar.jpg",
    recipes: "Rich and fudgy chocolate brownies with a gooey center and slightly crispy edges, made with high-quality dark chocolate and a hint of vanilla for deep flavor.",
    rate: 3,
    cat: "dessert",
  },
  {
    id: 10,
    title: "Avocado Toast",
    imageSrc:
      "https://www.allrecipes.com/thmb/H1mSgOExKFdto3PWLfC9aTgJmlI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11699506-avocado-toast-4x3-ea45b882fb0c454a9ca31647d4fd3c01.jpg",
    recipes: "Toasted artisan bread topped with creamy mashed avocado, seasoned with salt, pepper, and a squeeze of fresh lemon juice, garnished with chili flakes and microgreens for a nutritious and flavorful breakfast.",
    rate: 4,
    cat: "breakfast",
  },
  {
    id: 11,
    title: "Fruit Smoothie Bowl",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmVj-W8WCAWTM_zMAiGClw-uRejIrCgjLCA&s",
    recipes: "A vibrant smoothie bowl blended from fresh seasonal fruits, topped with crunchy granola, chia seeds, sliced bananas, and a drizzle of honey for a refreshing and energizing start to your day.",
    rate: 5,
    cat: "breakfast",
  },
  {
    id: 12,
    title: "Berry Pancakes",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf-6pKPUp-Vpw_RYBd0uFtpfLSn9kA-RVAg&s",
    recipes: "Fluffy, golden pancakes stacked high, generously topped with mixed fresh berries and a dusting of powdered sugar, served with maple syrup on the side for a sweet breakfast treat.",
    rate: 4,
    cat: "breakfast",
  },
  {
    id: 13,
    title: "Caesar Salad",
    imageSrc:
      "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
    recipes: "Crisp Romaine lettuce tossed with crunchy homemade croutons, freshly grated Parmesan cheese, and a creamy Caesar dressing made with anchovies, garlic, lemon juice, and Dijon mustard for an authentic flavor.",
    rate: 3,
    cat: "salad",
  },
  {
    id: 14,
    title: "Fruit Salad Mix",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1ozUx3VL_WqIDtIJ4_xUfS1mMfksVr2LoA&s",
    recipes: "A colorful medley of fresh tropical fruits such as pineapple, mango, papaya, and kiwi, mixed with a hint of fresh mint and a squeeze of lime juice for a sweet and tangy refreshment.",
    rate: 4,
    cat: "salad",
  },
  {
    id: 15,
    title: "Greek Salad with Olive Oil",
    imageSrc:
      "https://gimmedelicious.com/wp-content/uploads/2021/02/Images-11-9.jpg",
    recipes: "Traditional Horiatiki Greek salad with juicy tomatoes, cucumbers, red onions, olives, and large chunks of feta cheese, all generously drizzled with high-quality extra virgin olive oil for a fresh and rich taste.",
    rate: 5,
    cat: "salad",
  },
  {
    id: 16,
    title: "Grilled Steak",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOxRSq350Cw1sX-_lj8GjUZt48PISrmrtrA&s",
    recipes: "Juicy grilled steak cooked to perfection, seasoned with garlic butter and fresh herbs, served with a side of sautéed vegetables for a hearty and satisfying meal.",
    rate: 5,
    cat: "meat",
  },
  {
    id: 17,
    title: "BBQ Ribs",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoytcTyO058UFQMAqLBj0ifYBu3KxBfnTDyA&s",
    recipes: "Tender and flavorful BBQ pork ribs glazed in a smoky, tangy sauce made from a blend of spices, slow-cooked to achieve fall-off-the-bone tenderness.",
    rate: 4,
    cat: "meat",
  },
  {
    id: 18,
    title: "Beef Stir Fry",
    imageSrc:
      "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg",
    recipes: "Tender slices of beef quickly stir-fried with fresh vegetables such as bell peppers, broccoli, and snap peas in a savory soy-ginger sauce, delivering a perfect balance of sweet, salty, and umami flavors.",
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
const logOut =$(`<div><button id="logOutBtn">LogOut</button></div>`);
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
  <label id =""labelData">User Name</label>
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
   <button id="btnSignin">sign up</button></div>`)
   const regester =$(`<div><button id="btnRegester">sign up</button></div>`)
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
navBar.append(logOut)
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
  sliderBox.empty();
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


setInterval(funSlider, 5000);
navBar.css({
  "display": "none",
  "align-items": "center",
  "justify-content": "space-between",
  "padding": "10px 20px",
  "background-color":" #fffaf6",
  "border-bottom":"1px solid #ddd",
  "gap": "15px",
  "flex-wrap": "wrap",

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
  "gap": "50px",
  "margin-top":"10%"
});
inputlOgIn.css({
  "display": "flex",
  "flex-direction": "column",
  "gap": "10px",
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
  "gap": "50px",
  "margin-top":"10%"
 
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
$("#btnLogin").css({
 
  "background-color": "#ff5722",
  "border": "1px solid #ffffff",
  "border-radius": "20px",
  "padding": '8px 12px',
  'margin': '10px',
  'font-size': '14px',
  "width":"170px",
  "color":"white"

})

$("#btnSignin").css({
  
  "background-color": "#ffffff",
  "border": "1px solid #ff5722",
  "border-radius": "20px",
  "padding": '8px 12px',
  'margin': '10px',
  'font-size': '14px',
  "width":"170px"
});
$("#btnRegester").css({
  "background-color": "#ff5722",
  "border": "1px solid #ffffff",
  "border-radius": "20px",
  "padding": '8px 12px',
  'margin': '10px',
  'font-size': '14px',
  "width":"170px",
  "color":"white"
})
$("#logOutBtn").css({
  'background-color': '#fffaf6',
  'color': '#ff5722',
  'border': 'none',
  'padding': '10px 20px',
  'font-size': '16px',
  'cursor': 'pointer',
  'border-radius': '5px',
  'transition': '0.3s ease',
  'display': 'flex',
  'align-items': 'center',
  'gap': '8px'
})
$('#logOutBtn').hover(
  function () {
    $(this).css({
      'background-color': '#ff5722',
      'color': '#fffaf6',
      'border': '1px solid #fffaf6'
    });
  },
  function () {
    $(this).css({
      'background-color': '#fffaf6',
      'color': '#ff5722',
      'border': 'none'
    });
  }
);
const funShowItem = (foodRecipes) => {
  let imageNumber;
   itemsArea.empty();
  console.log(foodRecipes)
  foodRecipes.forEach((Element, ind) => {
    console.log(Element);
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
  addTofav.on('click',()=>{
    if(foodArrayFav.some((fav) => fav.id === Element.id)){
      foodArrayFav.splice(foodArrayFav.indexOf(Element.id), 1);
      localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
      funShowItem(foodRecipes)
    }
    else{
       console.log("fav click")
    foodArrayFav.push(Element);
    localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
    funShowItem(foodRecipes)
    }
   
  })
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
    item.on('click',()=>{
    
    })
  });
};


// const catFun =()=>{

// }
let arryCat = [];

const funCat=(arryCat)=>{
  itemsAreaCat.empty();
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
addTofavCat.on('click',()=>{
  console.log("fav click")
  if(foodArrayFav.some((fav) => fav.id === Element.id)){
    foodArrayFav.splice(foodArrayFav.indexOf( Element.id), 1);
    localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
    funShowItem(foodRecipes);
  funCat(arryCat);
  }
  else{
    foodArrayFav.push(Element);
  localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
  funShowItem(foodRecipes);
  funCat(arryCat);
  }
  
})
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
}
$(".dropdown-list").on("change",function(e){

  
  const catSelect = $(this).val();
  if (catSelect == "all") {
    arryCat = foodRecipes;
  } else {
    arryCat = foodRecipes.filter((vaule) => vaule.cat == catSelect);
  }
  funCat(arryCat);
});
$("#home").click(function () {
 
  funShowItem(foodRecipes);
  main.show();
  catItems.hide();
  FavItems.hide();
  chooseItem.hide();
  $(".dropdown-list").val($(".dropdown-list option:first").val());
});

let arrayFav = [];
// $(".fav-btn").on("click", function (e) {
//   chooseItem.hide();
//   let heart = $(this).find(".heart");
//   if (foodArrayFav.includes(foodRecipes[e.target.id])) {
//     heart.text("♡");
//     foodArrayFav.splice(foodArrayFav.indexOf(foodRecipes[e.target.id]), 1);
//     localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
//   } else {
//     heart.text("♥");
//     heart.css({
//       color: "red",
//     });
//     foodArrayFav.push(foodRecipes[e.target.id]);
//     localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
//   }
// });

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
    Remove from  
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
    width: 90%;
    padding: 0;
    margin: 0;
    list-style: none;
     color: #ff5722;
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
     "gap": "10px",
  })
})
$("#btnRegester").on('click',()=>{
  if($("#userNameIdSignin").val()!=""&&($("#passwordIdSignin").val()==$("#passwordIdSignin2").val())&&($("#passwordIdSignin").val()!="")){
      
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
  else if(($("#passwordIdSignin").val()!=$("#passwordIdSignin2").val())||($("#passwordIdSignin").val()=="")){
    $("#passwordIdSignin").css({
      "border":" 2px solid red",
      
     })
     
     $("#passwordIdSignin2").css({
       "border":" 2px solid red",
      
     })
     $("#invalid").show();
    $("#invalid2").show();
  }
});
$("#btnLogin").on('click',()=>{
  let isVaild =false;
 arryUsers.forEach((Element,ind)=>{
  console.log(Element.userName);
  console.log(Element.passwors)
  if((Element.userName== $("#userNameId").val())&&(Element.passwors==$("#passwordId").val())){
    logInPage.hide();
    main.show();
    isVaild=true;
    funShowItem(foodRecipes);
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
 
 if(!isVaild){
$("#userNameId").css({
  "border":" 2px solid red",
  
 })
 $("#passwordId").css({
   "border":" 2px solid red",
  
 })


  $("#invalidUser").show();
$("#invalidpass").show();
 }
 
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

$("#logOutBtn").on('click',()=>{
$("#passwordId").val("");
$("#userNameId").val("");
  logInPage.show();
    main.hide();
    navBar.hide();
})