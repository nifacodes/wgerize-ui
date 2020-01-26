/**
 * HELPER FUNCTIONS TO PARSE/FILTER EXERCISE DATA
 */

/**
 * NAME - name of exercise
 * CATEGORY: - create a map for category and id
 * IMG: If is has one
 * DESCRIPTION -  How to perform exercise
 * EQUIPMENT - create a map for this
 * PRIMARY MUSCLES - map id
 * SECONDARY MUSCLES - map id
 * COMMENTS - tips
 *  */

export const getMuscleById = id => {
  let numToMusc = [
    "Biceps brachii",
    "Anterior deltoid",
    "Serratus anterior",
    "Pectoralis major",
    "Triceps brachii",
    "Rectus abdominis",
    "Gastrocnemius",
    "Gluteus maximus",
    "Trapezius",
    "Quadriceps femoris",
    "Biceps femoris",
    "Latissimus dorsi",
    "Brachialis",
    "Obliquus externus abdominis",
    "Soleus"
  ];

  return numToMusc[id - 1];
};

export const getEquipmentById = id => {
  let numToEquip = [
    "Barbell",
    "SZ-Bar",
    "Dumbbell",
    "Gym mat",
    "Swiss Ball",
    "Pull-up bar",
    "none (bodyweight exercise)",
    "Bench",
    "Incline bench",
    "Kettlebell"
  ];

  return numToEquip[id - 1];
};

export const getCategoryByValue = value => {
  let numToMusc = {
    Abs: 10,
    Arms: 8,
    Back: 12,
    Calves: 14,
    Chest: 11,
    Legs: 9,
    Shoulders: 13
  };
  let final = "";

  Object.keys(numToMusc).forEach(m => {
    if (numToMusc[m] === value) {
      final = m;
      return final;
    }
  });

  return final;
};
