# How `Pick` and `Omit` keep your code DRY in TypeScript ?

## Introduction

As our TypeScript projects grow, we often find ourrself working with large interfaces especially when dealing with things like users, products, or API responses. But not every part of our application needs the full structure.

So what do developers usually do? They start creating **smaller, specialized versions** of the same interface… and that’s where duplication creeps in.

This is exactly where TypeScript’s utility types **`Pick`** and **`Omit`** come in. They let we create **clean “slices” of a master interface** without rewriting the same properties over and over again. In this blog, we’ll explore how they work and how they help keep our code **DRY (Don't Repeat Yourself)**.

---

## The problem: repeating yourself

Let’s say we have a master `User` interface:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}
```

Now imagine we need:

* A version for displaying user info (no password).
* A version for signup (no id, no createdAt).

A common (but bad) approach would be:

```ts
interface UserProfile {
  id: number;
  name: string;
  email: string;
}

interface UserSignup {
  name: string;
  email: string;
  password: string;
}
```

Looks fine… until our `User` interface changes.

Now we have to update multiple places manually. That’s **code duplication**, and it breaks the **DRY principle**.

---

## Enter `Pick`: select snly what we need

`Pick` allows we to create a new type by selecting specific properties from an existing one.

### Example:

```ts
type UserProfile = Pick<User, "id" | "name" | "email">;
```

That’s it no duplication.

If we later update the `User` interface (e.g., rename `email` to `emailAddress`), TypeScript will immediately show we where things break.

### Why this is powerful:

* No repeated property definitions.
* Always stays in sync with the source type.
* Easier to maintain.

---

## Enter `Omit`: Remove what we don’t need

`Omit` does the opposite it creates a type by **excluding specific properties**.

### Example:

```ts
type UserWithoutPassword = Omit<User, "password">;
```

This is perfect for cases like:

* Sending safe data to the frontend.
* Removing sensitive fields.

---

## Creating real "Slices" of data

Let’s build a few real world examples:

### 1. Public User Data (no sensitive info)

```ts
type PublicUser = Omit<User, "password">;
```

---

### 2. Signup Data (only required fields)

```ts
type UserSignup = Pick<User, "name" | "email" | "password">;
```

---

### 3. Update Payload (partial + selected fields)

```ts
type UserUpdate = Partial<Pick<User, "name" | "email">>;
```

Here we combined `Pick` with `Partial` another utility type to make fields optional.

---

## How this keeps our code DRY

Using `Pick` and `Omit` ensures that:

### Single source of truth

we define our structure once (`User`) and derive everything from it.

### Automatic updates

Change the base interface → all derived types update automatically.

### Less human error

No risk of forgetting a field or mismatching types.

### Cleaner codebase

Less repetition = easier to read and maintain.

---

## What happens without them?

Without `Pick` and `Omit`, our codebase can quickly become:

* Hard to maintain.
* Prone to bugs.
* Full of duplicated interfaces.

And worst of all **inconsistent**

---

## Conclusion

`Pick` and `Omit` are small tools with a big impact. They let we create flexible, reusable, and maintainable type structures without repeating ourself.

Instead of rewriting interfaces, we simply **slice** what we need from a master definition.

In short:

* Use `Pick` when we want specific fields.
* Use `Omit` when we want to exclude fields.
* Combine them with other utility types for even more flexibility.

By doing this, we follow the **DRY principle**, reduce bugs, and keep our TypeScript codebase clean and scalable.

And once we get used to this pattern it’s hard to go back.
