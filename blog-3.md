# How generics enable reusable yet strictly typed code in typeScript?

## Introduction

One of the biggest challenges in programming is finding the balance between **reusability** and **type safety**. we want to write code once and use it everywhere but without losing the benefits of strict typing.

This is exactly where **Generics** shine in TypeScript.

Generics allow we to create **flexible, reusable components and functions** that can work with different data types while still preserving full type information. In simple terms, they let we write code that adapts to the data we pass in, without falling back to unsafe types like `any`.

---

## The problem: reusability vs type safety

Imagine we want to write a function that returns whatever we pass into it.

### Without generics (bad approach):

```ts id="xk21pf"
function identity(value: any): any {
  return value;
}

const result = identity("Hello");
```

This works but we lose type safety.

* `result` is typed as `any`
* TypeScript can’t help with autocomplete or error checking

---

## Enter generics: flexible and safe

Generics let we define a **placeholder type** that gets determined when the function is used.

### Basic example:

```ts id="v0j1zp"
function identity<T>(value: T): T {
  return value;
}

const result = identity("Hello");
```

Now TypeScript understands:

* If we pass a string → we get a string
* If we pass a number → we get a number

```ts id="5z8p4y"
const num = identity(42);       // number
const text = identity("Hi");    // string
```

Same function, different types, **zero duplication**, and **full type safety**.

---

## How generics keep types intact

The key idea is:

> Generics “capture” the type we pass in and reuse it consistently.

So instead of saying “this is any type,” we are saying:

> “This is *some specific type*, and I want to preserve it.”

---

## Real world example: reusable API response

Let’s say we fetch data from different APIs.

### Without generics:

```ts id="yxtd3q"
interface ApiResponse {
  data: any;
  success: boolean;
}
```

Problem:

* `data` could be anything → unsafe

---

### With generics:

```ts id="7r2c91"
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

Now we can define responses like:

```ts id="g7l9hf"
interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  data: { id: 1, name: "Bulbul" },
  success: true,
};
```

TypeScript now knows exactly what `data` contains. No guessing.

---

## Generics in functions with constraints

Sometimes we want flexibility but with rules.

### Example: require certain properties

```ts id="d3k9pa"
function printLength<T extends { length: number }>(item: T): number {
  return item.length;
}

printLength("Hello");     // string has length
printLength([1, 2, 3]);   // array has length
```

But:

```ts id="h6zv2m"
printLength(100); // Error: number doesn't have length
```

This is called a **generic constraint** we limit what types are allowed.

---

## Generics in reusable components (react example)

Generics are widely used in component based systems like React.

```ts id="k9w2ds"
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => string;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return items.map(renderItem);
}
```

Usage:

```ts id="p8v3lm"
List({
  items: ["a", "b", "c"],
  renderItem: (item) => item.toUpperCase(),
});

List({
  items: [1, 2, 3],
  renderItem: (item) => item.toFixed(2),
});
```

Same component, different data types fully typed.

---

## Why not just use `any`?

we *could* use `any`, but then:

* we lose type inference.
* we lose autocomplete.
* we risk runtime bugs.

Generics give us **flexibility without sacrificing safety**.

---

## How generics improve your code

### Reusability

Write once, use with any data type

### Type safety

Types are preserved and enforced

### Better developer experience

Autocomplete, hints, and early error detection

### Scalability

Perfect for large codebases and shared utilities

---

## Conclusion

Generics are one of the most powerful features in TypeScript. They allow we to build **reusable, flexible, and strongly typed** code without duplication or compromise.

Instead of choosing between:

* reusable but unsafe (`any`)
* safe but rigid (hardcoded types)

Generics give we the best of both worlds.

In short:

* Generics adapt to our data
* They preserve type information
* They make our code reusable and safe

Once we start using them properly, we can notice our code becomes cleaner, smarter, and much easier to scale.