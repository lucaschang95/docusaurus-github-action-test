# dockerfile

builds an image from a Dockerfile and a context

## COPY

`COPY <src> <dest>`

## RUN

`RUN <command>`
`RUN ["executable", "param1", "param2"]`

- will create a new layer on top of the current image and commit the results