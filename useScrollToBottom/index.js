/**
 * 滚动到元素底部
 * @param element Element
 */
export default () => (element) => element.scrollIntoView({ behavior: "smooth", block: "end" });
