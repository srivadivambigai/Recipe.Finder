const recipes = 
    [
        {
            name: "Palkova",
            cuisine: "South Indian",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VJJ99OFoiv52L6yRGcOzZL6Pa7nkRGotFQ&s",
        
            ingredients: ["Milk", "Sugar", "Cardamom", "Ghee"],
            steps: [
                "Heat ghee in a heavy-bottomed pan.",
                "Add milk and bring it to a boil, stirring frequently.",
                "Reduce the heat and cook the milk until it thickens.",
                "Add sugar and continue to cook, stirring constantly.",
                "Add cardamom powder for flavor.",
                "Continue cooking until the mixture reduces to a thick, solid consistency.",
                "Pour into a greased tray and let it cool.",
                "Cut into pieces and serve."
            ],
            link: "https://www.amazon.com/s?k=palkova+ingredients",
            video: "https://www.youtube.com/watch?v=SIXmjEyfQ6k&pp=ygUHcGFsa292YQ%3D%3D"
        },
       
        {
            name: "Mysore Pak",
            cuisine: "South Indian",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5K59-xioNObA2a6kTYzxr8GE2e0sXr-3Snw&s",
            ingredients: ["Gram Flour", "Ghee", "Sugar", "Cardamom"],
            steps: [
                "Heat ghee in a pan and roast gram flour until fragrant.",
                "Prepare a sugar syrup with water and sugar, and let it reach a one-string consistency.",
                "Add the roasted gram flour to the syrup and mix well.",
                "Continue cooking while stirring until the mixture thickens and starts to leave the sides of the pan.",
                "Pour the mixture into a greased tray and smooth it out.",
                "Allow it to set and cut into pieces.",
                "Serve once cooled."
            ],
            link: "https://www.amazon.com/s?k=mysore+pak+ingredients",
            video: "https://www.youtube.com/watch?v=JT936-pH9vA&pp=ygUJbXVzb3IgcGFr"
        },
        {
            name: "Ladoo",
            cuisine: "South Indian",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuV0uafdnUGCsWmbC7SnW2cnd-7yGGjWDBw&s",
            ingredients: ["Besan (Chickpea Flour)", "Sugar", "Ghee", "Cardamom", "Cashews"],
            steps: [
                "Heat ghee in a pan and roast besan until it emits a nutty aroma.",
                "Prepare a sugar syrup with water and sugar, adding cardamom powder.",
                "Mix the roasted besan into the sugar syrup and stir well.",
                "Continue cooking until the mixture thickens and starts to leave the sides of the pan.",
                "Add chopped cashews for extra crunch.",
                "Pour into a greased tray and let it cool slightly.",
                "Shape into small round balls (ladoo) while still warm.",
                "Serve once cooled."
            ],
            link: "https://www.amazon.com/s?k=ladoo+ingredients",
            video: "https://www.youtube.com/watch?v=IvOIbccfj8Y&pp=ygUFbGFkb28%3D"
        },
        {
            name: "Biryani",
            cuisine: "South Indian",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGBLyHBqp2JqQoVMEZ0az6SeKbyMuC_uADQ&s",
            ingredients: ["Rice", "Chicken or Vegetables", "Yogurt", "Onions", "Tomatoes", "Biryani Masala", "Spices", "Mint Leaves", "Coriander Leaves", "Ghee or Oil"],
            steps: [
                "Wash and soak the rice in water for 30 minutes.",
                "Marinate the chicken or vegetables in yogurt and biryani masala for at least 1 hour.",
                "Heat ghee or oil in a large pot and sauté onions until golden brown.",
                "Add tomatoes and cook until they are soft and blend with the onions.",
                "Add the marinated chicken or vegetables and cook until they are fully cooked.",
                "In a separate pot, bring water to a boil, add spices, and cook the rice until it's 70% done.",
                "Layer the partially cooked rice over the cooked chicken or vegetables.",
                "Add mint leaves and coriander leaves over the top layer of rice.",
                "Cover the pot with a tight lid and cook on low heat for 20-30 minutes to allow the flavors to meld and the rice to cook fully.",
                "Gently mix the biryani before serving.",
                "Serve hot with raita or salad."
            ],
            link: "https://www.amazon.com/s?k=biryani+ingredients",
            video: "https://www.youtube.com/watch?v=Gk9GnGMaGHY&pp=ygUHYnJpeWFuaQ%3D%3D"
        },
        {
            name: "Burger",
            cuisine: "Fast Food",
            image: "https://t3.ftcdn.net/jpg/08/97/18/20/240_F_897182029_JAdXg4tcdee8IEQjREyR6Uhj3ISMkd4j.jpg",
            ingredients: ["Ground Beef or Chicken", "Burger Buns", "Lettuce", "Tomato", "Onion", "Cheese", "Ketchup", "Mustard", "Salt", "Pepper"],
            steps: [
                "Preheat a grill or skillet over medium-high heat.",
                "Season the ground beef or chicken with salt and pepper, then shape into patties.",
                "Cook the patties on the grill or skillet for about 4-5 minutes on each side, or until they reach your desired level of doneness.",
                "In the last minute of cooking, place a slice of cheese on each patty to melt.",
                "While the patties are cooking, toast the burger buns on the grill or in a toaster.",
                "Spread ketchup and mustard on the bottom half of each bun.",
                "Place the cooked patty with melted cheese on top of the sauce-covered bun.",
                "Add lettuce, tomato slices, and onion rings on top of the patty.",
                "Top with the other half of the bun.",
                "Serve the burgers hot with fries or your favorite side dish."
            ],
            link: "https://www.amazon.com/s?k=burger+ingredients",
            video: "https://www.youtube.com/watch?v=FBW0oZe37yA&pp=ygUGYnVyZ2Vy"
        },
        {
            name: "Chicken Deep Fry",
            cuisine: "Fast Food",
            image: "https://t3.ftcdn.net/jpg/08/99/07/18/240_F_899071870_o4LOTJvF5rJQYUMxGHHt0cqahw0hyxHY.jpg",
            ingredients: ["Chicken pieces", "All-purpose flour", "Cornstarch", "Eggs", "Garlic powder", "Onion powder", "Paprika", "Salt", "Pepper", "Baking powder", "Oil for frying"],
            steps: [
                "Clean and pat dry the chicken pieces.",
                "In a large bowl, mix all-purpose flour, cornstarch, garlic powder, onion powder, paprika, salt, pepper, and baking powder.",
                "In a separate bowl, whisk the eggs.",
                "Dip each chicken piece into the egg mixture, allowing any excess to drip off.",
                "Coat the chicken with the flour mixture, pressing down to ensure an even coating.",
                "Heat oil in a deep fryer or large pot to 350°F (175°C).",
                "Fry the chicken pieces in batches, being careful not to overcrowd the pan.",
                "Cook each batch for 8-10 minutes or until the chicken is golden brown and cooked through.",
                "Remove the chicken from the oil and drain on paper towels.",
                "Serve hot with your favorite dipping sauces or sides."
            ],
            link: "https://www.amazon.com/s?k=chicken+deep+fry+ingredients",
            video: "https://www.youtube.com/watch?v=j5gCu97rcYA&pp=ygUQY2hpY2tlbiBkZWVwIGZyeQ%3D%3D"
        },
        {
            name: "Pizza Cookie",
            cuisine: "Dessert",
            image: "https://t3.ftcdn.net/jpg/09/01/49/26/240_F_901492670_WTuqBBkDOmOezhh5vguVSdeMNsKdPzNb.jpg",
            ingredients: ["Cookie dough", "Chocolate chips", "Marshmallows", "Mini pepperoni", "Red and green sprinkles"],
            steps: [
                "Preheat your oven to 350°F (175°C).",
                "Prepare a pizza pan or a baking sheet by lining it with parchment paper.",
                "Spread the cookie dough evenly on the pan to form a large cookie, mimicking a pizza crust.",
                "Bake the cookie dough in the preheated oven for about 12-15 minutes, or until golden brown.",
                "Remove the pan from the oven and immediately sprinkle chocolate chips over the hot cookie.",
                "Add mini marshmallows and mini pepperoni on top of the melted chocolate chips.",
                "Return the pan to the oven for another 2-3 minutes, or until the marshmallows start to puff up.",
                "Remove from the oven and let cool slightly.",
                "Sprinkle red and green sprinkles over the top for a festive touch.",
                "Slice into wedges and serve warm."
            ],
            link: "https://www.amazon.com/s?k=pizza+cookie+ingredients",
            video: "https://www.youtube.com/watch?v=3vUtRRZG0xY&pp=ygUGY29va2ll"
        },
        {
            name: "Pizza",
            cuisine: "Italian",
            image: "https://t4.ftcdn.net/jpg/09/03/09/91/240_F_903099180_tFDpmZsA6tHrAu3UgI2lW2aLCnT9lLoy.jpg",
            ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Pepperoni", "Bell peppers", "Olives", "Onions", "Oregano", "Basil"],
            steps: [
                "Preheat your oven to 475°F (245°C).",
                "Roll out the pizza dough on a floured surface to your desired thickness and shape.",
                "Transfer the rolled-out dough to a pizza stone or baking sheet lined with parchment paper.",
                "Spread a layer of tomato sauce evenly over the dough, leaving a border around the edges.",
                "Sprinkle a generous amount of mozzarella cheese over the sauce.",
                "Add your favorite toppings such as pepperoni, bell peppers, olives, and onions.",
                "Sprinkle some oregano and fresh basil over the top for added flavor.",
                "Bake in the preheated oven for about 12-15 minutes, or until the crust is golden and the cheese is melted and bubbly.",
                "Remove from the oven and let cool for a few minutes before slicing.",
                "Serve hot and enjoy your homemade pizza!"
            ],
            link: "https://www.amazon.com/s?k=pizza+ingredients",
            video: "https://www.youtube.com/watch?v=VFBZRZ9lTsM&pp=ygUFcGl6emE%3D"
        },
        {
            name: "Almond Cake",
            cuisine: "Western",
            image: "https://t3.ftcdn.net/jpg/08/71/62/60/240_F_871626012_a63yP7ykntQZA6DcNZKlQ17Hkzqay7kD.jpg",
            ingredients: ["Almond flour", "Sugar", "Butter", "Eggs", "Vanilla extract", "Baking powder", "Salt"],
            steps: [
                "Preheat your oven to 350°F (175°C). Grease and flour a 9-inch round cake pan.",
                "In a large mixing bowl, cream together butter and sugar until light and fluffy.",
                "Beat in the eggs one at a time, mixing well after each addition.",
                "Add vanilla extract and mix until combined.",
                "In another bowl, whisk together almond flour, baking powder, and salt.",
                "Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
                "Pour the batter into the prepared cake pan and smooth the top with a spatula.",
                "Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted into the center comes out clean.",
                "Allow the cake to cool in the pan for 10 minutes, then transfer to a wire rack to cool completely.",
                "Optionally, dust with powdered sugar or top with sliced almonds before serving."
            ],
            link: "https://www.amazon.com/s?k=almond+cake+ingredients",
            video: "https://www.youtube.com/watch?v=f_pUoecb5xo&pp=ygUKYWxtb24gY2FrZQ%3D%3D"
        },
        {
            name: "Sambar",
            cuisine: "South Indian",
            image: "https://t3.ftcdn.net/jpg/09/01/75/74/240_F_901757444_aGVn5wlzKaeRd41DBz4n71o0ExT6Ixvs.jpg",
            ingredients: ["Toor dal", "Tamarind", "Mixed vegetables (carrot, potato, beans, etc.)", "Sambar powder", "Mustard seeds", "Curry leaves", "Dry red chilies", "Oil", "Salt", "Water"],
            steps: [
                "Rinse the toor dal thoroughly and cook it in a pressure cooker with enough water until soft.",
                "In a separate pot, boil the mixed vegetables until tender.",
                "Soak tamarind in warm water and extract the juice.",
                "Add the tamarind juice to the cooked dal, along with sambar powder and salt.",
                "Simmer the mixture for about 10-15 minutes to blend the flavors.",
                "In a small pan, heat oil and add mustard seeds. Let them splutter.",
                "Add dry red chilies and curry leaves to the oil, then pour this tempering over the sambar.",
                "Mix well and let the sambar simmer for another 5 minutes.",
                "Serve hot with rice, idli, or dosa."
            ],
            link: "https://www.amazon.com/s?k=sambar+ingredients",
            video: "https://www.youtube.com/watch?v=QfvFIO0Sqbw&pp=ygUGc2FtYmFy"
        },
        
        
        
        
        
        
        
    {
        name: "Butter Chicken",
        cuisine: "Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWLsZcgZ6Cn2nCJ9x1GEHDjY1E8NXbx6Nqg&s",
        ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Spices"],
        steps: [
            "Marinate the chicken with spices and yogurt.",
            "Cook the marinated chicken until fully cooked.",
            "Prepare the sauce with butter, tomato puree, and cream.",
            "Combine the chicken with the sauce and simmer for a few minutes."
        ],
        
        link: "https://www.amazon.com/s?k=BUTTER+CHICKEN+ingredients",
       
        video: "https://www.youtube.com/watch?v=EO30A86XSdM&pp=ygUVYnV0dGVyIGNoaWNrZW4gcmVjaXBl"
    },
    {
        name: "Paneer Tikka",
        cuisine: "Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlblOabPgcN7BdGxS75v07kICxafl3oCkIDA&s",
        ingredients: ["Paneer", "Yogurt", "Spices", "Bell Pepper", "Onion"],
        steps: [
            "Marinate paneer cubes with yogurt and spices.",
            "Skewer the paneer with bell peppers and onions.",
            "Grill the skewers until paneer is golden brown."
        ],
        link: "https://www.amazon.com/s?k=paneer+tikka+ingredients",
        video: "https://www.youtube.com/watch?v=GLcN-kr_5kY&pp=ygUTcGFuZWVyIHRpa2thIHJlY2lwZQ%3D%3D"
    },
    {
        name: "Masala Dosa",
        cuisine: "South Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcJFw_YnPkjSJKUZ350eIvz7Ty_aLjCWSKg&s",
        ingredients: ["Rice", "Urad Dal", "Potato", "Onion", "Spices"],
        steps: [
            "Soak rice and urad dal separately, then grind to a smooth batter.",
            "Ferment the batter overnight.",
            "Prepare the potato filling with onions and spices.",
            "Spread the batter on a hot tawa, add the filling, and cook until crispy."
        ],
        link: "https://www.amazon.com/s?k=masala+dosa+ingredients",
        video: "https://youtu.be/IDNtiYTd7_M?si=3JrSuPYGeYn2t5Gn"
    },
    {
        name: "Aloo Paratha",
        cuisine: "North Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6IqX5LP9D38t8Ez9GWne1u5j5hxB-g_xY1g&s",
        ingredients: ["Wheat Flour", "Potato", "Onion", "Spices", "Butter"],
        steps: [
            "Prepare dough with wheat flour and water.",
            "Make a spiced potato filling with mashed potatoes and spices.",
            "Stuff the dough with the potato filling and roll into parathas.",
            "Cook on a tawa with butter until golden brown."
        ],
        link: "https://www.amazon.com/s?k=aloo+paratha+ingredients",
        video: "https://youtu.be/25BaBBfbECc?si=kCEAWa8z8ff1lSGW"
    },
    {
        name: "Idli",
        cuisine: "South Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAz9HmBbhFKSI6MPssx5B6uFUWWGA2WmKVg&s",
        ingredients: ["Rice", "Urad Dal", "Fenugreek Seeds", "Salt"],
        steps: [
            "Soak rice, urad dal, and fenugreek seeds separately.",
            "Grind them to a smooth batter and ferment overnight.",
            "Pour the batter into idli molds and steam until cooked.",
            "Serve hot with chutney and sambar."
        ],
        link: "https://www.amazon.com/s?k=idli+ingredients",
        video: "https://youtu.be/VzgzG2guCZo?si=Nmrcz_3KjlSLoeCn"
    },
    {
        name: "Poha",
        cuisine: "North Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43zWWH-ipZyKs632d4mnXwewWAUmk8jWQTg&s",
        ingredients: ["Flattened Rice", "Onion", "Potato", "Peanuts", "Spices"],
        steps: [
            "Rinse the poha and drain it well.",
            "In a pan, sauté onions, potatoes, and spices.",
            "Add the poha and cook until heated through.",
            "Garnish with peanuts and coriander leaves."
        ],
        link: "https://www.amazon.com/s?k=poha+ingredients",
        video: "https://youtu.be/TtdJ6k8ZZvo?si=DVg9EiK6GeTwti-a"
    },
    {
        name: "Upma",
        cuisine: "South Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUonXVfId0fmujy17-IhWMH2v8tBGctjUnGg&s",
        ingredients: ["Semolina", "Onion", "Mustard Seeds", "Curry Leaves", "Spices"],
        steps: [
            "Roast the semolina until lightly golden.",
            "In a pan, sauté onions, mustard seeds, curry leaves, and spices.",
            "Add water and bring to a boil, then stir in the semolina.",
            "Cook until the upma is soft and fluffy."
        ],
        link: "https://www.amazon.com/s?k=upma+ingredients",
        video: "https://youtu.be/puCRuBswoCw?si=eL7b8obUWp495X2w"
    },
    {
        name: "Chole Bhature",
        cuisine: "North Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFVcYy5NPk1Ybh3N3Dk5Y1YrV_2TNNszvFw&s",
        ingredients: ["Chickpeas", "Tomato", "Onion", "Spices", "Flour"],
        steps: [
            "Soak and cook chickpeas until soft.",
            "Prepare the chole with a spiced tomato-onion gravy.",
            "Make a dough with flour, yogurt, and baking powder, and let it rest.",
            "Roll out the dough and deep fry to make bhature."
        ],
        link: "https://www.amazon.com/s?k=chole+bhature+ingredients",
        video: "https://youtu.be/3jTXQXn2DOw?si=RkQPzEJP5HITpRt9"
    },
    {
        name: "Pongal",
        cuisine: "South Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdAXF16HCiQpS3Lmgc3-_fpDzONA_I9vnfA&s",
        ingredients: ["Rice", "Moong Dal", "Ghee", "Pepper", "Cumin"],
        steps: [
            "Cook rice and moong dal together until soft.",
            "In a pan, heat ghee and add pepper, cumin, and cashews.",
            "Pour this tempering over the cooked rice and dal.",
            "Mix well and serve hot."
        ],
        link: "https://www.amazon.com/s?k=pongal+ingredients",
        video: "https://youtu.be/twXXnefqCmw?si=BpxT1uk5OOUJ8bT5"
    },
    {
        name: "Methi Thepla",
        cuisine: "North Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-i9Fd_C1ia7TwuLrWWjUNSwk7bQK0h_6fg&s",
        ingredients: ["Wheat Flour", "Fenugreek Leaves", "Spices", "Yogurt"],
        steps: [
            "Mix wheat flour, chopped fenugreek leaves, spices, and yogurt to make a dough.",
            "Roll out the dough into thin theplas.",
            "Cook on a tawa with oil until both sides are golden.",
            "Serve with yogurt or pickle."
        ],
        link: "https://www.amazon.com/s?k=methi+thepla+ingredients",
        video: "https://youtu.be/QMY96XxX5mQ?si=dnPnxIPWAo_yhfQp"
    },
    {
        name: "Appam",
        cuisine: "South Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdv-xjqmFLTzfk4G9K_0d4Z-jEgeDeaiHAhw&s",
        ingredients: ["Rice", "Coconut", "Yeast", "Salt", "Sugar"],
        steps: [
            "Soak rice and grind with coconut to a smooth batter.",
            "Add yeast, salt, and sugar, and ferment overnight.",
            "Pour the batter into an appam pan and cook until edges are crisp.",
            "Serve with stew or curry."
        ],
        link: "https://www.amazon.com/s?k=appam+ingredients",
        video: "https://youtu.be/Gt1R64E1DWU?si=5vIdyErUyxn7bb-l"
    },
    {
        name: "Paneer Paratha",
        cuisine: "North Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXyDgH_l19llHpvSFiWmJF39l0DLXGEP83g&s",
        ingredients: ["Wheat Flour", "Paneer", "Spices", "Butter"],
        steps: [
            "Prepare dough with wheat flour and water.",
            "Make a filling with crumbled paneer and spices.",
            "Stuff the dough with the paneer filling and roll into parathas.",
            "Cook on a tawa with butter until golden brown."
        ],
        link: "https://www.amazon.com/s?k=paneer+paratha+ingredients",
        video: "https://youtu.be/XOqenafARfE?si=XROBGHr-etXlfN9D"
    },
    {
        name: "Medu Vada",
        cuisine: "South Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4kKMkF03Y1lRKca3Eh_KD0guDh-zAnFwzA&s",
        ingredients: ["Urad Dal", "Onion", "Green Chili", "Curry Leaves", "Spices"],
        steps: [
            "Soak and grind urad dal to a smooth batter.",
            "Mix in chopped onions, green chilies, curry leaves, and spices.",
            "Shape the batter into vadas and deep fry until golden.",
            "Serve hot with chutney and sambar."
        ],
        link: "https://www.amazon.com/s?k=medu+vada+ingredients",
        video: "https://www.youtube.com/watch?v=oOHH3oB7OOk&pp=ygUJbWVkdSB2YWRh"
    },
    {
        name: "Kachori",
        cuisine: "North Indian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3C7KlSSWW4HlXt_Gf5arSYxO0tnvBEEoPw&s",
        ingredients: ["Flour", "Urad Dal", "Spices", "Oil"],
        steps: [
            "Prepare dough with flour, water, and oil.",
            "Make a filling with ground urad dal and spices.",
            "Stuff the dough with the filling and shape into balls.",
            "Deep fry until golden brown."
        ],
        link: "https://www.amazon.com/s?k=kachori+ingredients",
        video: "https://www.youtube.com/watch?v=ydygI3QwuwQ&pp=ygUHa2FjaG9yaQ%3D%3D"
    },
    {
        name: "Rava Idli",
        cuisine: "South Indian",
        image: "https://img.freepik.com/premium-photo/delicious-indian-dish-idli-idly-with-sambar-coconut-chutney-green-chutney_136354-18279.jpg?ga=GA1.1.362219969.1720374696&semt=ais_hybrid",
        ingredients: ["Semolina", "Yogurt", "Baking Soda", "Spices"],
        steps: [
            "Roast the semolina until lightly golden.",
            "Mix with yogurt, baking soda, and spices.",
            "Pour the batter into idli molds and steam until cooked.",
            "Serve hot with chutney and sambar."
        ],
        link: "https://www.amazon.com/s?k=rava+idli+ingredients",
        video: "https://www.youtube.com/watch?v=X0Fl_FhKKzU&pp=ygUKcmF2YSBpZGxpIA%3D%3D"
    },
    {
        name: "Pesarattu",
        cuisine: "South Indian",
        image: "https://img.freepik.com/premium-photo/finger-millet-ora-a-ragi-dosaa-a-is-healthy-indian-breakfast-served-with-chutney-roll-flat-cone-shape_466689-50475.jpg?ga=GA1.1.362219969.1720374696&semt=ais_hybrid",
        ingredients: ["Green Gram", "Rice", "Onion", "Green Chili", "Ginger"],
        steps: [
            "Soak and grind green gram and rice to a smooth batter.",
            "Mix in chopped onions, green chilies, and ginger.",
            "Spread the batter on a hot tawa and cook until crispy.",
            "Serve hot with chutney."
        ],
        link: "https://www.amazon.com/s?k=pesarattu+ingredienthttps://www.youtube.com/watch?v=ZOTgfPwBivA&pp=ygUJUGVzYXJhdHR1"
    },
    {
        name: "Bhakri",
        cuisine: "North Indian",
        image: "https://media.istockphoto.com/id/2126806722/photo/healthy-super-food-ragi-roti-with-raw-ragi-and-flour-selective-focus.jpg?b=1&s=612x612&w=0&k=20&c=DmbQsB232LUX1IEB_6gDRFFETtrJHRAgWo1cWzNZjRA=",  ingredients: ["Millet Flour", "Water", "Salt"],
        steps: [
            "Mix millet flour with water and salt to make a dough.",
            "Roll out the dough into thick flatbreads.",
            "Cook on a tawa until both sides are golden.",
            "Serve hot with chutney or curry."
        ],
        link: "https://www.amazon.com/s?k=bhakri+ingredients",
        video: "https://www.youtube.com/watch?v=GvfQHrm64dM&pp=ygUGQmhha3Jp"
    },
    {
        name: "Neer Dosa",
        cuisine: "South Indian",
        image: "https://images.pexels.com/photos/15698206/pexels-photo-15698206/free-photo-of-top-view-of-a-dosa-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=400",
         ingredients: ["Rice", "Coconut", "Salt"],
        steps: [
            "Soak rice and grind with coconut to a thin batter.",
            "Add salt and let it rest for a few hours.",
            "Pour the batter on a hot tawa and cook until soft.",
            "Serve with chutney or curry."
        ],
        link: "https://www.amazon.com/s?k=neer+dosa+ingredients",
        video: "https://www.youtube.com/watch?v=UGvixjl9ik4&pp=ygUJbmVlciBkb3Nh"
    },
    {
        name: "Mooli Paratha",
        cuisine: "North Indian",
        image: "https://t4.ftcdn.net/jpg/01/43/10/15/240_F_143101556_JDnEqvslg3wAmc9hdWBWB5A2QXtmlQYv.jpg",  ingredients: ["Wheat Flour", "Radish", "Spices", "Butter"],
        steps: [
            "Prepare dough with wheat flour and water.",
            "Grate radish and mix with spices to make the filling.",
            "Stuff the dough with the radish filling and roll into parathas.",
            "Cook on a tawa with butter until golden brown."
        ],
        link: "https://www.amazon.com/s?k=mooli+paratha+ingredients",
        video: "https://www.youtube.com/watch?v=SGW_svHzzeE&pp=ygUNbW9vbGkgcGFyYXRoYQ%3D%3D"
    },
    {
        name: "Uttapam",
        cuisine: "South Indian",
        image:"https://b.zmtcdn.com/data/o2_assets/7ab7679bbd422b52205ba598502674291632716549.png",
            steps: [
            "Soak rice and urad dal separately, then grind to a smooth batter.",
            "Ferment the batter overnight.",
            "Spread the batter on a hot tawa and top with chopped onions, tomatoes, and spices.",
            "Cook until both sides are golden brown."
        ],
        link: "https://www.amazon.com/s?k=uttapam+ingredients",
        video: "https://www.youtube.com/watch?v=BiO1SXyRAs4&pp=ygUHdXR0YXBhbQ%3D%3D"
    },
    
    
    
];

