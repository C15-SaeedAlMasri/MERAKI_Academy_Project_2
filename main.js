
const foodRecipes = [
  {
    id: 1,
    title: "Greek Salad Classic",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0CV0V0xJhOXjDGgYYSb1Q0Wg2U3tBiKWiA&s",
    recipes: "Tomato, cucumber, onion, feta, olives with olive oil & oregano.",
    rate: 5,
    cat: "salad",
  },
  {
    id: 2,
    title: "Greek Salad with Bell Pepper",
    imageSrc: "https://cleananddelicious.com/wp-content/uploads/2022/05/Greek-Salad-5.jpg",
    recipes: "Classic Greek salad plus green bell pepper.",
    rate: 4,
    cat: "salad",
  },
  {
    id: 3,
    title: "Greek Salad Variation",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZACUdO3i5QcrljVZYZzRbs5ZHOUBxjjliQ&s",
    recipes: "Greek salad with extra herbs.",
    rate: 3,
    cat: "salad",
  },
  {
    id: 4,
    title: "Grilled Salmon Fillet",
    imageSrc: "https://www.wellplated.com/wp-content/uploads/2023/03/Easy-Grilled-Salmon.jpg",
    recipes: "Salmon fillet grilled with herbs, served with salad.",
    rate: 5,
    cat: "fish",
  },
  {
    id: 5,
    title: "Salmon with Lemon Herb",
    imageSrc: "https://sallysbakingaddiction.com/wp-content/uploads/2015/09/baked-lemon-salmon.jpg",
    recipes: "Grilled salmon topped with lemon slices & herbs.",
    rate: 5,
    cat: "fish",
  },
  {
    id: 6,
    title: "Salmon and Veggies",
    imageSrc: "https://images.squarespace-cdn.com/content/v1/58bf61ea3a041163d873b4e8/1587422396891-RMWS0B51RBVJ53YO2HCM/combisteam-queen-bakedsalmonwithvegetables.jpeg",
    recipes: "Grilled salmon served on zucchini and asparagus.",
    rate: 4,
    cat: "fish",
  },
  {
    id: 7,
    title: "Chocolate Cake Classic",
    imageSrc: "https://www.theflavorbender.com/wp-content/uploads/2018/09/Classic-Chocolate-CakeFeatured2-500x500.jpg",
    recipes: "Rich moist chocolate cake with frosting.",
    rate: 5,
    cat: "dessert",
  },
  {
    id: 8,
    title: "Mini Chocolate Tart",
    imageSrc: "https://apronandwhisk.com/wp-content/uploads/2020/11/Chocolate-Peanut-Fudge-Tarts-10.jpg",
    recipes: "Chocolate tart with ganache and berries.",
    rate: 4,
    cat: "dessert",
  },
  {
    id: 9,
    title: "Chocolate Brownie",
    imageSrc: "https://40204166.fs1.hubspotusercontent-na1.net/hubfs/40204166/Best%20Chocolate%20Brownie%20Recipe%20NZ%20Chelsea%20Sugar.jpg",
    recipes: "Fudgy chocolate brownie squares.",
    rate: 3,
    cat: "dessert",
  },
  {
    id: 10,
    title: "Avocado Toast",
    imageSrc: "https://www.allrecipes.com/thmb/H1mSgOExKFdto3PWLfC9aTgJmlI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11699506-avocado-toast-4x3-ea45b882fb0c454a9ca31647d4fd3c01.jpg",
    recipes: "Toasted bread with mashed avocado & seasoning.",
    rate: 4,
    cat: "breakfast",
  },
  {
    id: 11,
    title: "Fruit Smoothie Bowl",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOmVj-W8WCAWTM_zMAiGClw-uRejIrCgjLCA&s",
    recipes: "Smoothie bowl with fresh fruits & granola.",
    rate: 5,
    cat: "breakfast",
  },
  {
    id: 12,
    title: "Berry Pancakes",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf-6pKPUp-Vpw_RYBd0uFtpfLSn9kA-RVAg&s",
    recipes: "Fluffy pancakes topped with mixed berries.",
    rate: 4,
    cat: "breakfast",
  },
  {
    id: 13,
    title: "Caesar Salad",
    imageSrc: "https://www.allrecipes.com/thmb/mXZ0Tulwn3x9_YB_ZbkiTveDYFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
    recipes: "Romaine, croutons, Parmesan & Caesar dressing.",
    rate: 3,
    cat: "salad",
  },
  {
    id: 14,
    title: "Fruit Salad Mix",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1ozUx3VL_WqIDtIJ4_xUfS1mMfksVr2LoA&s",
    recipes: "Mixed tropical fruits with mint and lime.",
    rate: 4,
    cat: "salad",
  },
  {
    id: 15,
    title: "Greek Salad with Olive Oil",
    imageSrc: "https://gimmedelicious.com/wp-content/uploads/2021/02/Images-11-9.jpg",
    recipes: "Horiatiki style with extra olive oil.",
    rate: 5,
    cat: "salad",
  },
  {
    id: 16,
    title: "Grilled Steak",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOxRSq350Cw1sX-_lj8GjUZt48PISrmrtrA&s",
    recipes: "Juicy grilled steak served with garlic butter and herbs.",
    rate: 5,
    cat: "meat",
  },
  {
    id: 17,
    title: "BBQ Ribs",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoytcTyO058UFQMAqLBj0ifYBu3KxBfnTDyA&s",
    recipes: "Tender BBQ pork ribs glazed in smoky sauce.",
    rate: 4,
    cat: "meat",
  },
  {
    id: 18,
    title: "Beef Stir Fry",
    imageSrc: "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg",
    recipes: "Slices of beef sautéed with vegetables in soy-ginger sauce.",
    rate: 5,
    cat: "meat",
  }
];

