/**
 * 滚动到元素顶部
 * @param element Element
 */
export default () => (element) => element.scrollIntoView({ behavior: "smooth", block: "start" });
