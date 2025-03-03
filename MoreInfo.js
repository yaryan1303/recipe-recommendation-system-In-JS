const apiKey = "0ea475ed65ee4b15ab149c06bed94f1e";

const searchText = window.location.search;
const splitText = searchText.split("=");
const recipeId = splitText[1];

console.log(recipeId);

const fetchRecipesInfoByID = (id) => {
  const pr = fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  );

  pr.then((res) => {
    const pr1 = res.json();
    pr1.then((data) => {
      console.log(data);
      createRecipeCard(data);
    });
  });
};

fetchRecipesInfoByID(recipeId);

const recipeContainer = document.getElementById("recipe-container");

function createRecipeCard(recipe) {
  const card = document.createElement("div");
  card.classList.add("recipe-card");

  // Recipe Image
  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = recipe.title;
  image.classList.add("recipe-image");
  card.appendChild(image);

  // Recipe Title
  const title = document.createElement("h3");
  title.textContent = recipe.title;
  title.classList.add("recipe-title");
  card.appendChild(title);

  // Basic Details
  const details = document.createElement("div");
  details.classList.add("recipe-details");
  details.innerHTML = `
        <p><strong>Ready in:</strong> ${recipe.readyInMinutes} minutes</p>
        <p><strong>Servings:</strong> ${recipe.servings}</p>
        <p><strong>Health Score:</strong> ${recipe.healthScore}</p>
        <p><strong>Price per Serving:</strong> $${recipe.pricePerServing.toFixed(
          2
        )}</p>
    `;
  card.appendChild(details);

  // Extended Ingredients
  const ingredients = document.createElement("div");
  ingredients.classList.add("recipe-ingredients");
  ingredients.innerHTML = `
        <h4>Ingredients</h4>
        <ul>
            ${recipe.extendedIngredients
              .map(
                (ing) => `
                    <li>
                        <strong>${ing.nameClean || ing.name}:</strong>
                        ${ing.amount} ${ing.unit}
                    </li>
                `
              )
              .join("")}
        </ul>
    `;
  card.appendChild(ingredients);

  // Instructions (if available)
  if (recipe.instructions) {
    const instructions = document.createElement("div");
    instructions.classList.add("recipe-instructions");
    instructions.innerHTML = `
            <h4>Instructions</h4>
            <p>${recipe.instructions}</p>
        `;
    card.appendChild(instructions);
  }

  // Additional Information
  const additionalInfo = document.createElement("div");
  additionalInfo.classList.add("recipe-additional-info");
  additionalInfo.innerHTML = `
        <h4>Additional Information</h4>
        <p><strong>Dietary:</strong> ${
          recipe.vegetarian ? "Vegetarian" : "Non-Vegetarian"
        }, ${recipe.vegan ? "Vegan" : "Non-Vegan"}, ${
    recipe.glutenFree ? "Gluten-Free" : "Contains Gluten"
  }</p>
        <p><strong>Dairy-Free:</strong> ${recipe.dairyFree ? "Yes" : "No"}</p>
        <p><strong>Very Healthy:</strong> ${
          recipe.veryHealthy ? "Yes" : "No"
        }</p>
        <p><strong>Popularity:</strong> ${recipe.aggregateLikes} likes</p>
        <p><strong>Source:</strong> <a href="${
          recipe.sourceUrl
        }" target="_blank">${recipe.sourceName}</a></p>
    `;
  card.appendChild(additionalInfo);

  // Append the card to the container
  recipeContainer.appendChild(card);
}

// Related Vidio

const relatedvidio = document.getElementById("related-container");

const relatedVideo = (id) => {
  const pr = fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=${apiKey}`
  );

  pr.then((res) => {
    const pr1 = res.json();
    pr1.then((data) => {
      console.log(data);
      showData(data);
    });
  });
};

const main = document.getElementById("related-container");
relatedVideo("recipeId");

// Display recipes
const showData = (data) => {
  main.innerHTML = ""; // Clear previous results
  data.forEach((ele) => {
    const div = document.createElement("div");
    div.classList.add("recipe");

    // Recipe Image
    const image = document.createElement("img");
    image.src = `https://spoonacular.com/recipeImages/${ele.image}`; // Correct image URL
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
