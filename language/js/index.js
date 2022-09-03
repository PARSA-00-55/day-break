//menu-bar item
const loadMenubar = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await res.json();
  return data;
};
//menu-bar item list
const addMenuItem = async () => {
  const data = await loadMenubar();
  const menuItem = data.data.news_category;
  const menu = document.getElementById("menu-bar");

  for (const item of menuItem) {
    console.log(item);
    const li = document.createElement("li");
    li.classList.add("menu-bar-list-item");
    li.innerHTML = `<button onclick="news()">${item.category_name}</button>`;
    menu.appendChild(li);
  }
};

const news = () =>{
  console.log('hello')
}

addMenuItem();
// loadMenubar()
