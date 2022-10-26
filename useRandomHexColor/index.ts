/**
 * 随机生成hex颜色
 */
export default () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
