# 初次渲染

先创建 root ( createRoot )

之后调用根节点的 render 方法

执行更新

updateContainer

## updateContainer

1. 获取 current fiber
2. 创建一个 update
3. update 进入队列
4. 处理 update 更新
5. 处理非紧急的 transition·