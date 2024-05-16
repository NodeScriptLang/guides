---
pageClass: page-wide
---

# JSON essentials

JSON is the lingua franca of the modern web. Almost all the modern services speak JSON "natively", thus it's very important to be able to produce JSON data in the exact shape and form required.

## Basic types

JSON only have a handful of data types:

- string, e.g. <code style="color: var(--color-type-string-alt)">"Some Text"</code>
- number, e.g. <code style="color: var(--color-type-number-alt)">42</code>
- boolean, <code style="color: var(--color-type-boolean-alt)">true</code> or <code style="color: var(--color-type-boolean-alt)">false</code>
- null, indicates the absence of value
- array, a list containing other JSON values, enclosed in square brackets, e.g. <code style="color: var(--color-type-array-alt)">[1, 2, "some text", true]</code>
- object, a series of key-value pairs group together, enclosed in curly braces, e.g. <code style="color: var(--color-type-object-alt)">{ "name": "Joe", age: 42 }</code>

NodeScript has a node for each of these.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=QDWAWDDIDO81tQjt&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

**Assignments**:

- select an Array node, click <kbd>+</kbd> or <kbd>&times;</kbd> to add/remove elements
- connect the rest of the values into the Object node, observe how the output of the Object changes
- add/remove object keys
- try expanding the results of Array and Object

## Type conversion

As you might've noticed, each node input has a specific type designated by the color of the "dot" (we refer to those as sockets).

So for example, String node accepts a value of type <code style="color: var(--color-type-string-alt)">string</code>, so you can use it to quickly convert other data type into a string.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=0pZSU9ALWcGGJh5s&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

Here, when number <code style="color: var(--color-type-number-alt)">42</code> is connected to a String, the value becomes <code style="color: var(--color-type-string-alt)">"42"</code>.

The same works in reverse: <code style="color: var(--color-type-string-alt)">"42"</code> string literal becomes a number <code style="color: var(--color-type-number-alt)">42</code> when the nodes are connected the other way around.

Obviously, not all the strings can be converted to number, so the value <code style="color: var(--color-type-string-alt)">"Not a number"</code> produced an error when plugged into a Number node.

<p class="info">
Since each node knows what data type it expects, most of the time explicit type conversion is not required. However, in some cases it might be necessary (for example, some APIs may do strict data type checks).
</p>

**Assignments:**

- Add a Boolean node by Right-clicking on the canvas and typing <code>Boolean</code>.
- Connect the result of a Boolean into a String and see if it works.
- Try connecting them the other way around.

## Any type

A lot of nodes will have a gray input socket, indicating that it would accept `any` type.

One such example is an Array node. It has a single input of type <code style="color: var(--color-type-array-alt)">array</code>, but each item inside the array has type `any`.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=JFctspmzer9d4VlL&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

When the value is plugged into a socket with `any` type, no type conversion occurs. So both <code style="color: var(--color-type-string-alt)">"42"</code> and <code style="color: var(--color-type-number-alt)">42</code> stay exactly as they are.

However, for convenience, the values you type directly into the text fields of type `any` are auto-converted to the most appropriate type.

**Assignments:**

- expand the result of the Array node, note the data type of each array item

## Nested objects and arrays

JSON objects and arrays are _compound_ types, meaning they can be composed of other data types, including other objects and arrays. Objects occurring within other objects are often referred to as "nested".

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=19pEAyllZC0t0jaU&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

Simple nested objects can also be composed with just an Object node by using `.` in the key.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=VvxxKvp7VTNJ5eQP&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

## Accessing values

It is oftentimes useful to access individual elements of the nested objects.

There are two ways to do it:

1. Simply expand the node output and "drag out" the value of interest — this will create an additional output as is seen below.
2. Use Object / Get node and specify the `key` that you want to extract.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=gaYdFAMcD12EduaL&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>
