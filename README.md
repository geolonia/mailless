# Mailless

[![CircleCI](https://circleci.com/gh/geolonia/mailless.svg?style=svg)](https://circleci.com/gh/geolonia/mailless)

Serverless mail catcher.

## development

```shell
$ git clone geolonia/mailless
$ cd mailless
$ yarn # or npm install
$ npm test
```

## Usage

```shell
$ curl https://example.com/dev/mail \
  -X POST \
  --header 'Content-Type: application/json' \
  -d '{
    "sub": "My Subject",
    "from": "user@example.com",
    "body": "Hello!"
  }'
```

## deployment

```shell
# TODO: develop and write the doc.
```
