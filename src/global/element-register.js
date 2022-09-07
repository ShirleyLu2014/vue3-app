import "element-plus/theme-chalk/base.css";
import "element-plus/theme-chalk/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { toLine } from "@/utils";
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElRow,
  ElCol,
} from "element-plus/lib/index";
const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElRow,
  ElCol,
];
export default function registerElement(app) {
  // 注册组件
  for (const component of components) {
    app.component(component.name, component);
  }
  // 注册图标
  for (const key in ElementPlusIconsVue) {
    app.component(`el-icon-${toLine(key)}`, ElementPlusIconsVue[key]);
  }
}
