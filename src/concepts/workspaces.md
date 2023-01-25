# Workspaces

Workspaces are isolated spaces where you can create _graphs_, _endpoints_ and invite other users to join you. You can create _variables_ (either secret or non sensitive strings) which can then be used within your graphs by plugging them into your _nodes_.

To create a new workspace, in the sidebar, select the drop down for the workspace you are currently in and press the `Create Workspace` button. Give your workspace a name and create it. Simples.

## Inviting users to your workspace

It's easy to add your friends (or colleagues) to your workspace in NodeScript. It's only tricky when they don't already have an account - but they can sort that easily, they just need to sign up.

Use the sidebar to access your workspace `Settings`, click through to `Members`, press `Add Member` and enter their username. At the moment, this is their GitHub handle (because this is the only way to sign in atm), but we will add more ways to authenticate in the future.

## Creating and managing endpoints

All of your endpoints can be viewed in the... you guessed it... `Endpoints` sidebar. Endpoints can be very powerful and flexible, as you'll see soon, and planning out your endpoints should be an exercise which you spend some time thinking about before you rely on NodeScript for production applications.

Before we get into this, let's cover two ways you can publish an endpoint:

 - From your Graph - when you publish a graph, you will be given the option to expose it via HTTP and select a method and URL.
 - From the endpoints page. This gives you a more powerful way of customising your endpoint and also displays all the endpoints for your workspace together in one place.

The easiest way to cut a first draft is from your Graph and then come to the endpoints page to refine it. When editing an endpoint, you can:

 - Change the request method and URI (also commonly called the pathname).
 - Update the Graph which this endpoint points to.
 - Change the version of the graph which is executed when the endpoint is called. 

## Managing your workspace name

You can update your workspace name by using the `Settings` sidebar and filling in a new name for your workspace at any stage.
