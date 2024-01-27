/**
 * Send email to the recipient
 * @param email email of the recipient.
 * @param content email content to be sent.
 * @returns
 */
export const sendEmail = (email: string, content?: string) => {
  console.log(email, content);
  return { result: `Email sent to ${email}` };
};
