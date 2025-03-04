const apiKey = "0ea475ed65ee4b15ab149c06bed94f1e";
const main = document.getElementById("recipe-container");
let allRecipes = []; // Store all fetched recipes

// Fetch recipes by name
const fetchRecipesByName = (query) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showData(data.results);
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
};

// Display recipes
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

    const shareButtons = document.createElement("div");
    shareButtons.classList.add("share-buttons");

    // Facebook Share Button
    const facebookButton = document.createElement("a");
    facebookButton.href = `https://www.facebook.com/sharer/sharer.php?u=${generateRecipeUrl(
      ele.id
    )}`;
    facebookButton.target = "_blank";
    facebookButton.classList.add("share-button", "facebook");
    facebookButton.innerHTML = `
      <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" />
      
    `;
    shareButtons.appendChild(facebookButton);

    // Twitter Share Button
    const twitterButton = document.createElement("a");
    twitterButton.href = `https://twitter.com/intent/tweet?url=${generateRecipeUrl(
      ele.id
    )}&text=${encodeURIComponent(`Check out this recipe: ${ele.title}`)}`;
    twitterButton.target = "_blank";
    twitterButton.classList.add("share-button", "twitter");
    twitterButton.innerHTML = `
      <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
      
    `;
    shareButtons.appendChild(twitterButton);

    // Copy Link Button
    const copyLinkButton = document.createElement("button");
    copyLinkButton.classList.add("share-button", "copy-link");
    copyLinkButton.innerHTML = `
      <img src="https://img.icons8.com/color/48/000000/copy-link.png" alt="Copy Link" />
      Copy Link
    `;
    copyLinkButton.addEventListener("click", () => {
      copyRecipeLink(generateRecipeUrl(ele.id));
    });
    shareButtons.appendChild(copyLinkButton);

    div.appendChild(shareButtons);

    // Append the card to the container
    main.appendChild(div);
  });
};

// Save recipe to localStorage
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

// Fetch all recipes
const fetchAllRecipes = () => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100&addRecipeInformation=true`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allRecipes = data.results.map((recipe) => ({
        ...recipe,
        difficulty: ["easy", "medium", "hard"][Math.floor(Math.random() * 3)], // Random difficulty
      }));

      showData(allRecipes);
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
};
const generateRecipeUrl = (recipeId) => {
  const baseUrl = window.location.origin; // Get the current website URL
  return `${baseUrl}/recipe?id=${recipeId}`;
};

const updateShareButtons = (recipeId, recipeTitle) => {
  const recipeUrl = generateRecipeUrl(recipeId);

  // Update Facebook Share Button
  const facebookButton = document.querySelector(".share-button.facebook");
  facebookButton.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    recipeUrl
  )}`;

  // Update Twitter Share Button
  const twitterButton = document.querySelector(".share-button.twitter");
  twitterButton.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    recipeUrl
  )}&text=${encodeURIComponent(`Check out this recipe: ${recipeTitle}`)}`;

  // Update Copy Link Button
  const copyLinkButton = document.querySelector(".share-button.copy-link");
  copyLinkButton.setAttribute("onclick", `copyRecipeLink('${recipeUrl}')`);
};

const copyRecipeLink = (recipeUrl) => {
  navigator.clipboard
    .writeText(recipeUrl)
    .then(() => {
      alert("Link copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy link:", error);
      alert("Failed to copy link. Please try again.");
    });
};

// Filter recipes
const filterRecipes = () => {
  const diet = document.getElementById("diet").value;
  const cookingTime = document.getElementById("cooking-time").value;
  const difficulty = document.getElementById("difficulty").value;

  const filteredRecipes = allRecipes.filter((recipe) => {
    const isDietMatch =
      !diet ||
      (diet === "vegetarian" && recipe.vegetarian) ||
      (diet === "vegan" && recipe.vegan) ||
      (diet === "gluten-free" && recipe.glutenFree);

    const isTimeMatch =
      !cookingTime || recipe.readyInMinutes <= parseInt(cookingTime);

    const isDifficultyMatch = !difficulty || recipe.difficulty === difficulty;

    return isDietMatch && isTimeMatch && isDifficultyMatch;
  });

  showData(filteredRecipes);
};

// Event listeners
document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value;
  fetchRecipesByName(query);
});

document
  .getElementById("apply-filters")
  .addEventListener("click", filterRecipes);

// Fetch all recipes on page load
fetchAllRecipes();

//Generate Random Recipe

document
  .getElementById("random-recipe-button")
  .addEventListener("click", () => {
    window.open("./GenerateRandomRecipe.html", "_top");
  });
