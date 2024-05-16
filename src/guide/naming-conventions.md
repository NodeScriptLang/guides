# Naming conventions

Generally speaking, having things named in a consistent and systematic manner reduces the cognitive overhead needed to read and understand these things.

NodeScript uses the following set of rules for Standard Library. It is strongly recommended to follow those conventions so that the modules you create are consistent with the rest of the ecosystem.

**Cheat sheet**

| Context       | Convention           | Example            |
|:--------------|:---------------------|:-------------------|
| Graph names   | Words delimited with `/` | `Util / FX / Get Rates` |
| Inputs        | Camel case           | `someValue`, `someOtherValue` |
| Variables     | All-caps case        | `MY_SECRET_USERNAME`, `MY_SECRET_PASSWORD` |


**Graph names**

- Use capitalized English words separated by a single space.

- Use forward slash `/` to denote namespaces and sub-categories.

    <p class="info">
    Path components delimited with <code>/</code> automatically become folders in the Graphs List view.
    </p>

- Use structured naming with at least two path components for naming modules.

- Public modules should always include a namespace describing the domain the module belongs to (e.g. `GitHub / ` for describing a GitHub-related module).

- <span class="good">Good</span>

    - `Vector / Add`
    - `Services / Hello`
    - `FX / Get Rates`
    - `GitHub / Repositories / Get Commits`

- <span class="bad">Bad</span>

    - `vector_add`
    - `vector-add`
    - `Add Vectors`
    - `Hello Service`
    - `Get FX Slot`

**Inputs**

- Use [camel case](https://en.wikipedia.org/wiki/Camel_case) for input names (except for variables).

- Prefer simpler, single-word identifiers, where possible.

- <span class="good">Good</span>

    - `value`
    - `additionalProperties`
    - `a`, `b`

- <span class="bad">Bad</span>

    - `additional_properties`
    - `additional-properties`
    - `AdditionalProperties`
    - `firstArgument`, `secondArgument`

**Variables**

- Use ALL_CAPS case.

- <span class="good">Good</span>

    - `MY_SECRET_USERNAME`
    - `MY_SECRET_PASSWORD`

- <span class="bad">Bad</span>

    - `mySecretUsername`
    - `my_secret_password`

- Note: this convention follows the [environment variables](https://en.wikipedia.org/wiki/Environment_variable) traditionally used for the same purpose. It also helps to visually distinguish regular and variable inputs.
