/**
 * 等待一段时间
 * @param ms number
 */
export default (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
