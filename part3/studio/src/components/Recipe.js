const RecipeAuthor = () => {
   let authorLink = "https://www.foodbymaria.com";
   let authorPhoto = "https://www.foodbymaria.com/wp-content/uploads/2019/07/Collages-FBM-ProfileSide.jpg";
   let authorName = "FoodByMaria";

   return (
      <div>
         <img src={authorPhoto} alt="FoodByMaria" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["chopped white onion", "garlic", "bread crumbs", "olive oil", "oat milk", "spices", "fresh chopped mint and green onions"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Plant-Based Coconut Curry Meatballs With Soup</h1>
            <p>This yummy, creamy Plant-Based Coconut Curry Meatballs Soup is to die for. Loaded with flavour, and filling.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.foodbymaria.com/wp-content/uploads/2020/04/Plant-Based-Coconut-Curry-Meatballs-4.jpg" alt="Plant-Based Coconut Curry Meatballs With Soup" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}