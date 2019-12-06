import mock from "../__test__/mocks/axios";
import { promisifyLambdaTester as p } from "../__test__/utils";
import { handler as receiveMail } from "./";
import { Mailless } from "../index.d";

const { SLACK_URL } = process.env as Mailless.Env;

test("test of test", () => {
  expect(true).toBe(true);
});

test("It should fail if `sub` parameter is absent", async () => {
  const body = {
    sub: void 0,
    from: "kamataryo@example.com",
    body: "This is a mail body!"
  };

  let statusCode;
  try {
    await p(receiveMail)(body);
  } catch (error) {
    statusCode = 400;
  }
  expect(statusCode).toEqual(400);
});

test("It should success", async () => {
  mock.onPost(SLACK_URL).reply(200, {});

  const body = {
    sub: "Test sub",
    from: "kamataryo@example.com",
    body: "This is a mail body!"
  };

  // client response
  const result = await p(receiveMail)(body);
  expect(result.success).toBe(true);

  // slack request
  const data = JSON.parse(mock.history.post[0].data);
  expect(data).toMatchSnapshot();
  mock.reset();
});
