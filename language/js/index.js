//menu-bar item
const loadMenubar = async () => {
  try{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/categories`
    );
    const data = await res.json();
    displayMenu(data.data.news_category);
  }catch(error){
    console.log(error);
  }
  // return data;
};

const displayMenu = news =>{
  const menuCatagory = document.getElementById('menu-bar');
  news.forEach(element => {
    // console.log(element)
    const li = document.createElement('li');
    li.classList.add("menu-bar-list-item");
    li.innerHTML =`
    <button onclick="newsIdLoad('${element.category_id}')">${element.category_name}</button>
    `
    menuCatagory.appendChild(li)
  });
}

const newsIdLoad = async(newsId) =>{
  const url = `https://openapi.programming-hero.com/api/news/category/${newsId}`
  // console.log(url)
  try{
  const res = await fetch(url);
  const data = await res.json();
  newsCard(data.data)
  }catch(error){
    console.log(error)
  }
  // console.log(data.data.length)
}

// items numbershow
// const itemNumber = async(num) =>{
//   const num = document.getElementById('item-number');

// }

const newsCard = async(items) =>{
  console.log(items)
  const newsFeed = document.getElementById('news-feed');
  newsFeed.innerHTML = ``;
  
  //if the category is empty
  if(items.length === 0){
    const notFound = document.createElement("div");
    notFound.innerHTML = `
    <h2 class="text-center text-5xl"> No Item Found. In this category</h2>
    `
    newsFeed.appendChild(notFound)
    return
  }
  items.forEach(item =>{
    // console.log(item)
    const stringified = JSON.stringify(item)
    const newsDiv = document.createElement("div");
    newsDiv.innerHTML = `
    <div class="card lg:card-side bg-base-200 shadow-xl my-5">
                    <figure><img src="${item.thumbnail_url}" alt="Album"></figure>
                    <div class="card-body">
                        <h2 class="card-title">${item.title ? item.title : "Unknown Author"}</h2>
                        <p>${item.details.slice(0, 400) ? item.details.slice(0, 400)+"..." : ""}</p>
                        <!-- card bottom -->
                        <div class="card-actions flex justify-between items-center">
                            <!-- author section -->
                            <div class="flex gap-4">
                                <div class="avatar">
                                    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="${item.author.img}" />
                                    </div>
                                </div>
                                <!-- author info -->
                                <div>
                                    <h4>${item.author.name}</h4>
                                    <p>${item.author.published_date}</p>
                                </div>
                            </div>
                            <!-- views section -->
                            <div class="flex justify-between items-center gap-1">
                                <i class="fa-solid fa-eye"></i>
                                <p>${item.total_view} viewed</p>
                            </div>
                            <!-- rateing -->
                            <div class="rating rating-md">
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                              </div>

                              <label for="my-modal-3" onclick="" class="btn btn-primary modal-button">open modal</label>

                        </div>
                    </div>
                </div>
    `
    newsFeed.appendChild(newsDiv);
  })
}


loadMenubar()
newsIdLoad('08')



// const displayMenu = async(news) => {
//   const data = await loadMenubar()
//   const menuCatagory = document.getElementById("menu-bar");
//   news.forEach((news) => {
//     console.log(news);
//     const li = document.createElement("li");
//     li.classList.add("menu-bar-list-item");
//     li.innerHTML = `<button>${news.category_name}</button>`;
//     menuCatagory.appendChild(li);
//   });
// };

// //menu-bar item list
// const addMenuItem = async () => {
//   const data = await loadMenubar();
//   const menu = document.getElementById("menu-bar");
//   const menuItem = data.data.news_category;

//   const uniqueArray = [];
//   console.log(uniqueArray);



//   for (const item of menuItem) {
//     // console.log(item);
//     if (uniqueArray.indexOf(menuItem) === -1) {
//       const li = document.createElement("li");
//       li.classList.add("menu-bar-list-item");
//       li.innerHTML = `<button onclick="news('${item}')">${item.category_name}</button>`;
//       menu.appendChild(li);
//     }
//   }
// };


// addMenuItem();
// loadMenubar()
