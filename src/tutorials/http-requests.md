---
pageClass: page-wide
---

# HTTP requests

**HTTP** is a standard protocol ubiquitously adopted by applications, services and browsers to communicate over the web.

<p class="info">
If this is the first time you hear about HTTP it might be worthwhile going through a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview" target="_blank">short introduction to HTTP</a>.
</p>

NodeScript provides two modules for sending HTTP Requests: Web / Fetch and Web / Http Request. For the purposes of this tutorial we will be using more feature-rich, but less performant Http Request module. Please refer to [Fetch vs. Http Request](../guide/fetch-vs-http-request) to learn more about the differences between the two.

## Simple GET

Let's start by sending a simple GET request to an "echo" endpoint. This endpoint, which we also created with NodeScript, will return back the details about the request we have sent.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=NoWliQC0iNKxWvB7&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

<p class="info">
Notice the node does not evaluate automatically, you need to press <kbd>Play</kbd> button for it to send the request and return the response.
</p>

### Request fields

GET method is typically used to retrieve (or query) data from a service. In its simplest form all you need is a URL, but depending on the use case you may want to add some parameters to the request.

There are three primary means of sending GET request parameters:

- `query` parameters (also known as [search params](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams));
- `headers` — key-value pairs with meta information about the request, those are typically used to supply authentication/authorization information to the server, but there are other use cases;
- path parameters — those are directly included in the URL and typically used to identify the resource (e.g. filename or id of a record).

### Response fields

Http Request will return an object with three fields:

- `status` is a numeric [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status); 2xx statuses (i.e. 200 — 299) indicate a successful operation whereas 4xx and 5xx indicate a problem;
- `headers` are key-value pairs with meta information about the response returned by the server (e.g. content type, server timing, etc). Note: these are not to be confused with _request headers_;
- `body` is a response payload returned from the server.

<p class="info">
Just like with any other node, you can drag a particular field from the node result to create an additional output socket. For example, try expanding <code>body</code> > <code>$request</code> and dragging out the <code>query</code> field — this will create an output socket that you can further connect to another node.
</p>


Let's now look at a couple of common ways of composing HTTP requests.

## URL Composition

One very straightforward way of composing the URL is to just assemble it from multiple strings using String / Join.

<iframe width="100%" height="720" src="https://embed.nodescript.dev/?graphId=gPdQXrlvLiYOSr5x&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

Alternatively you can use a more feature rich Web / Url to compose the URL out of different parts.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=Db9pAEDuVoZ5XKhB&theme=auto" frameborder="0" allowfullscreen allowf="clipboard-read; clipboard-write"></iframe>

A few notes:

- Web / Url it can be used both to compose a new URL or to selectively modify parts of existing one
- if `path` is used, the entire pathname of the URL is replaced; the components are automatically [URL-encoded](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding), forward slash separators should not be included into path components (otherwise they will also be URL-encoded)

## Query Params

Query strings (also known as [search params](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)) are often used by services and APIs to accept request parameters such as resource ids, limit/offset in pagination, search queries and other information.

The easiest way to add a query parameter is to add a `query` field to Http Request:

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=TAtE9Ak5yz7FdYon&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

Since query strings are part of the URL, you can use Web / Url to create a URL with correctly [encoded](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding) query string parameters.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=KmOS6u3LdEooZ92K&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

<p class="info">
As you can see in the example above, query strings allow multiple parameters with the same name. This technique is commonly used to send arrays of data via GET requests (such as selected ids or tags, for example).
</p>

Additionally you can use Web / Search Params to compose a URLSearchParams object that you can subsequently use in the contexts where URL-encoded query strings are required (e.g. the `search` field of Web / URL).

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=A2GvJbX8kj5PrNsT&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

<p class="info">
If you use <code>query</code> with URLs that already contain query string, the <code>query</code> parameters are appended to the URL. Using Web / URL in combination with other techniques above gives you a more precise control over what is being sent.
</p>

## Request Headers

Use `headers` field of Http Request to attach request headers.

For example, some services may require a custom header for authenticating the requests to their APIs.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=N1PYdZuVgoj1vihc&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

Headers can also be set as an object with key-value pairs. Unlike query strings, headers are not part of the URL, so should be set directly for each request.

## Basic Authentication

[Basic HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme), even though obsolete, is still used as an authentication mechanism by some services.

In a nutshell, it requires `Authorization` header to contain [base64-encoded](https://developer.mozilla.org/en-US/docs/Glossary/Base64) username and password.

Use Web / Basic Auth node to create the authorization value, then attach it to a header field called `Authorization`.

<iframe width="100%" height="720" src="https://embed.nodescript.dev/?graphId=omaCRJFLOSRYqa2I&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

## Bearer Token Authentication

[Bearer token authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#bearer) is often used these days in conjunction with [JWT](https://jwt.io/) to facilitate secure authentication between web services.

In this scheme the token is either obtained directly from the service you're integrating (e.g. by generating an API key in Admin section) or retrieved from another call to the authorization server.

Once the token is obtained, use Web / Bearer Auth to add a prefix to it, then attach it to a header field called `Authorization` (just like in Basic auth).

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=ffCNiZYN9nzGpWMa&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

## POST with JSON body

So far we were only using GET requests. As mentioned before, such requests typically retrieve or query the information. POST requests, on the other hand, are most often used to instruct the services to do something (e.g. to create or to update a resource).

The most important semantic difference between GET and POST is that the POST requests also support a "body" — a data payload in some format. The format is designated via `Content-Type` request header.

The vast majority of the modern services use JSON format for accepting structured data.

In order to send a POST request with JSON payload:

- switch the method to POST
- add `body` field
- connect `Object` or any other node creating JSON to `body`

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=ZFhbrTFh5pbhE37J&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>

The type of the request body is inferred, so in most cases you do not have to specify <code>Content-Type</code> header explicitly.

## POST with URL-encoded body

Older services accept `application/x-www-form-urlencoded` content type. In order to send such requests use Web / Search Params to construct a payload and connect it directly to the `body` field.

<iframe width="100%" height="640" src="https://embed.nodescript.dev/?graphId=dU7OX6kika1qAgOs&theme=auto" frameborder="0" allowfullscreen allow="clipboard-read; clipboard-write"></iframe>
