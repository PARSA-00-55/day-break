const loadnews = async() =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/01`);
    const data = await res.json();
    console.log(data.data[0].author.name)
}
loadnews()