---
pageClass: page-wide
---

# Working with lists

## Array expansion

Processing the lists of similar values is one of the most important tasks in computing.

NodeScript offers a unique perspective to the problem by allowing nodes to run for each element of the input array.

Let's see how it works in practice. In the following example we will greet 10 people — using just two nodes.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=Y5DOgKWl3J6mbFKz&theme=auto&zoom=.8" title="Greetings" frameborder="0" allowfullscreen></iframe>

Notice a little diamond-shaped socket on the String / Join with `x 10` next to it. It means that the node will execute for every item of the array connected to it (so 10 times in our case).

The output socket of String / Join is also diamond-shaped, which indicates that the output is now the array of strings, not just a single string value.

The "Expand" mode can be enabled for every node input individually by clicking the corresponding socket. Multiple inputs of the same node can be expanded, as in example below.

<iframe width="100%" height="520" src="https://embed.nodescript.dev/?graphId=2RPK7iAi4voA0jyi&theme=auto&zoom=.8" title="Objects" frameborder="0" allowfullscreen></iframe>

As you can see, the array of product names and the array of prices are joined by index to create 3 objects. The non-expanded property `type` is just repeated for all three objects.

**Assignments:**

- Try adding one more items to one of the arrays. Observe how only 3 objects are still produced — that's because the iteration will stop as soon as any of the arrays are exhausted.
- Try switching off "Expand" for one of the sockets. Observe how that array gets repeated.

## Filtering

Connecting multiple lists by index is not uncommon in data world.

In NodeScript this approach can be used together with Array Expansion feature to filter arrays by arbitrarily complex criteria.

To demonstrate, let's take an array of 10 random words and then find the ones that start with the letter `c`.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=MKnnX8u193hM7mlM&theme=auto&zoom=.8" title="Filter 1" frameborder="0" allowfullscreen></iframe>

We do this by first evaluating 10 boolean conditions, one for each word, and then use these 10 conditions to produce the filtered array.

Well, that was pretty easy. How about we crank it up a notch and do something slightly more arbitrary. Just for the sake of the exercise, let's find the words that are longer than the average length amongst those words.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=kzRolLG4AYHIo0Rm&theme=auto&zoom=.8" title="Filter 2" frameborder="0" allowfullscreen></iframe>

Let's go through this graph step by step.

1. We calculate the length of each string (String / Length, applied to each word).

2. This gives us an array of number, so we use that to calculate the mean (average), which is 7.7 in our case.

3. Next we calculate the boolean conditions, just like in our previous example, but with different data (we use string lengths instead of actual strings) and a different node. Importantly, this still produces 10 booleans — same size as the array we're about to filter.

4. Finally, we plug these conditions and the original array into the Filter node.

## Sorting & Grouping

Sorting and grouping are the two very common operations on the lists of objects. In NodeScript those are trivial and don't require much explanation (assuming you've followed us so far).

 <iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=37tCV8Xh1FqXI3jb&theme=auto&zoom=.8" title="Sort 2" frameborder="0" allowfullscreen></iframe>
