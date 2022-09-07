# volumn

## Named Volumes Bind Mounts

my-volume:/usr/local/data	/path/to/data:/usr/local/data

-v "$(pwd):/app" - bind mount the current directory from the host in the container into the /app directory