const reviews = [];

function signUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        document.getElementById('signup-container').classList.add('hidden');
        document.getElementById('search-container').classList.remove('hidden');
        displayRecipes(recipes);  // Display recipes on initial sign-in
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    } else {
        alert("Please fill out all fields.");
    }
    

}

function searchRecipes() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchInput) || 
        recipe.cuisine.toLowerCase().includes(searchInput)
    );
    displayRecipes(filteredRecipes);
}

function displayRecipes(recipes) {
    const recipeContainer = document.getElementById('recipes');
    recipeContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.style.backgroundImage = `url(${recipe.image})`;

        const recipeName = document.createElement('div');
        recipeName.classList.add('recipe-name');
        recipeName.textContent = recipe.name;

        recipeElement.appendChild(recipeName);
        recipeElement.onclick = () => showRecipeDetail(recipe);
        recipeContainer.appendChild(recipeElement);
    });
}

function showRecipeDetail(recipe) {
    document.getElementById('search-container').classList.add('hidden');
    document.getElementById('recipe-detail-container').classList.remove('hidden');

    const recipeDetail = document.getElementById('recipe-detail');
    recipeDetail.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h3>Steps</h3>
        <ol>${recipe.steps.map(step => `<li>${step}</li>`).join('')}</ol>
        <h3> Amazon Link For Ingredients</h3>
        <a href="${recipe.link}" target="_blank">Buy Ingredients (click here)</a> <br>
        <h3> Youtube Link For Your Referencev</h3>
         <a href="${recipe.video}" target="_blank">Watch The Youtube Video For Your Reference(click here)</a> <br>
        <h1> HOPE YOU ENJOY YOUR FEAST 😊🤗</h1>
    
        
    `;
}

function showSearchPage() {
    document.getElementById('recipe-detail-container').classList.add('hidden');
    document.getElementById('search-container').classList.remove('hidden');
}

function toggleSubmitRecipe() {
    const submitRecipeContainer = document.getElementById('submit-recipe-container');
    submitRecipeContainer.classList.toggle('hidden');
}

function submitRecipe() {
    const name = document.getElementById('recipe-name').value;
    const cuisine = document.getElementById('recipe-cuisine').value;
    const image = document.getElementById('recipe-image').value;
    const ingredients = document.getElementById('recipe-ingredients').value.split(',');
    const steps = document.getElementById('recipe-steps').value.split('\n');
    const video = document.getElementById('recipe-video').value;
    const url = document.getElementById('recipe-int').value;
    if (name && cuisine && image && ingredients.length && steps.length && url) {
        recipes.push({ name, cuisine, image, ingredients, steps, video,url });

        // Hide the submit recipe container
        document.getElementById('submit-recipe-container').classList.add('hidden');
        alert("kindly give others a appropriate dish recipe")
        // Refresh the recipe list on the homepage
        displayRecipes(recipes);
    } else {
        alert("Please fill out all fields.");
    }
}

function submitReview() {
    const reviewText = document.getElementById('review-text').value;
    if (reviewText) {
        reviews.push(reviewText);
        displayReviews();
    } else {
        alert("Please write a review.");
    }
}

function displayReviews() {
    const reviewContainer = document.getElementById('reviews');
    reviewContainer.innerHTML = '';

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.textContent = review;
        reviewContainer.appendChild(reviewElement);
    });
}

// Display recipes on page load
displayRecipes(recipes)
document.getElementById("signup-container").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    try {
      const response = await fetch("http://localhost:5000/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const val = await response.json();
      console.log(val);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("Successfully got the response");
    }
  
    console.log(name, email, password);
  });
  
