//menu-bar item
const loadMenubar = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await res.json();
  displayMenu(data.data.news_category);
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
  const res = await fetch(url);
  const data = await res.json();

  newsCard(data.data)
}

const newsCard = async(items) =>{
  const newsFeed = document.getElementById('news-feed');
  newsFeed.innerHTML = '';
  for(const item of items){
    console.log(item)
    const newsDiv = document.createElement("div");
    newsDiv.innerHTML = `
    <div class="card lg:card-side bg-base-200 shadow-xl">
                    <figure><img src="https://placeimg.com/400/400/arch" alt="Album"></figure>
                    <div class="card-body">
                        <h2 class="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app. Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Illum praesentium debitis tempore explicabo error, quia repudiandae quibusdam voluptates
                            eligendi odio totam, ad quod quidem earum ducimus sequi sit fuga ea iusto ab fugiat! Distinctio
                            eum, nesciunt quisquam ab omnis sunt eos molestiae beatae exercitationem possimus excepturi
                            itaque animi cupiditate? Delectus?</p>
                        <!-- card bottom -->
                        <div class="card-actions flex justify-between items-center">
                            <!-- author section -->
                            <div class="flex gap-4">
                                <div class="avatar">
                                    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <!-- author info -->
                                <div>
                                    <h4>jane Cooper</h4>
                                    <p>Jan, 10, 2022</p>
                                </div>
                            </div>
                            <!-- views section -->
                            <div class="flex justify-between items-center gap-1">
                                <i class="fa-solid fa-eye"></i>
                                <p>400 view</p>
                            </div>
                            <!-- rateing -->
                            <div class="rating rating-md">
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                              </div>
                              <!-- read more button -->
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
    `
    newsFeed.appendChild(newsDiv);
  }
}

loadMenubar()

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
