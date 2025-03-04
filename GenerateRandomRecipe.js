const apiKey = "0ea475ed65ee4b15ab149c06bed94f1e";
const generateRandomRecipe = () => {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=20`;

  const pr = fetch(url);

  pr.then((res) => {
    const pr1 = res.json();
    pr1.then((data) => {
      console.log(data);
      showData(data.recipes);
    });
  });
};

const main = document.getElementById("recipe-container");
const showData = (data) => {
  main.innerHTML = ""; // Clear previous results
  data.forEach((ele) => {
    const div = document.createElement("div");
    div.classList.add("recipe");

    // Recipe Image
    const image = document.createElement("img");
    image.src = ele.image;
    image.alt = ele.title;
    image.classList.add("img");
    div.appendChild(image);

    // Recipe Title
    const title = document.createElement("p");
    title.textContent = ele.title;
    div.appendChild(title);

    // Cooking Time
    const time = document.createElement("p");
    time.textContent = `${ele.readyInMinutes} minutes`;
    div.appendChild(time);

    // More Details Button
    const moreDetailsButton = document.createElement("button");
    moreDetailsButton.innerText = "More Details";
    moreDetailsButton.classList.add("details-button");
    moreDetailsButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the card click event from firing
      window.open(`./MoreInfo.html?id=${ele.id}`, "_top");
    });
    div.appendChild(moreDetailsButton);

    // Save Button
    const saveButton = document.createElement("button");
    saveButton.innerText = "Add to Favorites";
    saveButton.classList.add("save-button");
    saveButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the card click event from firing
      saveRecipe(ele); // Call the saveRecipe function
    });
    div.appendChild(saveButton);

    

    // Append the card to the container
    main.appendChild(div);
  });
};

const saveRecipe = (recipe) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if the recipe is already saved
  const isAlreadySaved = favorites.some((fav) => fav.id === recipe.id);
  if (isAlreadySaved) {
    alert("This recipe is already saved!");
    return;
  }

  // Add the recipe to favorites
  favorites.push(recipe);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  alert("Recipe saved to favorites!");
};

generateRandomRecipe();
