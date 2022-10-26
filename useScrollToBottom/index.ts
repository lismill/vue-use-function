/**
 * 滚动到元素底部
 * @param element Element
 */
export default () => (element: Element) =>
  element.scrollIntoView({ behavior: "smooth", block: "end" });
