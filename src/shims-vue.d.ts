// Le dice a TypeScript cómo manejar archivos .vue
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
