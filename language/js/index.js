//calling the API
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
};

//Menu bar
const displayMenu = news =>{
  const menuCatagory = document.getElementById('menu-bar');
  news.forEach(element => {
    const li = document.createElement('li');
    li.classList.add("menu-bar-list-item");
    li.innerHTML =`
    <button onclick="newsIdLoad('${element.category_id}')">${element.category_name}</button>
    `
    menuCatagory.appendChild(li)
  });
}

//dynamic API  create
const newsIdLoad = async(newsId) =>{
  const url = `https://openapi.programming-hero.com/api/news/category/${newsId}`
  try{
  const res = await fetch(url);
  const data = await res.json();
  newsCard(data.data)
  }catch(error){
    console.log(error)
  }
}

const newsCard = async(items) =>{
  console.log(items)
  const newsFeed = document.getElementById('news-feed');
  newsFeed.innerHTML = ``;
  
  if(items.length === 0){
    const notFound = document.createElement("div");
    notFound.innerHTML = `
    <h2 class="text-center text-5xl m-12"> No Item Found. In this category</h2>
    `
    newsFeed.appendChild(notFound)
    return
  }

  //news card section
  items.forEach(item =>{

    const stringified = JSON.stringify(item)
    //news cards
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

//common function call
loadMenubar()
newsIdLoad('08')

