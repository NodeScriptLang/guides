# Nodes

Nodes are the basic building blocks of a graph. A node on its own is comparable to a function and can be connected to each other using their _sockets_ to put together more complex logic.

Each node performs some logic to produce an output. Most nodes also have inputs that determine the output (similar to _variables_). Consider a `Sum` node that adds two numbers together (`1` (a) + `7` (b)), this would produce an output of `8`. These are represented by sockets on the Node itself, with inputs on the left and the output on the right.

In this example, our node is `Eval` which allows us to write some JavaScript which processes our inputs.

![Sum Graph](./images/nodes/nodes-output.png)

## Types of Nodes

There are two types of Nodes that you should understand the difference of:

 - **Standard Library** - these nodes cannot have their behaviour changed, they are provided by NodeScript. They provide the foundation to build more complex graphs.
 - **Modules** - these are covered in more detail [here](./modules.md), but succinctly they are ways of calling other graphs that perform their own logic.

## Adding Nodes to a Graph

When you are editing a graph, press spacebar or right click to open a menu that shows all the nodes that you can add to the canvas. You can use the search function or scroll within the menu to find the node you'd like to add.

## Inputs

Our example above as two inputs, 'a' and 'b', with a value of 1 and 7 respectively. These values are defined in the Input Settings menu found in the top left of the canvas:

![Input Settings](./images/nodes/input-settings.png)

Multiple inputs can be added, each with a different type and value assigned. The settings for each input can be reconfigured at any time via the action menu:  

![Configure Input](./images/nodes/configure-input.png)

### Datasets

Datasets can also be added in the Input settings menu. This allows different values to be added to the inputs and changed between freely.  This functionality is set up so that you always have the same inputs (like 'a' and 'b') for all your datasets, but you can change their values however you want.

**For example**, let's say you're trying to find out the sunset and sunrise times for specific locations, like Lisbon and London. You would use latitude and longitude as your inputs. You can save the latitude and longitude for Lisbon in one set, we'll call this 'Dataset 1'. Then, you can save the latitude and longitude for London in another set, which we'll call 'Dataset 2'.

![Input setting one](./images/nodes/datasets.gif)

This way, you don't need to keep looking up and copying the coordinates for these places each time you want to check the sunset and sunrise times. You just switch between 'Dataset 1' for Lisbon and 'Dataset 2' for London, and the system uses the right coordinates automatically.







