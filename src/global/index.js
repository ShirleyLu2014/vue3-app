import registerElement from "./element-register"; // 按需引入element-plus
export function globalRegister(app) {
  app.use(registerElement);
}
