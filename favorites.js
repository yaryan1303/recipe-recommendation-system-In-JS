const favoritesContainer = document.getElementById("favorites-container");

// Load saved recipes from localStorage
const loadFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = "<p>No favorite recipes saved yet.</p>";
    return;
  }

  favorites.forEach((recipe) => {
    const div = document.createElement("div");
    div.classList.add("recipe");

    // Recipe Image
    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.title;
    image.classList.add("img");
    div.appendChild(image);

    // Recipe Title
    const title = document.createElement("p");
    title.textContent = recipe.title;
    div.appendChild(title);

    // Cooking Time
    const time = document.createElement("p");
    time.textContent = `${recipe.readyInMinutes} minutes`;
    div.appendChild(time);

    // More Details Button
    const moreDetailsButton = document.createElement("button");
    moreDetailsButton.innerText = "More Details";
    moreDetailsButton.classList.add("details-button");
    moreDetailsButton.addEventListener("click", () => {
      window.open(`./MoreInfo.html?id=${recipe.id}`, "_top"); // Redirect to MoreInfo.html
    });
    div.appendChild(moreDetailsButton);

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      deleteRecipe(recipe.id); // Call the deleteRecipe function
    });
    div.appendChild(deleteButton);

    // Append the card to the container
    favoritesContainer.appendChild(div);
  });
};

// Delete a recipe from favorites
const deleteRecipe = (recipeId) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Filter out the recipe to delete
  favorites = favorites.filter((recipe) => recipe.id !== recipeId);

  // Update localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  // Reload the favorites list
  favoritesContainer.innerHTML = ""; // Clear the container
  loadFavorites(); // Reload the remaining favorites
};

// Load favorites on page load
loadFavorites();
