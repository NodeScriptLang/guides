# Introduction

Welcome to NodeScript, a platform designed to streamline workflow automation and API integration processes. With NodeScript, you can effortlessly connect APIs and online services without the need for extensive coding knowledge.

The visual interface allows you to easily design, manage, and maintain complex workflows that can be shared and collaborated on across teams. NodeScript aims to simplify intergrarion and automation process, making it more efficient and accessible for all users.

Here are a few key points we want you to keep in mind during this period:
* **Executing graphs in the editor is absolutely free:** Feel free to execute your graph as many times as you like while building and testing.
* **Rate Limits:** During this testing period, each workspace is limited to 1000 endpoint invocations per hour. Please note that our rate limits may be subject to change while we fine-tune our system to provide the best performance while maintaining stability.
* **Negotiable Limits:** We understand that the needs of every user are different. If you find yourself needing a higher rate limit, please let us know. We're open to discussion and will do our best to accommodate your needs.
* **Be Creative:** Test the limits and capabilities of the toolset. Use NodeScript to improve an existing project, solve a problem you've been sitting on, or build something totally new.


## How does it work?

At its core, NodeScript is a node-based visual programming language that enables users to create flow-based [graphs](./graphs.md), which can then be executed in real-world scenarios through an [endpoint](./endpoints.md).

<style>
  .video_container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* Aspect ratio 16:9 */
    right: 40px;
    overflow: hidden;
  }

  .video_container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    .video_container {
      padding-bottom: 75%; /* Aspect ratio 4:3 for smaller screens */
    }
  }
</style>

<figure class="video_container">
  <iframe src="https://drive.google.com/file/d/1NjlDH_5YYIuSacKPsxOTyrbjMSGPrC_y/preview" frameborder="0" allowfullscreen="true"></iframe>
</figure>

The functionality and scope of your graph are entirely up to you. NodeScript offers an infinitely scalable canvas that can accommodate as many [nodes](nodes.md) as you need!

### Key Features & Capabilities: ###

- Always ready - no setup needed
- Always running - no hosting required
- Immediate feedback without deployment
- Collaborative environment for team projects
- Composable elements for versatile creations

### Why NodeScript? ###

- Real-time results - see the outcomes as you develop
- Speed - at scale, it's faster than traditional coding
- Atomic design - modular components for flexibility
- Instant work and deployment - save time and effort
- Automated API calls - no more manual interventions
- Accessibility - suitable for developers of all skill levels

### Quick Glossary: ###

- **Graph**: A visual representation of a workflow or process, made up of interconnected nodes.
- **Node**: The fundamental building blocks in a graph that execute specific tasks.
- **Endpoint**: The URL or location where the graph's output can be accessed or triggered.
- **Module**: A reusable graph or subset of nodes encapsulated as a single unit in NodeScript. Modules allow for the encapsulation of specific logic or functionality, making it easier to incorporate into larger workflows without redundancy.
  