let foodArrayFav = [];

localStorage.setItem("foodArry", JSON.stringify(foodRecipes));
localStorage.setItem("foodArryFav",JSON.stringify(foodArrayFav))

const data = window.localStorage.getItem("foodArry");  
const foodArray = JSON.parse(data);
foodArrayFav = JSON.parse(localStorage.getItem("foodArryFav"))||[];
let randomImage;


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
       
const slider = $(`
        <div class="sliderClass">
       
        </div>
        `);


const separator =$(`<div class ="separator"><div>`)
const items = $(`<div class="items"></div>`);
const imageLogo = $(` <div id="imgLogo">
        <img src="https://fabrx.co/fullpreview/tastebite/assets/images/brands/brand4.svg"/>
    </div>`);
const menuBar = $(`
     <div id="menu">
         <p id="home">Home</p>
     
         <p id="favourite">favourite</p>
         <input type="text" name="search" placeholder="Search..">
        </div>`);
const profilepic = $(`
    <div id="profilePic">
  <img src="https://randomuser.me/api/portraits/men/75.jpg"/>
    </div>`);
    const itemsArea =$(`
      <div class ="itemBox"></div>
      `)
const sliderBox =$(` <div id="sliderBox">
        </div>`);
        const catItems = $(`  <div class="catItemsClass">
        
          </div>`);
          const FavItems = $(`  <div class="favItemsClass">
        
            </div>`);
          const itemsAreaCat =$(`
            <div class ="itemBoxCat"></div>
            `)
            const itemsAreaFav =$(`
              <div class ="itemBoxfav"></div>
              `)
mainDiv.append(navBar);
navBar.append(imageLogo);
navBar.append(menuBar);
menuBar.append(categoryDropdown);
navBar.append(profilepic);
mainDiv.append(main);
main.append(slider);
main.append(itemsArea);
slider.append(sliderBox);
mainDiv.append(catItems);
mainDiv.append(FavItems);
catItems.append(itemsAreaCat);
FavItems.append(itemsAreaFav)



main.append(items);

const funSlider = ()=>{
  const randomIndex = Math.floor(Math.random() * foodRecipes.length);
  const randomElement = foodRecipes[randomIndex];
  const ImageSlider =$( `<div class="imagDivSlider">
  <img id="sliderImg" src=${randomElement.imageSrc} alt="slider image" >
  </div>`);
  const descrptionSlider = $(`<div class="descDivSlider"><p id ="sliderDesc">${randomElement.recipes}</p></div>`);
  sliderBox.append(ImageSlider);
  sliderBox.append(descrptionSlider);

}
funSlider();

navBar.css({
  display: "flex",
  "flex-direction": "row",
  "justify-content": "space-between",

  "margin-top": "40px",
});
menuBar.css({
  display: "flex",
  "flex-direction": "row",
  "align-items": "center",
  " justify-content": "space-between",
  gap: "20px",
});

