# [Webpack](http://webpack.github.io/) loader expose class names

This loader will detect JavaScript class names and expose them to the global context.

To use this loader, specify the `query` parameter as a string for the object to attach the class.
Example: `global`, `window`

# Why?

To be able to render React components using auto-rendering javascript libraries.
