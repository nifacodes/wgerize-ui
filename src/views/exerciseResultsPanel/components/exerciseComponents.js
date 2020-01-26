import * as exerciseUtil from "../utils/exerciseUtil";
/**
 * EXERCISE VIEW IS MADE UP OF SEVERAL COMPONENTS
 * EACH HELPER FUNCTION IS ONE OF THOSE SMALLER COMPONENTS
 **/


export const getCategoryDisplay = cat => `<div class="d-flex">
<div class="exercise__cat p-4 ">
<p>CATEGORY: </p>
</div>
<div class="p-4 exercise__value ">
${cat ? exerciseUtil.getCategoryByValue(cat) : "N/A"}
</div>
</div>`

export const getEquipmentDisplay = equip => {
    let html = `<div class=" d-flex">
  <div class="exercise__cat p-4 ">
  <p>EQUIPMENT: </p>
  </div>
  <div class="p-4 exercise__value ">`;
    if (equip.length !== 0) {
        equip.forEach(function (elm, ind, arr) {
            if (ind === arr.length - 1) {
                html += `${exerciseUtil.getEquipmentById(elm)}`;
            } else {
                html += `${exerciseUtil.getEquipmentById(elm)}, `;
            }
        })
    } else {
        html += "N/A";
    }

    html += `</div></div>`;
    return html;
};

export const getDescAndImg = (desc, img) => {
    let html = `<div class="d-flex">
    <div class="exercise__cat p-4 ">
    <p>DESCRIPTION: </p>
    </div>
    <div class="p-4 exercise__value "style="">
  ${desc ? desc : "N/A"}`;

    if (img) {
        img.forEach(e => {
            html += `<div><img src="${e.image}" class=" m-2 api-img"/></div>`;
        });

    } else {
        html += "N/A";

    }

    html += `</div></div>`;
    return html;
};

export const getPrimMuscle = pm => {
    let html = `<div class="d-flex">
  <div class="exercise__cat p-4 ">
  <p>PRIMARY MUSCLE: </p>
  </div>
  <div class="p-4 exercise__value ">
  `;
    if (pm.length !== 0) {
        pm.forEach(function (elm, ind, arr) {
            if (ind === arr.length - 1) {
                html += `${exerciseUtil.getMuscleById(elm)}`;
            } else {
                html += `${exerciseUtil.getMuscleById(elm)}, `;
            }
        });

    } else {
        html += "N/A";

    }

    html += `</div></div>`;
    return html;
};


export const getSecMuscle = sm => {
    let html = `<div class="d-flex">
  <div class="exercise__cat p-4 ">
  <p>SECONDARY MUSCLE: </p>
  </div>
  <div class="p-4 exercise__value ">`;

    if (sm.length !== 0) {

        sm.forEach(function (elm, ind, arr) {
            if (ind === arr.length - 1) {
                html += `${exerciseUtil.getMuscleById(elm)}`;
            } else {
                html += `${exerciseUtil.getMuscleById(elm)}, `;
            }
        });
    } else {
        html += "N/A";

    }

    html += `</div></div>`;
    return html;
};