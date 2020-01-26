import { domelements } from "../../../helperDom";
/**
 * LIKES VIEW IS MADE UP OF SEVERAL COMPONENTS
 * EACH HELPER FUNCTION IS ONE OF THOSE SMALLER COMPONENTS
 **/

export const toggleLikeMenu = numLikes => {
    domelements.likesMenu.style.visibility = numLikes > 0 ? "visible" : "hidden";
};

export const toggleLikeBtn = (isLiked, mobileView, id) => {
    const iconString = isLiked ? "icon-heart" : "icon-heart-outlined";
    if (!mobileView) {
        return document
            .querySelector(".exercise__love use")
            .setAttribute("href", `../../../img/icons.svg#${iconString}`);
    } else {
        return document
            .getElementById(`svg${id}`)
            .setAttribute("href", `../../../img/icons.svg#${iconString}`);
    }

};

export const deleteLikeFromView = (elmSelector) => {
    const el = document.querySelector(elmSelector);
    if (el) el.parentElement.removeChild(el);
}