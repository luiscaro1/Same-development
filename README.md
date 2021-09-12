# Same-development

## Cloning Repo

<br/>

`git clone --recurse-submodule -j8 git@github.com:luiscaro1/Same-development.git`

<br/>

## Pulling Submodule Changes

<br/>

In the project's root directory:

<br/>

`git submodule update --recursive --remote`

<br/>

## Running all containers together:

<br/>

### Development

<br/>

`docker compose -f docker-compose.dev.yml up`
