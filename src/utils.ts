export const formatMail = ({
  sub,
  from,
  body
}: {
  sub: string;
  from: string;
  body: string;
}) => {
  return `We've received an email!
\`\`\`
From: ${from}
Sub: ${sub}
body:
${body}
\`\`\`
  `;
};
