const itemRef = document.querySelectorAll(".item");
console.log("Number of categories: ", itemRef.length);

itemRef.forEach(item => {
    const titleRef = item.querySelector("h2");
    const categoryItemRef = item.querySelectorAll("ul li");
    console.log("Category: ", titleRef.textContent);
    console.log("Elements: ", categoryItemRef.length);
});
