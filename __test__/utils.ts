import { Mailless } from "../index.d";

type Handler<T> = (_0: any, _1: any, _2: T) => any;

type Resolved<T> = (T extends Handler<infer T1>
? T1
: never) extends Mailless.LambdaCallback<infer T2>
  ? T2
  : never;

export const promisifyLambdaTester = <T extends Handler<any>>(handler: T) => (
  body = {}
) => {
  return new Promise<Resolved<T>>((resolve, reject) => {
    const event = { path: {}, body };
    handler(event, {}, (err: string, result: any) => {
      if (err !== null) {
        reject(JSON.parse(err));
      } else {
        resolve(result);
      }
    });
  });
};
