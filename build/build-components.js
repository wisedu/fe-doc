var fs = require('fs');
var path = require('path');

var packageJSON = JSON.parse(fs.readFileSync("./package.json"));

var OUTPUT_PATH = path.join(__dirname, '../src/components.js')
var components = [];
var cmpPath = 'src/markdown/';

// 根据目录生成vue文件名: 'bh-button' -> 'bhButton'
// 所以组件和目录命名要遵循此规则
fs.readdirSync(cmpPath).forEach((dir) => {
  // 跳过隐藏文件
  if (dir.indexOf('.') === 0) return
  const subPath = cmpPath + dir
  // 跳过非文件夹
  if (!fs.statSync(subPath).isDirectory()) return
  fs.readdirSync(subPath).forEach((subDir) => {
    // 跳过隐藏文件 和 非md文件
    if (subDir.indexOf('.') === 0 || !subDir.endsWith(".md")) return
    const name = subDir.replace(/\.md$/, '')
    const itemPath = ""
    const componentName = name + '-' + dir
    const vueClassName = componentName.replace(/(-\w)/g, (val) => {
      return val.substring('1').replace(/(\w)/, (first) => {
        return first.toUpperCase();
      });
    }).replace(/^\w/, val => {
      return val.toUpperCase()
    })
    components.push({
      path: cmpPath.replace('src', '.') + dir + '/' + subDir,
      componentName: componentName,
      vueClassName: vueClassName,
      route: dir,
      subRoute: name
    });
  })
});

let jsImport = [];
let jsClass = [];
components.forEach(item => {
  resolve => require(['../pages/catCircle/circleCategoryList'], resolve)
  jsImport.push('const ' + item.vueClassName + ' = resolve => require([\'' + item.path + '\'], resolve)')
  jsClass.push(`Vue.component('${item.componentName}', ${item.vueClassName});`);
});

let template = `import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import PcView from './pages/pc-view'
import MobileView from './pages/mobile-view'
import MobileProjectList from './pages/mobile-projectlist'
import MobileProject from './pages/mobile-project'
import Ceils from './pages/ceils'
import NotFoundComponent from './pages/NotFoundComponent'
${jsImport.join("\r\n")}

Vue.use(Router)

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    ${jsClass.join('\n')}
};

${buildRouter(components)}

export default {install, router}`

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:' + OUTPUT_PATH);

function buildRouter(components) {
  const routes = []
  components.map(item => {
    let route = routes.find(r => r.path === ('/' + item.route))
    if (!route) {
      route = { path: '/' + item.route, component: '@' + item.route.replace(/^\w/, val => val.toUpperCase()) + 'View@', children: [] }
      routes.push(route)
    }
    let ri = { name: item.vueClassName, component: '@' + item.vueClassName + '@', path: item.subRoute}
    if (item.subRoute === "README") {
      ri.path = "/";
    }
    route.children.push(ri)
  })

  routes.find(r => r.path.replace('/', '') === 'mobile').children.push({
    "name": "CeilsMobile",
    "component": '@Ceils@',
    "path": "ceils"
  })

  routes.push({
    "name": "home",
    "component": "@Home@",
    "path": "/"
  },{
    "name": "mobile-project",
    "component": "@MobileProject@",
    "path": "/mobile-project"
  },{
    "name": "mobile-projectlist",
    "component": "@MobileProjectList@",
    "path": "/mobile-projectlist"
  },{
    "component": "@NotFoundComponent@",
    "path": "*"
  })

  return `const router = new Router({
    mode: 'history',
    routes: ${JSON.stringify(routes).replace(/(\'|\")?@(\'|\")?/g, '')}
  })`
}
