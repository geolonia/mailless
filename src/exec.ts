import { promisifyLambdaTester as p } from "../__test__/utils";
import { handler as receiveMail } from "./";

const main = async () => {
  const body = {
    sub: "Test sub",
    from: "kamataryo@example.com",
    body: "This is a mail body!"
  };

  const result = await p(receiveMail)(body);
  console.log(result);
};

main();
