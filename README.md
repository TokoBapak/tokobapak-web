# TokoBapak Web

## Overview

This is a monorepo for anything related to TokoBapak Website, using turborepo to manage multiple packages within the
same repository.
This project includes a submodule for proto files from [tokobapak/proto](https://github.com/TokoBapak/proto)

## Development

Since this repo contains submodule, you need to use the `--recursive-submodule` flag when cloning this repository.

```shell
git clone --recurse-submodules git@github.com:TokoBapak/tokobapak-web
# or via http
git clone --recurse-submodules https://github.com/TokoBapak/tokobapak-web
```

## Project Directory

### apps/web

This directory contains the project for TokoBapak user-facing website. It is using
[SolidStart](https://start.solidjs.com/) at its core and [SCSS](https://sass-lang.com/) for styling.

More details can be found on its [README.md](./apps/web/README.md)

### packages/config

This directory contains any configuration files needed for TokoBapak Website. Every apps should share or derive
their formatting and linting configuration to provide consistency across projects. 

More details can be found on its [README.md](./packages/config/README.md)

### packages/contracts

This package provides the API contracts for TokoBapak Website. Any API call should be written
as [ts-rest](https://github.com/ts-rest/ts-rest)
invocation that adheres to the generated type from the proto repository.

More details can be found on its [README.md](./packages/contracts/README.md)