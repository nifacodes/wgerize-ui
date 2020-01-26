/**
 * SEARCH VIEW IS MADE UP OF SEVERAL COMPONENTS
 * EACH HELPER FUNCTION IS ONE OF THOSE SMALLER COMPONENTS
 **/

// type = prev or next button
// button's state is stored in data-goto attribute with value of current page number
export const showButton = (
  page,
  type
) => `<button class="page-btn results__btn--${type}" data-goto=${
  type === "prev" ? page - 1 : page + 1
  }>
  <span>Page ${type === "prev" ? page - 1 : page + 1}</span>
  <svg class="search__icon">
      <use href="../img/icons.svg#icon-triangle-${
  type === "prev" ? "left" : "right"
  }"></use>
  </svg>
  
  </button>`;

