import { message } from "./command";

const userCopy = async (text: string) => {
  await navigator.clipboard.writeText(text);
  message.success("Copied to clipboard!");
};

export { userCopy };
