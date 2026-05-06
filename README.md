# 📘 TypeScript Practice & Concepts

This repository contains solutions to 7 TypeScript problems along with blog explanations on important TypeScript concepts.

---

# 🧩 Problem Solutions

## ✅ Problem 1: Filter Even Numbers

```ts
function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}

// Example
filterEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
```

---

## ✅ Problem 2: Reverse a String

```ts
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// Example
reverseString("typescript"); // "tpircsepyt"
```

---

## ✅ Problem 3: Union Type & Type Guard

```ts
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
}

// Examples
checkType("Hello"); // "String"
checkType(42);      // "Number"
```

---

## ✅ Problem 4: Generic Function with Constraints

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Example
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name"); // "John Doe"
```

---

## ✅ Problem 5: Interface & Object Extension

```ts
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true
  };
}

// Example
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024
};

toggleReadStatus(myBook);
```

---

## ✅ Problem 6: Class & Inheritance

```ts
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Example
const student = new Student("Alice", 20, "A");
student.getDetails();
```

---

## ✅ Problem 7: Array Intersection

```ts
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(num => arr2.includes(num));
}

// Example
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]); // [3, 4, 5]
```

---

# ✍️ Blog 1: `any` vs `unknown` & Type Narrowing

## 🔹 Why `any` is a "Type Safety Hole"

The `any` type disables TypeScript’s type checking:

```ts
let value: any = "Hello";

value.toUpperCase(); // ✅
value = 42;
value.toUpperCase(); // ❌ Runtime error
```

👉 TypeScript won’t warn you — bugs can slip into production.

---

## 🔹 Why `unknown` is Safer

```ts
let value: unknown = "Hello";

// value.toUpperCase(); ❌ Error
```

You must check the type first.

---

## 🔹 Type Narrowing Example

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}
```

👉 This ensures safe operations on uncertain data.

---

## 🔹 Key Takeaway

* `any` = no safety ❌
* `unknown` = safe + controlled ✅

---

# ✍️ Blog 2: Generics for Reusable & Typed Code

## 🔹 Problem Without Generics

```ts
function identity(value: any): any {
  return value;
}
```

👉 Loses type safety.

---

## 🔹 Solution Using Generics

```ts
function identity<T>(value: T): T {
  return value;
}

const text = identity("Hello"); // string
const num = identity(42);       // number
```

---

## 🔹 Generic with Constraints

```ts
function printLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

---

## 🔹 Real Example

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}
```

---

## 🔹 Key Takeaway

* Reusable ✅
* Type-safe ✅
* Scalable ✅

---

# 🚀 Conclusion

This project demonstrates:

* Core TypeScript problem-solving
* Use of generics, interfaces, and OOP
* Real-world type safety practices

It also highlights how modern TypeScript features help write **clean, maintainable, and scalable code**.

---

# 📌 Author

**Sojib Islam**

---
