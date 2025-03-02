import { ZodiacData, ZodiacSigns } from "../types/sign";

export const zodiacSigns = [
  "rat",
  "ox",
  "tiger",
  "rabbit",
  "dragon",
  "snake",
  "horse",
  "goat",
  "monkey",
  "rooster",
  "dog",
  "pig",
] as const;

export const zodiacData: { [key in ZodiacSigns]: ZodiacData } = {
  rat: {
    sign: "Rat",
    traits: ["Intelligent", "Resourceful", "Adaptable", "Quick-witted"],
    element: "Water",
    yin_yang: "Yang",
    compatibility: {
      best_matches: ["Ox", "Dragon", "Monkey"],
      least_matches: ["Horse", "Rooster"],
    },
    lucky_aspects: {
      numbers: [2, 3],
      colors: ["Blue", "Gold", "Green"],
      flowers: ["Lily", "African Violet"],
      directions: ["North", "West"],
    },
  },
  ox: {
    sign: "Ox",
    traits: ["Diligent", "Dependable", "Strong-willed"],
    element: "Earth",
    yin_yang: "Yin",
    compatibility: {
      best_matches: ["Rat", "Snake", "Rooster"],
      least_matches: ["Goat", "Horse"],
    },
    lucky_aspects: {
      numbers: [1, 4],
      colors: ["Yellow", "White", "Green"],
      flowers: ["Tulip", "Peach Blossom"],
      directions: ["North", "South"],
    },
  },
  tiger: {
    sign: "Tiger",
    traits: ["Brave", "Confident", "Charismatic"],
    element: "Wood",
    yin_yang: "Yang",
    compatibility: {
      best_matches: ["Horse", "Dog", "Pig"],
      least_matches: ["Monkey", "Snake"],
    },
    lucky_aspects: {
      numbers: [1, 3, 4],
      colors: ["Blue", "Gray", "Orange"],
      flowers: ["Cineraria"],
      directions: ["East", "South"],
    },
  },
  rabbit: {
    sign: "Rabbit",
    traits: ["Gentle", "Compassionate", "Diplomatic"],
    element: "Wood",
    yin_yang: "Yin",
    compatibility: {
      best_matches: ["Goat", "Dog", "Pig"],
      least_matches: ["Rooster", "Rat"],
    },
    lucky_aspects: {
      numbers: [3, 4, 6],
      colors: ["Pink", "Purple", "Red"],
      flowers: ["Plantain Lily", "Jasmine"],
      directions: ["East", "South"],
    },
  },
  dragon: {
    sign: "Dragon",
    traits: ["Charismatic", "Confident", "Ambitious", "Energetic"],
    element: "Earth",
    yin_yang: "Yang",
    compatibility: {
      best_matches: ["Rat", "Monkey", "Rooster"],
      least_matches: ["Dog", "Rabbit"],
    },
    lucky_aspects: {
      numbers: [1, 6, 7],
      colors: ["Gold", "Silver", "Gray"],
      flowers: ["Bleeding Heart Vine", "Dragon Flower"],
      directions: ["East", "South"],
    },
  },
  snake: {
    sign: "Snake",
    traits: ["Wise", "Intuitive", "Elegant", "Thoughtful"],
    element: "Fire",
    yin_yang: "Yin",
    compatibility: {
      best_matches: ["Ox", "Rooster", "Monkey"],
      least_matches: ["Tiger", "Pig"],
    },
    lucky_aspects: {
      numbers: [2, 8, 9],
      colors: ["Red", "Black", "Yellow"],
      flowers: ["Orchid", "Cactus"],
      directions: ["South", "Southwest"],
    },
  },
  horse: {
    sign: "Horse",
    traits: ["Energetic", "Independent", "Adventurous", "Warm-hearted"],
    element: "Fire",
    yin_yang: "Yang",
    compatibility: {
      best_matches: ["Tiger", "Goat", "Dog"],
      least_matches: ["Rat", "Ox"],
    },
    lucky_aspects: {
      numbers: [2, 3, 7],
      colors: ["Green", "Yellow", "Purple"],
      flowers: ["Calla Lily", "Jasmine"],
      directions: ["South", "East"],
    },
  },
  goat: {
    sign: "Goat",
    traits: ["Gentle", "Compassionate", "Creative", "Artistic"],
    element: "Earth",
    yin_yang: "Yin",
    compatibility: {
      best_matches: ["Rabbit", "Horse", "Pig"],
      least_matches: ["Ox", "Dog"],
    },
    lucky_aspects: {
      numbers: [2, 7],
      colors: ["Green", "Brown", "Red"],
      flowers: ["Carnation", "Primrose"],
      directions: ["South", "East"],
    },
  },
  monkey: {
    sign: "Monkey",
    traits: ["Clever", "Innovative", "Witty", "Versatile"],
    element: "Metal",
    yin_yang: "Yang",
    compatibility: {
      best_matches: ["Rat", "Dragon", "Snake"],
      least_matches: ["Tiger", "Pig"],
    },
    lucky_aspects: {
      numbers: [4, 9],
      colors: ["White", "Blue", "Gold"],
      flowers: ["Chrysanthemum", "Crape-myrtle"],
      directions: ["North", "Northwest"],
    },
  },
  rooster: {
    sign: "Rooster",
    traits: ["Observant", "Hardworking", "Courageous", "Talented"],
    element: "Metal",
    yin_yang: "Yin",
    compatibility: {
      best_matches: ["Ox", "Snake", "Dragon"],
      least_matches: ["Rabbit", "Dog"],
    },
    lucky_aspects: {
      numbers: [5, 7, 8],
      colors: ["Gold", "Brown", "Yellow"],
      flowers: ["Gladiola", "Cockscomb"],
      directions: ["South", "Southeast"],
    },
  },
  dog: {
    sign: "Dog",
    traits: ["Loyal", "Honest", "Reliable", "Protective"],
    element: "Earth",
    yin_yang: "Yang",
    compatibility: {
      best_matches: ["Tiger", "Rabbit", "Horse"],
      least_matches: ["Dragon", "Goat"],
    },
    lucky_aspects: {
      numbers: [3, 4, 9],
      colors: ["Green", "Red", "Purple"],
      flowers: ["Rose", "Cymbidium Orchids"],
      directions: ["East", "Southeast"],
    },
  },
  pig: {
    sign: "Pig",
    traits: ["Kind", "Generous", "Optimistic", "Honest"],
    element: "Water",
    yin_yang: "Yin",
    compatibility: {
      best_matches: ["Tiger", "Rabbit", "Goat"],
      least_matches: ["Snake", "Monkey"],
    },
    lucky_aspects: {
      numbers: [2, 5, 8],
      colors: ["Yellow", "Gray", "Brown"],
      flowers: ["Hydrangea", "Daisy"],
      directions: ["East", "Southwest"],
    },
  },
};
