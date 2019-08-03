import _ from "lodash";
import "./index.css";
import ShadowImg from "./road_trees_shadow.jpg";

const component = () => {
    /* eslint-disable-next-line no-undef */
    const element = document.createElement("div");
    const Shadow = new Image();
    Shadow.src = ShadowImg;
    element.appendChild(Shadow);
    /* Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的 */
    element.innerHTML = _.join(["Hello", "webpack", "I am changed"], " ");
    element.classList.add("test");
    return element;
};
/* eslint-disable-next-line no-undef */
document.body.appendChild(component());
