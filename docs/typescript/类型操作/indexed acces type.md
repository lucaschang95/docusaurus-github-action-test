# indexed acces type

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
```