profilepic.css({
  width: "20px",
  height: "20px",
});

main.css({
  display: "flex",
  "flex-direction": "column",
  "justify-content": "space-between",
});
itemsArea.css({
  "display": "grid",
  "grid-template-columns":" 1fr 1fr 1fr 1fr",
    "grid-template-rows":"1fr 1fr 1fr 1fr",
    "object-fit": "cover",
    "overflow": "hidden",
    "justify-content": "space-between",
    
})
itemsAreaCat.css({
  "display": "grid",
  "grid-template-columns":" 1fr 1fr 1fr 1fr",
    "grid-template-rows":"1fr 1fr 1fr 1fr",
    "object-fit": "cover",
    "overflow": "hidden",
    "justify-content": "space-between",
    
})
itemsAreaFav.css({
  "display": "grid",
  "grid-template-columns":" 1fr 1fr 1fr 1fr",
    "grid-template-rows":"1fr 1fr 1fr 1fr",
    "object-fit": "cover",
    "overflow": "hidden",
    "justify-content": "space-between",
    
})
const funShowItem =()=>{
  let imageNumber;
  foodRecipes.forEach((Element,ind)=>{
    if(Element.rate==1){
      imageNumber="";

    }
    else if(Element.rate==2){
    imageNumber="https://www.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg";

    }
    else if(Element.rate==3){
     imageNumber="https://www.shutterstock.com/image-vector/three-star-rating-icon-isolated-260nw-1711884229.jpg"
    }
    else if(Element.rate==4){
      imageNumber="https://www.shutterstock.com/image-vector/four-stars-icon-vector-260nw-1316819477.jpg"
    }
    else{
  imageNumber="https://www.shutterstock.com/image-vector/five-stars-rating-button-experience-260nw-1706225290.jpg"
    }
  const item =$(`<div class ="OneItem"></div>`)
  const contantImg =$(`<img id ="imgeCountant" src ="${Element.imageSrc}" />`);
  const contantRate =$(`<img id= "imgRateCountant" src ="${imageNumber}" />`);
  const contantName = $(`<h2 id= " nameCountant">${Element.title}</h2>`);
  const contantDivFav =$(`<div class="fav"></div>`);
  const addTofav =$(`<button  class="fav-btn" id="${ind}">
     Add to  <span class="heart" id="${ind}">♡</span>
  </button>`);
  const iconFav =$(`<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`)
  item.css({
    display: "flex",
  "flex-direction": "column",
  "justify-content": "space-between",
  "object-fit": "cover",
  "overflow": "hidden",
  "border": "2px solid red",
  "border-radius": "25px",
  "margin": "20px"
  })
  itemsArea.append(item);
  item.append(contantImg);
  item.append(contantRate);
  item.append(contantName);
  item.append(contantDivFav);
  contantDivFav.append(addTofav);
  contantDivFav.append(iconFav)
  })
 
}
funShowItem();
 

// const catFun =()=>{


