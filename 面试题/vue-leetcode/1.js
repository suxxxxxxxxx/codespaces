// patches的过程，我们有哪些改变要收集呢？
// [{type:}]
// patchFlag 变量 响应式业务后生成的 哪种类型的改变
// [{type: patachFlag}]
if (patchFlag & PatchFlags.CLASS) {
  if (oldProps.class !== newProps.class) {
    hotPatchProp(el, "class", newProps.class, isSVG);
  }
}
