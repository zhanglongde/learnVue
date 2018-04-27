import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  console.log('%c-----------------------------------------------------------_init获得vm实例', 'background-color:#558;color:#fff;font-size:30px;')
  /*开始执行初始化*/
  this._init(options)
}

/*在Vue原型上定义方法*/
console.log('%c-----------------------------------------------------------初始化mixin\ninitMixin', 'background-color:#558;color:#fff;font-size:30px;')
initMixin(Vue)
console.log('%c-----------------------------------------------------------stateMixin', 'background-color:#85a;color:#fff;font-size:30px;')
stateMixin(Vue)
console.log('%c-----------------------------------------------------------eventsMixin', 'background-color:#85a;color:#fff;font-size:30px;')
eventsMixin(Vue)
console.log('%c-----------------------------------------------------------lifecycleMixin', 'background-color:#85a;color:#fff;font-size:30px;')
lifecycleMixin(Vue)
console.log('%c-----------------------------------------------------------renderMixin', 'background-color:#85a;color:#fff;font-size:30px;')
renderMixin(Vue)

export default Vue
