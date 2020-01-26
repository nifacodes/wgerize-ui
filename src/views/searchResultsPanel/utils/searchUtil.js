/**
 * HELPER FUNCTIONS TO PARSE/FILTER SEARCH DATA
 */


/**
 * "Apple And Almond Butter Pie "
 * acc: 0 / acc + curr.length = 5 / newtitle = ['Apple']
 * acc: 5 / acc + curr.length = 8 / newtitle = ['Apple', And]
 * acc: 8 / acc + curr.length = 14 / newtitle = ['Apple', 'and', 'almond']
 * acc: 14 / acc + curr.length = 20 / newtitle = limit reached
 */

export const shortResults = (res, lim = 14) => {
  const newTitle = [];
  if (res.length >= lim) {
    res.split(" ").reduce((acc, curr) => {
      if (acc + curr.length <= lim) {
        newTitle.push(curr);
      }

      return acc + curr.length;
    }, 0);

    return `${newTitle.join(" ")} ...`;
  }

  return res;
};

export const shortResultsAuth = (res, lim = 14) => {
  let newTitle = "";
  for (var i = 0; i < res.length; i++) {
    if (i < lim) {
      newTitle += res[i];
    }
  }
  if (res.length > lim) {
    newTitle = newTitle + "...";
  }

  return newTitle;
};

export const getInitials = title => {
  const titleSplit = title.split(" ");
  const firstLetter = titleSplit[0][0];
  const lastLetter = titleSplit[titleSplit.length - 1][0];
  return { first: firstLetter, last: lastLetter };
};