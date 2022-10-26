/**
 * 滚动到元素顶部
 * @param element Element
 */
export default () => (element: Element) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });
