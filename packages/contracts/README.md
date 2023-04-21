# Contracts

This module contains the contracts related to the API call needed for TokoBapak frontend.
All type definition are generated from the `proto` git submodule to the `stub` folder.
Those types are used to add constraint to the API client inside the `api` folder.

## Generating Stubs

To generate stubs, you can use the `protoc` npm command. Make sure to provide the name of the proto file
you want to generate since `protoc` doesn't allow us to use the wildcard name, so we need to provide the name manually.

Example
```shell
pnpm protoc authentication/authentication.proto
```

The command will assume the `proto` directory as its root. 
See the `proto` folder for a full list of available proto definitions

## Developing the API client

The API client inside the `api` folder is built using `ts-rest` to provide an RPC-like experience from a regular HTTP call.
Consult to the official [ts-rest documentation](https://ts-rest.com/) for a full guide.

This effort is also made to centralise the API call definitions.