# Mailless

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
$ curl https://kiyp9cxk1k.execute-api.us-east-1.amazonaws.com/dev/mail \
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
