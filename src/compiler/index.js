/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  console.log('%c-----------------------------------------------------------createCompilerCreator获取render函数', 'background-color:#85a;color:#fff;font-size:30px;')
  console.log(template)
  console.log(ast)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  console.log(code)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
