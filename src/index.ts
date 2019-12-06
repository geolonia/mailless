import { Mailless } from "../index.d";
import axios from "axios";
import { formatMail } from "./utils";

const { SLACK_URL } = process.env as Mailless.Env;

export const handler: Mailless.LambdaHandler<
  {},
  Mailless.Mail,
  Mailless.Status
> = async (event, _1, callback) => {
  const { sub, from, body } = event.body;
  if (
    typeof sub === "undefined" ||
    typeof from === "undefined" ||
    typeof body === "undefined"
  ) {
    return callback(
      JSON.stringify({
        statusCode: 400,
        body: {
          message:
            "All of the parameters `sub`, `from` and `body` are required."
        }
      })
    );
  }

  try {
    await axios({
      url: SLACK_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: { text: formatMail({ sub, from, body }) }
    });
    return callback(null, { success: true, message: "" });
  } catch (error) {
    console.error(error);
    return callback(
      JSON.stringify({
        statusCode: 500,
        body: {
          message: "Oops, something is wrong. We are fixing the problem now."
        }
      })
    );
  }
};