console.log("Hello World");
const apiKey = "0ea475ed65ee4b15ab149c06bed94f1e";
const recipes = [
  {
    id: 641060,
    image: "https://img.spoonacular.com/recipes/641060-556x370.jpg",
    imageType: "jpg",
    title: "Curried Cabbage & Kale Gratin",
    readyInMinutes: 45,
    servings: 8,
    sourceUrl:
      "https://www.foodista.com/recipe/LXKT75GT/curried-cabbage-kale-gratin",
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 8,
    gaps: "no",
    preparationMinutes: null,
    cookingMinutes: null,
    aggregateLikes: 15,
    healthScore: 15,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 119.38,
    extendedIngredients: [
      {
        id: 4002,
        aisle: "Baking",
        image: "pork-fat-or-lard.jpg",
        consistency: "SOLID",
        name: "fat — my preference is always animal fat",
        nameClean: "pork fat",
        original:
          "2 tbsp fat — my preference is always animal fat, such as tallow, chicken fat, duck fat or butter, but if you are going vegetarian route, olive oil will do nicely",
        originalName:
          "fat — my preference is always animal fat, such as tallow, chicken fat, duck fat or butter, but if you are going vegetarian route, olive oil will do nicely",
        amount: 2,
        unit: "tbsp",
        meta: [
          " such as tallow, chicken fat, duck fat or butter, but if you are going vegetarian route, olive oil will do nicely",
        ],
        measures: {
          us: {
            amount: 2,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 2,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
    ],
  },
  {
    id: 11246,
    aisle: "Produce",
    image: "leeks.jpg",
    consistency: "SOLID",
    name: "leek",
    nameClean: "leek",
    original:
      "1 large leek, dark green parts removed, sliced in half lengthwise, rinsed out, and sliced about 1/4″ thick",
    originalName:
      "leek, dark green parts removed, sliced in half lengthwise, rinsed out, and sliced about 1/4″ thick",
    amount: 1,
    unit: "large",
    meta: [
      "dark",
      "green",
      "thick",
      "rinsed",
      "sliced in half lengthwise,  out, and sliced 1/4″ ",
    ],
    measures: {
      us: {
        amount: 1,
        unitShort: "large",
        unitLong: "large",
      },
      metric: {
        amount: 1,
        unitShort: "large",
        unitLong: "large",
      },
    },
  },
  {
    id: 11215,
    aisle: "Produce",
    image: "garlic.png",
    consistency: "SOLID",
    name: "garlic",
    nameClean: "garlic",
    original: "3 cloves of garlic, slivered",
    originalName: "garlic, slivered",
    amount: 3,
    unit: "cloves",
    meta: [],
    measures: {
      us: {
        amount: 3,
        unitShort: "cloves",
        unitLong: "cloves",
      },
      metric: {
        amount: 3,
        unitShort: "cloves",
        unitLong: "cloves",
      },
    },
  },
  {
    id: 2015,
    aisle: "Spices and Seasonings",
    image: "curry-powder.jpg",
    consistency: "SOLID",
    name: "curry powder",
    nameClean: "curry powder",
    original: "1 tsp curry powder",
    originalName: "curry powder",
    amount: 1,
    unit: "tsp",
    meta: [],
    measures: {
      us: {
        amount: 1,
        unitShort: "tsp",
        unitLong: "teaspoon",
      },
      metric: {
        amount: 1,
        unitShort: "tsp",
        unitLong: "teaspoon",
      },
    },
  },
  {
    id: 11109,
    aisle: "Produce",
    image: "cabbage.jpg",
    consistency: "SOLID",
    name: "cabbage head",
    nameClean: "cabbage",
    original: "1 small cabbage head, cored, quartered and sliced not too thin",
    originalName: "cabbage head, cored, quartered and sliced not too thin",
    amount: 1,
    unit: "small",
    meta: ["cored", "sliced", "quartered", "thin"],
    measures: {
      us: {
        amount: 1,
        unitShort: "small",
        unitLong: "small",
      },
      metric: {
        amount: 1,
        unitShort: "small",
        unitLong: "small",
      },
    },
  },
  {
    id: 11233,
    aisle: "Produce",
    image: "kale.jpg",
    consistency: "SOLID",
    name: "kale",
    nameClean: "kale",
    original:
      "1 bunch kale, I used Lacinato, coarsest parts of the stems discarded, the rest coarsely chopped",
    originalName:
      "kale, I used Lacinato, coarsest parts of the stems discarded, the rest coarsely chopped",
    amount: 1,
    unit: "bunch",
    meta: ["coarsely chopped"],
    measures: {
      us: {
        amount: 1,
        unitShort: "bunch",
        unitLong: "bunch",
      },
      metric: {
        amount: 1,
        unitShort: "bunch",
        unitLong: "bunch",
      },
    },
  },
  {
    id: 11109,
    aisle: "Produce",
    image: "cabbage.jpg",
    consistency: "SOLID",
    name: "water",
    nameClean: "cabbage",
    original: "1/2 cup water for braising the cabbages",
    originalName: "water for braising the cabbages",
    amount: 0.5,
    unit: "cup",
    meta: ["for braising the cabbages"],
    measures: {
      us: {
        amount: 0.5,
        unitShort: "cups",
        unitLong: "cups",
      },
      metric: {
        amount: 35,
        unitShort: "g",
        unitLong: "grams",
      },
    },
  },
  {
    id: 1002030,
    aisle: "Spices and Seasonings",
    image: "pepper.jpg",
    consistency: "SOLID",
    name: "salt and pepper",
    nameClean: "black pepper",
    original: "salt and freshly ground black pepper to taste",
    originalName: "salt and freshly ground black pepper to taste",
    amount: 8,
    unit: "servings",
    meta: ["black", "freshly ground", "to taste"],
    measures: {
      us: {
        amount: 8,
        unitShort: "servings",
        unitLong: "servings",
      },
      metric: {
        amount: 8,
        unitShort: "servings",
        unitLong: "servings",
      },
    },
  },
  {
    id: 1012049,
    aisle: "Produce",
    image: "thyme.jpg",
    consistency: "SOLID",
    name: "thyme",
    nameClean: "fresh thyme",
    original: "2-3 sprigs of fresh thyme",
    originalName: "fresh thyme",
    amount: 2,
    unit: "sprigs",
    meta: ["fresh"],
    measures: {
      us: {
        amount: 2,
        unitShort: "sprigs",
        unitLong: "sprigs",
      },
      metric: {
        amount: 2,
        unitShort: "sprigs",
        unitLong: "sprigs",
      },
    },
  },
  {
    id: 1123,
    aisle: "Milk, Eggs, Other Dairy",
    image: "egg.png",
    consistency: "SOLID",
    name: "eggs",
    nameClean: "egg",
    original: "3 large eggs",
    originalName: "eggs",
    amount: 3,
    unit: "large",
    meta: [],
    measures: {
      us: {
        amount: 3,
        unitShort: "large",
        unitLong: "larges",
      },
      metric: {
        amount: 3,
        unitShort: "large",
        unitLong: "larges",
      },
    },
  },
  {
    id: 1077,
    aisle: "Milk, Eggs, Other Dairy",
    image: "milk.png",
    consistency: "LIQUID",
    name: "milk",
    nameClean: "milk",
    original: "1/2 cup milk",
    originalName: "milk",
    amount: 0.5,
    unit: "cup",
    meta: [],
    measures: {
      us: {
        amount: 0.5,
        unitShort: "cups",
        unitLong: "cups",
      },
      metric: {
        amount: 122,
        unitShort: "ml",
        unitLong: "milliliters",
      },
    },
  },
  {
    id: 18079,
    aisle: "Pasta and Rice",
    image: "breadcrumbs.jpg",
    consistency: "SOLID",
    name: "bread crumbs",
    nameClean: "breadcrumbs",
    original: "1 cup white bread crumbs, I used Panko",
    originalName: "white bread crumbs, I used Panko",
    amount: 1,
    unit: "cup",
    meta: ["white"],
    measures: {
      us: {
        amount: 1,
        unitShort: "cup",
        unitLong: "cup",
      },
      metric: {
        amount: 108,
        unitShort: "ml",
        unitLong: "milliliters",
      },
    },
  },
  {
    id: 1023,
    aisle: "Cheese",
    image: "gruyere.jpg",
    consistency: "SOLID",
    name: "gruyere cheese",
    nameClean: "gruyere",
    original: "1 cup grated Gruyere cheese, or similar",
    originalName: "grated Gruyere cheese, or similar",
    amount: 1,
    unit: "cup",
    meta: ["grated"],
    measures: {
      us: {
        amount: 1,
        unitShort: "cup",
        unitLong: "cup",
      },
      metric: {
        amount: 132,
        unitShort: "g",
        unitLong: "grams",
      },
    },
  },
];

const fetchRecipesByName = (query) => {
  const pr = fetch(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`
  );

  pr.then((res) => {
    const pr1 = res.json();
    pr1.then((data) => {
      // console.log(data);
      showDate(data.results);
    });
  });
};

// fetchRecipesByName("chicken");

const fetchRecipesRandomly = () => {
  const pr = fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=100`
  );

  pr.then((res) => {
    const pr1 = res.json();
    pr1.then((data) => {
      showDate(data.recipes);
    });
  });
};

fetchRecipesRandomly();

const main = document.getElementById("recipe-container");

const showDate = (data) => {
  main.innerHTML = "";
  data.forEach((ele) => {
    const div = document.createElement("div");
    div.classList.add("recipe");
    div.innerHTML = `
    
    <img src= ${ele.image}  class="img"/>
    
    <p>${ele.title}</p>
    <p>${ele.readyInMinutes}</p>`;

    div.addEventListener("click", () => {
      window.open(`./MoreInfo.html?id=${ele.id}`, "_top");
      console.log(ele.id);
    });
    main.appendChild(div);
  });
};

document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value;
  console.log(query);
  fetchRecipesByName(query);
});

// showDate(recipes);
