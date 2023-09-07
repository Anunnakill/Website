import { createDiscreteApi, darkTheme } from "naive-ui";

type IDiscreteApiType = "message" | "notification" | "loadingBar" | "dialog";

const discreteKinds: Array<IDiscreteApiType> = ["message", "notification", "loadingBar", "dialog"];

const discreteOptions = { configProviderProps: { theme: darkTheme } };

export const { message, notification, loadingBar, dialog } = createDiscreteApi(discreteKinds, discreteOptions);
