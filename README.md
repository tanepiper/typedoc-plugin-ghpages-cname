# Typedoc Github Pages CNAME

This [Typedoc](https://typedoc.org) plugin generates a `CNAME` file inside your `docs` directory for Github Pages each time you generate new docs

To use, include the following in your `typedoc.json` config:

```json
{
    "name": "My Docs",
    "out": "docs",
    "cname": "mysite.rocks"
}
```