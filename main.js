const foodRecipes = [
  {
    id: 1,
    title: "about photo",
    imageSrc: "src/path",
    recipes: "all information about food recipes",
    rate: 9,
    cat: "salad",
  },
  {
    id: 2,
    title: "about photo",
    imageSrc: "src/path",
    recipes: "all information about food recipes",
    rate: 5,
    cat: "fish",
  },
  //  {},....
];

const mainDiv = $(".container");
const navBar = $(`<div class="navClass">
   

   </div>`);
const main = $(`  <div class="main">
        
       </div>`);
const slider = $(`
        <div class="slider">
        
  <br>
  <button id="prev">السابق</button>
  <button id="next">التالي</button>
        </div>
        `);
const ImageSlider = `<img id="sliderImg" src="" alt="slider image" >`;
const items = $(`<div class="items"></div>`);
const imageLogo = $(` <div id="imgLogo">
        <img src="https://fabrx.co/fullpreview/tastebite/assets/images/brands/brand4.svg"/>
    </div>`);
const menuBar = $(`
     <div id="menu">
         <p id="home">Home</p>
         <p id="category">Category</p>
         <p id="favourite">favourite</p>
         <input type="text" name="search" placeholder="Search..">
        </div>`);
const profilepic = $(`
    <div id="profilePic">
  <img src="https://randomuser.me/api/portraits/men/75.jpg"/>
    </div>`);

mainDiv.append(navBar);
navBar.append(imageLogo);
navBar.append(menuBar);
navBar.append(profilepic);
mainDiv.append(main);
main.append(slider);
main.append(items);
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
