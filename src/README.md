# Introduction

NodeScript is a visual node-based automation platform for building scalable applications directly in your browser.

With NodeScript you can:

- explore and integrate different APIs
- combine and process data from multiple sources
- publish your automations as an endpoint and make them instantly available for other applications over the web
- set up automations to run on schedule (e.g. every minute or every two weeks)
- create reusable modules that can be used by others
- build a library of snippets that you can run directly in your browser and share with friends
- and many more!

Here is a minimal example:

<iframe width="100%" height="512" src="https://embed.nodescript.dev/?graphId=19OmbEFN9CY4oEQ6&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

The above example, while contrived, demonstrates a few important aspects of NodeScript:

- automations are _graphs_ that consist of _nodes_ and _connections_ between them
- each node produces an _output_ value that can be used as an _input_ of another node
- the nodes are automatically re-evaluated when their inputs change, allowing you to reason about data as it flows through the nodes

You may already have questions — don't worry, we will cover all the details in the rest of the documentation.

## Key features

- **Composability.** The power of NodeScript comes from being able to compose complex functionality from simpler building blocks. Once you build a graph that solves a particular problem, you can publish it as a module to use in your other graphs.

- **Instant feedback.** Being able to see what data flows in and out of the nodes reduces the feedback loop and facilitates the thought process by engaging the creative part of the brain. In practice this means you will be able to quickly come up with the ideas and instantly validate them.

- **Open source.** At its core NodeScript is an [open source](https://github.com/nodeScriptLang/core) visual programming language. The modules you build remain _yours forever_: you can easily download the compiled versions of any of your graphs and run them in your own runtime. Read more about this in the [Technical Overview](./technical-overview.md).

- **Free to run in your browser.** When you edit the graphs they are compiled and evaluated directly in your browser's runtime. As a team, we are committed to keeping the editor environment free of charge.

    You can use the editor to create "attended automations" (i.e. the ones that require human presence), build a library of snippets (e.g. automate various HTTP calls that you used to do with `curl`), interactively explore the APIs, fetch and process data, etc.

- **Instant scalability**. When you expose your graph as an endpoint, we will auto-provision a best suited backend for you depending on your billing plan and scale — all in a matter of seconds. You do not have to worry about setting up the infrastructure, we take care of that for you.
