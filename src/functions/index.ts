export const functions = {
  sendEmail: (email: string, content?: string) => {
    console.log(email, content);
    return `Email sent to ${email}`;
  },
};
