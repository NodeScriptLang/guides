# Fetch vs. Http Request

Integrating services is typically achieved by sending HTTP requests to the corresponding servers (commonly referred to as "API", short for "Application Programming Interface"). This is done either to retrieve the data or to send a command for the server to do something, for example, update a record or send an email.

NodeScript provides two modules for sending HTTP Requests: **Web / Fetch** and **Web / Http Request**.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=AAqIIyw8kSyYl9ed&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

Web / Fetch, as its name suggests, uses standard [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to send the request _directly_, whereas Http Request module forwards a request through a backend. Even though this sounds like an implementation detail, in practice there are important differences as is outlined below.

## Cross Origin Restrictions

When used inside the browser (e.g. in the editor), Fetch can only send requests to the web services that implement a very unrestrictive [Cross Origin Resource Sharing policy (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

Services typically implement strict CORS policies by allowing only a particular set of web origins to send the _authenticated_ requests to their APIs using the web browser. This is done to prevent certain attack vectors as well as to discourage the external API clients from using insecure practices like storing the credentials on the client.

<p class="info">
It is highly advisable to become familiar with <a href="https://developer.mozilla.org/en-US/docs/Web/Security" target="_blank">Security on the web</a> if you wish to learn more on the subject.
</p>

Because of this most services will **reject** authenticated Fetch requests sent by the browser from an unknown origin (such as NodeScript editor). **It is a good thing that they do**, because otherwise an attacker could steal your sensitive data like cookies and use them to impersonate you on that service.

On the other hand, Http Request module forwards the requests through [its own backend](https://github.com/nodeScriptLang/fetch-service). Since NodeScript backend doesn't have the same origin as the target service, browser will **never implicitly send sensitive information** like cookies to it, making this solution safe and secure.

<p class="info">
Conceptually Http Request is not too different from command line tools like cURL or any other HTTP client library available on the backend. Also, the above restrictions do not apply to the endpoints and schedules — those are using backend runtime without same-origin restrictions.
</p>

## Features

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is a web standard created predominantly for the web browsers, so feature-wise it is limited to what browsers can do.

Specifically with Web / Fetch,

- you cannot send custom HTTP headers, unless they are explicitly allowed by target service's CORS policies (via Access-Control-Allow-Headers)
- you cannot modify, add or remove [Forbidden headers](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name) such as `Referer` or `Sec-*`
- you cannot use a custom proxy server
- you cannot control how [HTTP redirects](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections) are handled
- you cannot use custom CA certificates to communicate with the trusted services using self-signed SSL certificates

If you encounter any of the above limitation, please use Http Request module.

## Performance

Fetch is naturally much faster than Http Request simply because there are fewer steps to go through. Even though NodeScript's [Fetch Backend](https://github.com/nodeScriptLang/fetch-service) is very performant, there are still inherent costs associated with TLS and parsing HTTP payloads.

For that reason, always prefer Fetch if you're not using any features that would otherwise make Fetch unfeasible, such as authenticated requests, custom headers or proxies.
