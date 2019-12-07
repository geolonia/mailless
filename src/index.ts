import { Mailless } from "../index.d";
import axios from "axios";
import { formatMail } from "./utils";

const { SLACK_URL, SLACK_CHANNEL, SLACK_BOTNAME } = process.env as Mailless.Env;

export const handler: Mailless.LambdaHandler<
  {},
  Mailless.Mail,
  Mailless.Status
> = async (event, _1) => {
  const { sub, from, body } = event.body;
  if (
    typeof sub === "undefined" ||
    typeof from === "undefined" ||
    typeof body === "undefined"
  ) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "All of the parameters `sub`, `from` and `body` are required."
      })
    };
  }

  try {
    await axios({
      url: SLACK_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        channel: SLACK_CHANNEL,
        username: SLACK_BOTNAME,
        text: formatMail({ sub, from, body })
      }
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Oops, something is wrong. We are fixing the problem now."
      })
    };
  }
};
