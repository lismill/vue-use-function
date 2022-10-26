/**
 * 获取URL中的参数
 * @param key string
 * @param href string
 */
export default (key, href = location.href) => new URL(href).searchParams.get(key);
