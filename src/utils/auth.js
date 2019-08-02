export function getCurrentAuthority() {
  return ["user"];
} //获取权限

export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
}
export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}

// const httpsBasic = "http://api.xnserve.com";//正式环境
const httpsBasic = "http://apitest.xnserve.com"; //测试环境
export default {
  httpsBasic
};
