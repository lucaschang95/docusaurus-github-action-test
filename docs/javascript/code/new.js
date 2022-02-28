/*
step:
1. 创建新对象 create new obj
2. 设置原型对象 handle prototype
3. 用apply方法执行 run constructor, this point to new obj
4. 检测是否返回了一个对象, 并返回 return new obj
*/


function newImpl(F) {
  const obj = {};
  obj.__proto__ = F.prototype;
  const args = Array.prototype.slice.call(arguments, 1);
  const result = F.apply(obj, args);
  return typeof result === 'object' ? result : obj;
}