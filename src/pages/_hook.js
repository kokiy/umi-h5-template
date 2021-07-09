const effectStack = []

function subscribe(effect, subs) {
  // 订阅关系建立
  subs.add(effect)
  // 依赖关系建立
  effect.deps.add(subs)
}

export const useState = value => {
  // 订阅列表
  const subs = new Set()

  const getter = () => {
    const effect = effectStack[effectStack.length - 1]
    if (effect) {
      // 建立联系
      subscribe(effect, subs)
    }
    return value
  }
  const setter = newValue => {
    value = newValue
    for (const sub of [...subs]) {
      sub.execute()
    }
  }
  return [getter, setter]
}

const cleanup = effect => {
  // 将该effect订阅的所有state变化移除
  for (const dep of effect.deps) {
    dep.delete(effect)
  }
  // 将该effect依赖的所有state移除
  effect.deps.clear()
}

// 当前正在执行effect的栈

export const useEffect = fn => {
  let effect
  const execute = () => {
    // 重置依赖
    cleanup(effect)
    // 推入栈顶
    effectStack.push(effect)

    try {
      fn()
    } finally {
      // 出栈
      effectStack.pop()
    }
  }

  effect = {
    execute,
    deps: new Set(),
  }
  // 立刻执行一次，建立依赖关系
  execute()
}
