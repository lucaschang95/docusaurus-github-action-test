# SplitChunksPlugin

## split chunks 的条件

Webpack will automatically split chunks based on these conditions:

- New chunk can be shared OR modules are from the node_modules folder
- New chunk would be bigger than 20kb (before min+gz)
- Maximum number of parallel requests when loading chunks on demand would be lower or equal to 30
- Maximum number of parallel requests at initial page load would be lower or equal to 30