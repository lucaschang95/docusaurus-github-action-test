# Chunks

> During the bundling process, modules(files) are combined into chunks. Chunks combine into chunk groups and form a graph (ChunkGraph) interconnected through modules. When you describe an entry point - under the hood, you create a chunk group with one chunk.

chunks come in two forms:

- `initial`: main chunk for the entry point
- `non-initial`: chunk that may be lazy-loaded, appear when dynamic import or SplitChunksPlugin is used