const recipes = [
  {
    id: 1,
    title: "Rainbow Terrine",
    servingSize: 4,
    starRating: 4,
    type: "Appetizer",
    source: "Stolen Recipe",
    locked: false,
    recipeImg: require("../../images/RecipeImages/RainbowTerrine.png").default,
    ingredients: [
      "12 eggs",
      "1 pint heavy cream",
      "3 carrots, minced",
      "5 tbsp butter",
      "1 cup ground chicken",
      "2 cups spinach",
      "Canned tuna",
      "1 Zucchini",
      "1/2 cup ground beef",
      "1 Eggplant (can be directly substituted with pumpkin)",
      "2/3 cup shiitake mushrooms",
      "12 cherry tomatoes",
      "1/2 can tomato paste",
      "2 potatoes, boiled and mashed",
      "2 tbsp. perilla",
      "1/4 cup walnuts",
      "2 tbsp pine nuts",
      "1 tbsp parsley",
      "2 tsp basil",
      "2 tsp chopped fresh dill",
      "2 tbsp olive oil",
      "3 grams unflavored gelatin powder",
      "2 tablespoons warm water",
      "1 tbsp sudachi juice or 1 tbsp lime juice",
      "2 tbsp soy sauce",
      "1 tbsp mirin",
      "2 tbsp chicken broth",
      "Allspice",
      "Salt",
      "Pepper",
    ],
    directions: [
      "Before beginning recipe, create a large batch of combining sauce. The ratio for the sauce is 1 tbsp to 1 egg. Beat thoroughly in a bowl and set aside.",
      "Prepare all of your ingredients prior to cooking. Cook ground chicken and mince / food process / blend. Do the same for carrots, zucchini, eggplant/pumpkin, shiitake mushrooms. Prepare other ingredients. Boil a pot of water and blanch spinach for 30-40 seconds before removing and rinsing in cold water. Boil potatoes until soft and mash. Cut tomatoes in half and place on a pan, seasoning with salt and pepper, baking at 225 degrees F for 2 and 1/2 hours.",
      "Cook each layer one at a time on a stove top on medium high heat. If you have more than one pan to cook with, you can do multiple at a time, depending on skill level. Start each layer with a tablespoon of butter to prepare the pot.",
      "For the carrot layer, cook minced carrots on medium-high heat until softened. Add in ground chicken, mix together. Add 1/7th of your combining sauce and continue stirring until fully combined. Remove from heat and set aside in a container.",
      "For the spinach layer, take your blanched spinach and finely mince. Combine immediately with tuna on a stove at medium high heat until ingredients have melted together. Add combining sauce and continue stirring until fully combined. Remove from heat and set aside in a container",
      "For the zucchini layer, food process or mince your zucchini. Cook your ground beef until browned and add zucchini. Continue mixing together and cooking. Add combining sauce and continue stirring until fully combined. Add a few dashes of all spice. Remove from heat and set aside in a container.",
      "For the pumpkin layer, cut eggplant (or pumpkin) into tiny sections and add to pan with butter. Cook until fully softened. Add combining sauce and continue stirring until fully combined. Remove from heat and set aside in a container.",
      "For the mushroom layer, thinly mince your mushrooms in a blender or food processor. Cook chicken on the pan until fully cooked. Remove and continue to mince in a blender or food processor. Add chicken and mushrooms together with butter. Add any amount of all spice you'd like. Stir and mix until combined. Add combining sauce and continue stirring until fully combined. Remove from heat and set aside in a container.",
      "For the tomato layer, pour in half a can of tomato paste, add in sundried tomatoes, stir, then add combining sauce and continue stirring until fully combined. Remove from heat and set aside in a container. Add an additional egg if the sauce needs extra thickening.",
      "For the potato layer, take peeled soft potatoes and roughly mash. Add to pan with butter and use salt, pepper, and allspice to season. Add combining sauce and continue stirring until fully combined. Remove from heat and set aside in a container.",
      "Assemble your terrine in a pate container. Take care to layer it evenly with a spoon or spatula, and not pressing too hard from layer to layer, otherwise it will smash and mush into other layers. Once you've placed each layer, bake in an oven at 265 degrees F. Place pate container in a larger baking pan and fill with water so it reaches the halfway mark on the pate.",
      "While that is baking, create the two sauces. For the herb sauce, put perilla, walnuts, pine nuts, parsley, basil, chopped dill, and olive oil in a food processor and blend until more liquid.",
      "For the ponzu sauce, combine gelatin powder, warm water, sudachi juice, soy sauce, mirin, and chicken broth. Mix thoroughly and place aside to chill.",
      "When the terrine finishes baking, remove and let cool. Place in refrigerator to chill. Once chilled, remove the terrine and cut off a slice from either end. Plate with your two sauces in a circular swirl around as well as some garnish.",
    ],
    notes: [
      "Contains a hidden secret, thanks to the effects of the allspice added to it, it gives a warm feeling to one's soul, as if walking with one's mother under a rainbow on a sunny day.",
    ],
  },
  {
    id: 2,
    title: "Yukihira Style Fragrant Butter Pilaf Inarizushi",
    servingSize: 3,
    starRating: 5,
    type: "Appetizer",
    source: "My Creation",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Inarizushi.jpg").default,
    ingredients: [
      "150 g of ground chicken",
      "2 tablespoons sugar",
      "2 tablespoons soysauce",
      "2 eggs",
      "5 seasoned deep fried bean curd (aburaage)",
      "1 cup cooked rice",
      "3 tablespoons seasoned vinegar",
    ],
    directions: [
      "For chcken soboro : In a pot, combine ground chicken, sugar and Soy Sauce. At medium heat, cook chicken stirring constantly with 4 chopsticks until sauce is all evaporated.",
      "For egg soboro : In a pot, combine eggs,sugar and soy sauce. At medium heat, cook eggs stirring constantly with 4 chopstics.",
      "To make vinegered rice, put together cooked rice and seasoned vinegar in a small bowl.",
      "Place 5 seasoned aburaage on the plate. Seasoned aburaage is special to cook Inarizuhi.",
      "Put vinegared rice into seasoned aburaage.",
      "Put some eggs soboro on the left surface on the vinegared rice. Next put some chicken soboro on the right on the vinegared rice.",
      "Place inarizushi on the plate.",
    ],
    notes: [
      "Strain some of Yoshino Secret Umami-Loaded Supreme Chicken Stock for a dynamic flavor",
      "Make some of Megumi's Famous Apple Butter and add it to the chicken soboro!",
    ],
  },
  {
    id: 3,
    title: "Time Fuse Mapo Curry Noodles",
    servingSize: "4",
    starRating: "5",
    type: "Soup",
    source: "My Creation",
    locked: false,
    recipeImg: require("../../images/RecipeImages/MapoCurry.png").default,
    ingredients: [
      "1 packet firm tofu",
      "1000g ground pork",
      "2 tsp dark soy sauce",
      "2 tsp light soy sauce",
      "3 tbsp cornstarch",
      "2 tbsp sesame oil",
      "Sichuan peppers",
      "Sichuan peppercorns",
      "Fresh chilli (optional)",
      "1/2 tsp salt",
      "3 green onion minced",
      "3 cloves garlic minced",
      "2 tbsp cooking oil",
      "3 1/2 cup beef broth/stock",
      "1/8 cup water",
      "1 tbsp doenjang (fermented soy bean paste)",
      "2 tbsp gochujang (fermented chilli paste)",
      "salt and pepper",
      "2 egg yolks",
      "ginger",
      "gelatin (1-2 tsp)",
      "1 packet Japanese curry roux",
      "cinnamon sticks",
      "6 tbsp soy sauce",
      "sliced ginger",
      "2 packets of dry ramen noodles",
      "Handful chopped scallions",
      "Meatball sauce to top",
    ],
    directions: [
      "Combine ginger, cinnamon stick(s), curry roux, gelatin, and beef broth.",
      "Stir over medium heat.",
      "Portion into small containers, or small ice cube trays, and freeze until solid, preferably overnight.",
      "Combine ingredients for Lion’s Head meatballs, and set aside to marinate (at least 20m).",
      "Meanwhile, chop up tofu into small cubes.",
      "Heat up oil in a wok or pan, and add szechuan peppercorns.",
      "Mix pork with dark and light soy sauce, garlic, cornstarch, and sesame oil. Set aside to marinate for 20m.",
      "Add pork to oil, and cook until browned. Add tofu and 1/2 cup beef broth, doenjang, gochujang, and fresh chillis. Add cornstarch mixed with water to thicken the sauce, and simmer. Add green onion.",
      "Add soy sauce, green onions, ginger, and beef stock to a pot. Bring to the boil, then reduce to a simmer.",
      "Meanwhile, take frozen curry out of containers, and make meatballs. Place curry in the centre, wrapping the meatball around the curry, and dipping in flour to seal everything in.",
      "Shallow fry for 2-3 minutes, or deep fry for 30s-1m. Take the meatball out of the oil, and place it into the simmering sauce. Braise for 3-4 minutes.",
      "Cook ramen noodles, and top with mapo tofu, meatball sauce, green onions, and Lion’s Head meatball.",
      "Slice open the meatball and watch the curry flow out…",
    ],
    notes: [
      "Use the meat mixture from our family Hujiao Bing recipe for the meatballs.",
    ],
  },
  {
    id: 4,
    title: "Snake Dish",
    servingSize: 2,
    starRating: 1,
    type: "Soup",
    source: "Family Recipe",
    locked: false,
    recipeImg: require("../../images/RecipeImages/SnakeDish.png").default,
    ingredients: [
      "2 cups of exotic snake meat",
      "4 tbsp of scallions",
      "6 cups of bone broth",
      "2 tsp of chrysanthemum leaves",
      "salt and pepper to taste",
    ],
    directions: [
      "Sear the snake meat in a skillet on high heat for 30 second.",
      "Add bone broth. Bring to a boil for 10 minutes.",
      "Add herbs and spices. Let simmer for 3 hours.",
      "Sprinkle extra scallions on top and serve.",
    ],
    notes: [""],
  },
  {
    id: 5,
    title: "Insalata Frittata",
    servingSize: "4",
    starRating: "3",
    type: "Salad",
    source: "Stolen Recipe",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Insalata.png").default,
    ingredients: [
      "7 eggs",
      "1/2 cup cream",
      "2 teaspoons all purpose flour",
      "salt",
      "pepper",
      "sliced bell peppers",
      "sliced cherry tomatoes",
      "1/2 sweet potato, diced",
      "arugula salad mix",
    ],
    directions: [
      "Preheat your oven to 180C",
      "Make the egg base.",
      "Whisk together then set aside. ",
      "Add any dried or fresh herbs you like.",
      "On medium heat, add around 2 tablespoon of oil to your pan and gently sautee the vegetables until soft.",
      "Spread the veggie mixture evenly on the bottom of your pan and pour in your egg mixture around. ",
      "Add cheese on top then crank the heat up to high. Count for 30 seconds. Then put this into the oven to cook for 15-20 minutes.",
      "Once it's cooked, take it out of the oven and insert a thin knife into the center of the frittata. The tip of your knife should come out clean.",
      "Cut into squares or bite sized pieces.",
      "Prepare your salad.",
      "Place this on a plate and drizzle lightly with olive oil and any vinegar of your choice.",
      "Place the cut squares on top of your salad and ENJOY!!!",
    ],
    notes: [""],
  },
  {
    id: 6,
    title: "Grilled Squid Tentacles Dressed in Peanut Butter",
    servingSize: "2",
    starRating: "1",
    type: "Sides",
    source: "My Creation",
    locked: false,
    recipeImg: require("../../images/RecipeImages/PbSquid.png").default,
    ingredients: [
      "Dried Squid Tentacles",
      "Peanuts soaked in coffee, habanero sweet and sour pork style, with a mint sauce",
      "1 tsp of Honey",
      "1 tsp of Yogurt",
    ],
    directions: [
      "Grill the dried squid until lightly browned on the skin.",
      "Soak tentacles in mixture of the other ingredients overnight.",
      "Remove from mixture, grill again for 4 minutes and serve.",
    ],
    notes: [""],
  },
  {
    id: 7,
    title: "Chaliapin Steak Don",
    servingSize: 2,
    starRating: 5,
    type: "Mains",
    source: "My Creation",
    locked: false,
    recipeImg: require("../../images/RecipeImages/SteakDon.jpg").default,
    ingredients: [
      "2 sirloin steaks",
      "1 1/2 onions",
      "2 bowls of rice",
      "1 tablespoon of pickled plum paste (umeboshi)",
      "Salt, Pepper, Potato starch for seasoning",
      "Chopped green onions",
      "4 tablespoon red wine",
      "1 tablespoon soy sauce",
      "2 tablespoon butter",
    ],
    directions: [
      "Mince the onion into tiny pieces. Trim the steak and tenderize. Cover the meat with chopped onions. Let it sit for 30 minutes.  Then, remove onions and sprinkle the meat with salt and pepper.",
      "Melt 1 tablespoon of butter in a skillet and saute the onions from (1). Flavor with salt and pepper, then move to a plate.",
      "Melt 1 tablespoon of butter  in a skillet and cook the steak. Brown both side of the steak.  (Remove the steak from the skillet)",
      "Make the sauce by adding red wine  to the skillet, mixing with the meat juice from (3). Once reduced add onion from 2 and saute. Add soy sauce down edge of skillet. Thicken with potato starch.",
      "Mix pickled plum paste with rice and place into two bowls. Place the steak from (3) and the sauce from (4). on top. Garnish with chopped green onion.",
    ],
    notes: [""],
  },
  {
    id: 8,
    title: "Le Plat Véritable ~Delinquent Daughter Style~",
    servingSize: 4,
    starRating: 5,
    type: "Mains",
    source: "Stolen Recipe",
    locked: true,
    recipeImg: require("../../images/RecipeImages/Plat.png").default,
    ingredients: [
      "Slowly Braised High-Grade Free-Range Chicken Breast",
      "High-Grade Free-Range Chicken Breast",
      "Croûte",
      "Crust",
      "Bread",
      "Pie",
      "Finely Minced Squid Tentacle",
      "Peanut Butter",
      "Scrambled Eggs",
      "Fresh Cream",
      "Salt",
      "Black Pepper",
      "Turmeric",
      "Crushed Sembei Crackers",
      "Rice Flour",
      "Boiled Rice",
      "Sesame Oil",
      "Black Sesame Seeds",
      "Salt",
      "Spear Squid",
      "Transforming Furikake",
      "Nikogori",
    ],
    directions: [
      "Prepare chicken stock using braised chicken and chicken skin. Freeze overnight.",
      "Finely mince squid and saute over medium heat for 4-5 minutes. Season for flavor.",
      "Add peanut butter to squid mixture and spread evenly on the crust. Fold crust 5 times then roll flat. Repeat 3 times. Refridgerate over night.",
      "Crumble crackers. Combine with rice flour, salt, black pepper, black sesame seeds and water. Roll dough into 2 inch balls then flatten.",
      "Cut squid into strips and lay flat on cracker dough rounds. Bake at 325 F for 8 minutes. Crush into tiny pieces. ",
      "Bring heavy cream and turmeric to a boil then slowly whisk into eggs. Stir mixture over low heat until combined and creamy. Strain.",
      "Sear chicken. Let cool then wrap in croûte. Apply egg wash to the top. Poke some holes in the top then bake at 375 F for 30 minutes.",
      "Cut chicken stock into squares.",
      "Plate egg sauce, cut a medallion from chicken croûte and lay on top. Top with more sauce, chicken stock squares and our crushed squid crackers.",
      "Enjoy.",
    ],
    notes: [""],
  },
  {
    id: 9,
    title: "Galette with Egg",
    servingSize: 1,
    starRating: 5,
    type: "Mains",
    source: "Family Recipe",
    locked: true,
    recipeImg: require("../../images/RecipeImages/Galette.png").default,
    ingredients: [
      "2 1/4 cups buckwheat flour",
      "1 egg",
      "3 cups water",
      "1/2 tsp salt",
      "5 strips of thick, uncured bacon, chopped",
      "1 onion, chopped ",
      "3 tbsp white wine",
      "4 stalks asparagus, chopped",
      "1/2 cup enoki mushrooms, separated",
      "bamboo shoots, chopped",
      "lotus root, chopped",
      "3/4 cup grated Gruyere cheese",
      "Salt and pepper",
      "1 egg",
      "Parsley for garnish",
    ],
    directions: [
      "Combine flour, egg, water, and salt to make the buckwheat pancakes. Let sit in fridge about two hours, or until it thickens slightly.",
      "Crisp the bacon in an ungreased pan over medium heat. Season with salt, and remove from heat when done. In the same pan, cook the onion until softened. De-glaze the pan with the white wine, scraping up any bits stuck to the bottom of the pan. Season with salt.",
      "Add in the asparagus and mushrooms, and toss through. Let cook until softened, about two to three minutes. Toss in the bamboo shoots and lotus root, season with salt, and let heat through another two minutes or so, or until all vegetables are cooked to desired softness",
      "Remove from heat, and toss into a bowl with the bacon and cheese. Stir through, and set aside.",
      "Make buckwheat pancakes by lightly greasing a non-stick pan and setting over low heat. Add batter to the pan, roll it around the surface, and, when edges start to get lacy and flick up, turn the pancake out onto a plate to cool.",
      "To assemble galette, add a pancake back to the pan on low heat. Layer in the filling, and crack an egg in the middle. Allow to cook about five minutes, or until egg white has set. You can use a lid to help you cook the top, but the egg yolk will cloud over, so do this cautiously if you want to preserve the color. Flip the edges up around the egg, remove from pan, and garnish with fresh cracked pepper.",
      "Enjoy hot!",
    ],
    notes: [""],
  },
  {
    id: 10,
    title: "Queen's Apple Tart",
    servingSize: 12,
    starRating: 3,
    type: "Desserts",
    source: "Stolen Recipe",
    locked: false,
    recipeImg: require("../../images/RecipeImages/QueenApple.png").default,
    ingredients: [
      "1 1/4 cup all purpose flour",
      "1/2 cup sugar",
      "1 tsp salt",
      "1/2 cup butter, cold and cubed",
      "1 egg",
      "1 tsp vanilla",
      "1 cup water",
      "1 cup sugar",
      "2-3 Damask roses",
      "1-2 Pink Lady apples (or other red-skinned apple)",
      "1 cup water",
      "1 Pink Lady apple (or other red-skinned apple)",
    ],
    directions: [
      "Make tart dough. Combine dry ingredients, and whisk to aerate. Add in butter and break into little clumps with fingers, mixing into the flour mixture until pea-size chunks of butter remain. Add in the egg yolk and vanilla and mix until it just comes together. Turn out onto floured surface and gently knead it together into a disc. Cover with plastic wrap and refrigerate.",
      "Bring water and sugar for the rose syrup to a boil. Rinse rose petals, and add to the syrup. Turn heat off. Set aside and let petals steep, about 20 minutes. Strain when done.",
      "For apple water, peel apples and add in 1 cup water. Bring to a simmer and let simmer until all the color is leeched from the apple peel. Remove the peel, and turn the heat off. Add the rose syrup to the apple peel water and set aside.",
      "Roll out tart dough, and line the tart pans. This recipe made 5 small tarts for me. Bake for 7-10 minutes at 410 F.",
      "Thinly (really thinly) slice 1 apple (1 apple was JUST enough to give me 5 small tarts). Layer into the apple-rose syrup and let steep a good 10 minutes.",
      "When the tart shells are done, and the apple slices have been in the syrup long enough to soften, begin rolling up apple slices into rosettes. Add slices around the outer edge to fatten up the flower. Place into the tart cups as you finish.",
      "Bake at 350 F for about 15-20 minutes. Cover tops of tarts with foil sheet if you are worried the apple is getting too browned. Meanwhile, reduce the syrup by bringing to a simmer and letting some of the water evaporate off.",
      "Let tarts cool when done. Brush the petals with the syrup reduction. For a more pronounced red color, either use more apple peel at the start, or use a little red food coloring to the syrup. I didn't add anything to mine, but to make it more authentic, I would go back and use more apple peel.",
      "Let cool completely, and enjoy!",
    ],
    notes: [""],
  },
  {
    id: 11,
    title: "Midsummer Christmas Bûche de Noël ",
    servingSize: 4,
    starRating: 4,
    type: "Desserts",
    source: "My Creation",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Buche.png").default,
    ingredients: [
      "250 grams Nagaimo (Japanese Yam)",
      "4 table spoons all purpose flour",
      "1 teaspoon salt",
      "1 table spoon canola oil",
      "3/4 table spoon rice syrup + 1.5 table spoons rice syrup",
      "3 teaspoons of vanilla extract (optional)",
      "1 avocado ",
      "1 banana",
      "1 table spoon soy milk",
      "1 block of silken tofu",
      "1 Table spoon of rice syrup",
      "0.5 cup cacao powder",
      "1 avocado ",
      "1 banana",
      "1 table spoon soy milk",
      "1 block of silken tofu",
      "1 Table spoon of rice syrup",
      "1 cup cacao powder + 0.5 cup soy milk",
      "1.5 cup coconut creme",
      "80 grams dark chocolate",
      "1 cup all purpose flour",
      "0.5 cup butter (preferably vegan butter, but I couldn't find any)",
      "110 grams walnuts",
      "70 grams almonds",
      "2 apples",
      "1 banana",
      "1 table spoon coffee powder",
      "1 table spoon rice syrup",
      "Vanilla seeds",
      "0.5 cups of white chocolate",
      "Tangerine zest",
      "The rest of the chocolate creme",
      "0.5 cup rice syrup",
      "2 cups soy milk (I used 1 but was too thick)",
    ],
    directions: [
      "Separate 4 eggs. Use a mixer to beat the eggs whites until they are fluffy and airy. Add 3/4 table spoon rice syrup and vanilla extract to egg whites. Mix well. Add egg yolks and 1 whole egg to egg white mixture. Mix well then, add in 1 teaspoon salt, 1 table spoon canola oil, 4 table spoons all purpose flour, 1.5 table spoons rice syrup and 250 grams of grated Japanese Yam. Place batter in a greased, shallow cake pan that is covered in parchment paper and bake at 200 C for 10-15 minutes. Allow to cool.",
      "Sift some cacao powder on top a clean towel and place your cake on top. Sift more cacao powder on top of the cake and begin rolling it into a log shape. Set aside.",
      "Soak 1 cup of puff rice in 1 table spoon soy milk",
      "Prepare an advocado and a banana and place in a bowl. Place fruit and 1 table spoon of soy milk into a food processor. Add in 1 block of silk tofu and 1 tablespoon of rice syrup. Repeat this process to make second cream base. Add .5 cups of cacao powder to one of your cream bases. Add soaked puff rice to the second cream base.",
      "Unroll cake log and spread a thin layer of the chocolate cream followed by a layer of the puff rice cream. Re-roll cake and wrap in plastic wrap. Refridgerate.",
      "Boil 1.5 cup coconut creme, remove from heat then add to 80 grams dark chocolate. Stir until smooth. Refridgerate for 15 minutes. Use ganache to decorate log cake until it looks realistic.",
      "Prepare 110 grams walnuts, 70 grams almonds, 2 apples, 1 banana and vanilla seeds for coffee crumble. Mash up banana and combine ingredients in a dish. Stir in 1 table spoon coffee powder and 1 table spoon rice syrup. Mix together 1 cup all purpose flour and 0.5 cup butter by hand for crumble topping. Add on top of dish. Bake at 180 C for 35 minutes. Let cool.",
      "Carefully melt 0.5 cups of white chocolate in the microwave on the lowest setting. Spread chocolate into circle molds and freeze for 20 minutes. Spread another layer of chocolate then grate some tangerine zest on top. Freeze for 20 minutes. Carmelize 0.5 cup rice syrup, add 2 cups soy milk and any leftover chocolate cream. Let cool.",
      "Fill half of the chocolate balls with coffee crumble and use low heat to close the balls. Make a small hole in each ball and fill with the chocolate filling.",
      "Plate chocolate balls on top of cake and enjoy!",
    ],
    notes: [""],
  },
  {
    id: 12,
    title: "Zoom Cocktail",
    servingSize: 1,
    starRating: 4,
    type: "Drinks",
    source: "Stolen Recipe",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Zoom.png").default,
    ingredients: ["1.5 oz of Brandy", "3/4 oz of Cream", "3/4 oz  of Honey"],
    directions: [
      "Place all ingredients into a shaker of ice. Shake well and serve in a martini glass. ",
    ],
    notes: [""],
  },
  {
    id: 13,
    title: "Gotcha Pork Roast",
    servingSize: 8,
    starRating: 4,
    type: "Mains",
    source: "My Creation",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Roast.png").default,
    ingredients: [
      "3 1/2 cubed russet potatoes",
      "3/4 cup finely chopped Eringi mushrooms",
      "3/4 cup finely chopped onion",
      "2 packs thick cut bacon",
      "2-3 sprigs fresh rosemary",
      "Baker’s twine",
      "Watercress for garnish",
      "Salt and Pepper to taste",
      "Sweet sake soy sauce (to taste)",
      "1/2 cup red cooking wine",
      "2 Tbsp butter",
    ],
    directions: [
      "First skin and cut your potatoes up into small cubes and steam them for 10-12 minutes until they are soft and squishy. In a separate pan, saute your onions and eringi mushrooms together with some extra virgin olive oil until the ingredients are golden brown and soft. Mash your potatoes by hand (or with a potato masher) and mix in your sauteed veggies.",
      "Prepare your bacon wrap by laying out your bacon strips on a baking pan with tin foil or a baking rack. Create the heart of your dish by molding your mashed potatoes into a loaf like shape. Place on your bacon strips, and carefully wrap the bacon around the potatoes. You'll need to add strips to the ends and on top to fully encapsulate this beautiful concoction.",
      "Use your twine / string to tightly wrap the Pork Roast so it does not fall apart while it bakes. When your done, break up your rosemary into small sprigs and pin it against the string and the bacon wrapped mashed potatoes.",
      "Bring your oven to 300 F and bake for 35-45 minutes until your bacon is golden browned. Broil on high for 3 minutes afterwards to make it extra crispy.",
      "Meanwhile, prepare your sauce by combining a half cup of wine, sweet soy sauce, and butter in a frying pan and let it all bubble up and combine and reduce. When that's done, you can pour it directly onto your Gotcha Pork Roast!",
      "Remove your pork roast from the oven, cut the string off, pour your reduced red wine glaze on top, and add garnish with watercress. ENJOY!",
    ],
    notes: [""],
  },
  {
    id: 14,
    title: "Vegetable Fritters",
    servingSize: 6,
    starRating: 3,
    type: "Sides",
    source: "Stolen Recipe",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Fritters.png").default,
    ingredients: [
      "60 g Scallions, Sliced",
      "100 g Carrots, Julienne",
      "100 g Taro, Julienne",
      "100 g All Purpose Flour",
      "1 Tsp Salt",
      "1 Tsp Baking Powder",
      "100 mL Water",
      "1 egg",
      "Spinach Leaves",
    ],
    directions: [
      "Mix flour, salt, baking powder and water into a bowl then mix in egg.",
      "Add in cut vegetables and spinach leaves. Mix until veggies are covered in batter",
      "Take small spoonfuls and fry in oil until crispy and golden on both sides",
      "Let stand on paper towel for 5 minutes. Enjoy with soy sauce.",
    ],
    notes: [""],
  },
  {
    id: 15,
    title: "Hujiao Bing ",
    servingSize: 12,
    starRating: 5,
    type: "Miscellaneous",
    source: "Family Recipe",
    locked: true,
    recipeImg: require("../../images/RecipeImages/Hujiao.jpg").default,
    ingredients: [
      "1 tbsp dry active yeast",
      "1 tbsp sugar",
      "2/3 cup warm water",
      "1 cup flour",
      "1 tbsp garlic powder",
      "1 tbsp star anise",
      "2 tbsp five spice powder",
      "1 tbsp freshly ground black pepper",
      "1 tbsp freshly ground white pepper",
      "1 tbsp salt",
      "1 tbsp ginger",
      "1 tbsp soy sauce",
      "1 tbsp mild sesame oil",
      "1 tbsp sesame honey",
      "1 tbsp rice wine vinegar",
      "1 lb ground pork spare ribs",
      "1 tbsp green onions",
      "1 egg",
      "1 tsp vanilla extract",
      "2/3 cup warm milk",
      "1/2 cup unsalted butter",
      "1/2 cup sugar",
      "3 cup flour",
    ],
    directions: [
      "Cominbe 2/3 cup of warm water, dry yeast and 1 tbsp sugar in a bowl. Mix. Let rest for 10 minutes. Next, mix in 1 cup of flour. Cover with plastic wrap and let sit for 45 minutes. ",
      "Dice green onions and grate ginger and add to pork. Mix in dry spices. Mix in soy sauce, sesame oil, rice wine vinegar and honey. Mix together for about 10 minutes.",
      "In a mixer, add in sugar, warm milk, vanilla extract, a room temperature egg and butter. Mix well. Mix in dough. Add 1 cup of flour to mix and mix for 3 minute. Repeat last step 2 more times. Mix well for 10 more minutes. Knead dough by hand and put dough into an oiled bowl. Cover in plastic wrap and let sit for and hour. ",
      "Flatten dough and place on a floured surface. Spread dough out and roll into a log. Separate dough into 80 g portions. Flatten out dough portions fill with meat filling. Cover filling with dough and roll into ball. Repeat with all dough portions. Place onto parchment paper and brush with egg wash (one part egg, one part milk). Top with sesame seeds.",
      "Bake in a clay oven for 20 miuntes. Let cool and enjoy.",
    ],
    notes: [""],
  },
  {
    id: 16,
    title: "Amur Cork Bear Sauce",
    servingSize: 5,
    starRating: 4,
    type: "Dips & Sauces",
    source: "My Creation",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Sauce.png").default,
    ingredients: [
      "Slowly Caramelized Amur Cork Honey",
      "Balsamic Vinegar",
      "Minced Onion (Sauteed)",
      "Sauteed Garlic",
      "Pickled Five-Flavor Berry (Simmered)",
      "Japanese Sake",
      "Bear Fond",
      "Salt",
    ],
    directions: [
      "Slowly heat the honey to caramelize it then use the balsamic to melt and thicken it.",
      "Sautee finely diced garlic and onions in a frying pan along with the five-flavor berry, letting the mixture reduce.",
      "Add the bear fond and adjust seasoning with salt.",
    ],
    notes: ["Goes particularly well with bear meat"],
  },
  {
    id: 17,
    title: "Stir-fried Water Spinach With Sichuan Pepper",
    servingSize: 6,
    starRating: 3,
    type: "Sides",
    source: "Stolen Recipe",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Spinach.png").default,
    ingredients: [
      "300 g Fresh Water Spinach",
      "A small handful of Sichuanese Dried Chilies ",
      "3 Tbsp Peanut Oil ",
      "1/2 tsp Whole Sichuan Pepper ",
      "1/4-1/2 tsp Sea Salt to taste ",
      "1 tsp Sesame Oil ",
    ],
    directions: [
      "Wash the water spinach thoroughly, discarding any wilted leaves and coarser stalks. Tear or cut into 10cm sections. Snip the chilies in half or into 2 cm sections, discarding the seeds as much as possible. ",
      "Heat the oil in a wok until hot but not smoking. Add the chilies and Sichuan pepper and stir-fry for 10 - 20 seconds until the oil smells spicy and the chilies are just beginning to turn a darker red - take care not to burn them. Add in all the spinach and stir-fry for about 3 minutes until the leaves have wilted and the stems are tender and juicy, season with salt. Finally, remove from the heat and stir in the sesame oil. Serve immediately. ",
    ],
  },
  {
    id: 18,
    title: "Transforming Furikake Gohan",
    servingSize: 3,
    starRating: 5,
    type: "Mains",
    source: "My Creation",
    locked: false,
    recipeImg: require("../../images/RecipeImages/Furikake.jpg").default,
    ingredients: [
      "8-10 chicken wings",
      "50ml soy sauce",
      "1tbsp/15grams white sugar",
      "1tbsp/15ml sake",
      "1tbsp/15ml mirin",
      "1tbsp/15g ginger, grated",
      "700ml stock, low to no salt (your choice)",
      "Vegetable oil",
      "2-3 eggs, per portion",
      "1tbsp butter, per portion",
      "Salt and pepper",
      "Hot white rice",
      "Spring onion greens, finely sliced",
    ],
    directions: [
      "In a large frying pan over medium-high heat, add 1-2tbsp of vegetable oil. Once the oil is hot and shimmering, add the chicken wings and cook for 5-6 minutes on both sides or until golden brown.",
      "Deglaze the pan with soy sauce, scraping up any fond that has built up in the pan.",
      "Transfer the chicken wings and soy sauce into a saucepan with the stock. Add in the sake, sugar, mirin, and ginger, stirring to combine.",
      "Bring the aspic to the boil, skimming off any scum that floats to the surface. Once boiling, reduce the heat to low and simmer, uncovered for 1 hour or until the liquid is reduced by half. Remove from heat and taste for seasoning.",
      "In a large frying pan over medium-high heat, add 1-2tbsp of vegetable oil. Once the oil is hot and shimmering, add the chicken wings and cook for 5-6 minutes on both sides or until golden brown.",
      "Strain the mixture before pouring into a shallow container lined with plastic wrap. Fill the container to 1cm in height, allow to cool slightly before refrigerating until firm. Reserve the chicken wings and any leftover aspic.",
      "Once firm, remove from the fridge and cut the aspic into 1cm cubes. Keep refrigerated until ready for assembly.",
      "Add 1tbsp of butter into a frying pan over medium heat. Whisk together 2-3 eggs while the butter is melting.",
      "When the butter is foamy, add the whisked eggs and continually move the eggs with a spatula or chopsticks to make curds. Rotate between cooking the eggs off and on the heat to ensure the pan doesn’t get too hot.",
      "When the eggs are cooked to your liking, season with salt and pepper and immediately assemble the final dish.",
      "Remove the bones from the reserved chicken wings and tear or cut into small pieces.",
      "Reheat the chicken in a frying pan over medium heat with vegetable oil and a tablespoon of reserved aspic.",
      "Prepare a bowl with piping hot, white rice.",
      "Scatter some aspic cubes over the rice, place a small pile of the reheated aspic and chicken meat in the centre of the bowl.",
      "Cover the chicken with your scrambled eggs, and top with more aspic cubes.",
      "Garnish with thinly sliced spring onion.",
    ],
  },
];

export default recipes;
