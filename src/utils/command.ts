import { createDiscreteApi, darkTheme } from "naive-ui";

type IDiscreteApiType = "message" | "notification" | "loadingBar" | "dialog";

const kinds: Array<IDiscreteApiType> = ["message", "notification", "loadingBar", "dialog"];

const options = { configProviderProps: { theme: darkTheme } };

export const { message, notification, loadingBar, dialog } = createDiscreteApi(kinds, options);
