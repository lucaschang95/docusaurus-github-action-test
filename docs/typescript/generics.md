# Generics 泛型

- want to describe a correspondence between two values



function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {

  return arr.map(func);

}



对泛型施加限制

- Type extends { length: number }