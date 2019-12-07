import mock from "../__test__/mocks/axios";
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

  const { statusCode } = await receiveMail({ body, path: {} });
  expect(statusCode).toBe(400);
});

test("It should success", async () => {
  mock.onPost(SLACK_URL).reply(200, {});

  const body = {
    sub: "Test sub",
    from: "kamataryo@example.com",
    body: "This is a mail body!"
  };

  // client response
  const { statusCode } = await receiveMail({ body, path: {} });
  expect(statusCode).toBe(200);

  // slack request
  const { text } = JSON.parse(mock.history.post[0].data);
  expect(text).toContain(body.sub);
  expect(text).toContain(body.from);
  expect(text).toContain(body.body);
  mock.reset();
});
