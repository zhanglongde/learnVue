# learnVue
Vue source code

运行时与编译器在platforms的entry-runtime-with-compiler进行组装
Vue.prototype.$mount，其中Vue为运行时

模板更新通过updateComponent传递给Watcher实例的getter函数
updateComponent内部执行vm._update

_update依赖模板编译渲染函数render
vm._update(vm._render(), hydrating)

vm._update内部执行DOM diff并打补丁更新DOM
vm.$el = vm.__patch__(prevVnode, vnode)，并区分首次和更新

模板编译render函数
render函数将this._data数据绑定到模板上，从而触发getter,进而depend()


v-model实现
1.v-model通过VNode监听input事件实现，事件回调中进行set操作，触发数据双向绑定的setter
2.通过模板渲染render,将数据绑定到模板上，触发getter



Vue实例构建
1.初始化各种mixin
2.new Vue()时，执行实例的_init()
3.执行生命周期前期以及this._data可观察绑定
4.通过vm实例,进行模板编译$mount



Watcher类
depend()
  Dep.target限制
update() 模板更新



Observe
walk()遍历this._data 进行响应式数据绑定



defineReactive
getter()
  depend添加watcher实例到Dep.subs
setter()
  执行notify 循环Dep.subs执行update() queueWatcher