// }
let arryCat=[];
 $(".dropdown-list").on('change',function(e){
  
  itemsAreaCat.empty();
  const catSelect = $(this).val();
  if(catSelect=="all"){
    
    arryCat=foodRecipes;
  }
  else{
  
   arryCat =foodRecipes.filter(vaule=>vaule.cat==catSelect);
  }
 console.log(arryCat);
 arryCat.forEach((Element,ind)=>{
  if(Element.rate==1){
    imageNumber="";

  }
  else if(Element.rate==2){
  imageNumber="https://www.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg";

  }
  else if(Element.rate==3){
   imageNumber="https://www.shutterstock.com/image-vector/three-star-rating-icon-isolated-260nw-1711884229.jpg"
  }
  else if(Element.rate==4){
    imageNumber="https://www.shutterstock.com/image-vector/four-stars-icon-vector-260nw-1316819477.jpg"
  }
  else{
imageNumber="https://www.shutterstock.com/image-vector/five-stars-rating-button-experience-260nw-1706225290.jpg"
  }
const item =$(`<div class ="OneItem"></div>`);
const contantImg =$(`<img id ="imgeCountant" src ="${Element.imageSrc}" />`);
const contantRate =$(`<img id= "imgRateCountant" src ="${imageNumber}" />`);
const contantName = $(`<h2 id= " nameCountant">${Element.title}</h2>`);
const contantDivFav =$(`<div class="fav"></div>`);
const addTofavCat =$(`<button  class="fav-btn" id="${ind}">
  Add   <span class="heart" id="${ind}">♡</span>
</button>`);
const iconFav =$(`<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`)
item.css({
  "display": "flex",
"flex-direction": "column",
"justify-content": "space-between",
"object-fit": "cover",
"overflow": "hidden",
"border": "2px solid red",
"border-radius": "25px",
"margin": "20px"
})
itemsAreaCat.append(item);
item.append(contantImg);
item.append(contantRate);
item.append(contantName);
item.append(contantDivFav);
contantDivFav.append(addTofavCat);
contantDivFav.append(iconFav)
});
main.hide();
catItems.show();
$('.fav-btn').on('click',function (e) {
  let heart = $(this).find('.heart');
  if(foodArrayFav.includes(foodRecipes[e.target.id])){
    heart.text('♡');
    foodArrayFav.splice ( (foodArrayFav.indexOf(foodRecipes[e.target.id])),1);
    localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
  }
  else{
    heart.text('♥');
    heart.css({
      "color":"red"
    })
    foodArrayFav.push(foodRecipes[e.target.id]);
  localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
  }
  

});

 })
 $('#home').click(function(){
  main.show();
  catItems.hide();
  FavItems.hide();
  $('.dropdown-list').val($('.dropdown-list option:first').val());
 })


let arrayFav=[];
 $('.fav-btn').on('click',function (e) {
   

  let heart = $(this).find('.heart');
  if(foodArrayFav.includes(foodRecipes[e.target.id])){
    heart.text('♡');
    foodArrayFav.splice ( (foodArrayFav.indexOf(foodRecipes[e.target.id])),1);
    localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
  }
  else{
    heart.text('♥');
    heart.css({
      "color":"red"
    })
    foodArrayFav.push(foodRecipes[e.target.id]);
  localStorage.setItem("foodArryFav", JSON.stringify(foodArrayFav));
  }
  
   
 

});

$('#favourite').click(function(){
  itemsAreaFav.empty();
  main.hide();
  FavItems.show();
  let imageNumber;
  foodArrayFav.forEach((Element,ind)=>{
    if(Element.rate==1){
      imageNumber="";

    }
    else if(Element.rate==2){
    imageNumber="https://www.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg";

    }
    else if(Element.rate==3){
     imageNumber="https://www.shutterstock.com/image-vector/three-star-rating-icon-isolated-260nw-1711884229.jpg"
    }
    else if(Element.rate==4){
      imageNumber="https://www.shutterstock.com/image-vector/four-stars-icon-vector-260nw-1316819477.jpg"
    }
    else{
  imageNumber="https://www.shutterstock.com/image-vector/five-stars-rating-button-experience-260nw-1706225290.jpg"
    }
  const item =$(`<div class ="OneItem"></div>`)
  const contantImg =$(`<img id ="imgeCountant" src ="${Element.imageSrc}" />`);
  const contantRate =$(`<img id= "imgRateCountant" src ="${imageNumber}" />`);
  const contantName = $(`<h2 id= " nameCountant">${Element.title}</h2>`);
  const contantDivFav =$(`<div class="fav"></div>`);
  const addTofav =$(`<button  class="fav-btn-remove" id="${ind}">
    Remove from  <span class="heart id="${ind}">♡</span>
  </button>`);
  const iconFav =$(`<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`)
  item.css({
    display: "flex",
  "flex-direction": "column",
  "justify-content": "space-between",
  "object-fit": "cover",
  "overflow": "hidden",
  "border": "2px solid red",
  "border-radius": "25px",
  "margin": "20px"
  })
  itemsAreaFav.append(item);
  item.append(contantImg);
  item.append(contantRate);
  item.append(contantName);
  item.append(addTofav);
  //contantDivFav.append(addTofav);
  contantDivFav.append(iconFav)
  

  })
  $('.fav-btn-remove').on('click',function (e) {
    //const id =  e.target.id;
     let iteam = foodRecipes[e.target.id];
     foodArrayFav.splice(foodArrayFav.indexOf(iteam),1);
     localStorage.setItem("foodArryFav",JSON.stringify(foodArrayFav));
    // $(`.heart#${id}`).text('♡');
     //saeed
      
  });
  
 })

