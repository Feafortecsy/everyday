import _ from "lodash";
const component = () => {
    /* eslint-disable-next-line no-undef */
    const element = document.createElement("div");
    /* Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的 */
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    return element;
};
/* eslint-disable-next-line no-undef */
document.body.appendChild(component());
