export declare namespace Mailless {
  export type LambdaEvent<T1, T2> = {
    path: T1;
    body: Partial<T2>;
    triggerSource?: string;
  };
  export type Env = { SLACK_URL: string };

  export type LambdaContext = any;
  export type LambdaCallback<T> = (error: string | null, result?: T) => any;

  export type LambdaHandler<RequestPath, RequestBody, ResponseBody> = (
    event: LambdaEvent<RequestPath, RequestBody>,
    context: LambdaContext,
    callback: LambdaCallback<ResponseBody>
  ) => ReturnType<LambdaCallback<ResponseBody>>;

  export type Mail = {
    sub: string;
    from: string;
    body: string;
  };
  export type Status = {
    success: boolean;
    message?: string;
  };
}
