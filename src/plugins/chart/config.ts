import { Ref } from "vue";

const load = {
  text: "",
  zlevel: 1,
  lineWidth: 4,
  color: "#958EFC",
  spinnerRadius: 13,
  maskColor: "rgba(25, 27, 33, 0.2)",
};

const noData = {
  zlevel: 1,
  fontSize: 14,
  text: "No Data",
  color: "#958EFC",
  showSpinner: false,
  textColor: "#9da0a9",
  fontFamily: "Poppins-Regular",
  maskColor: "rgba(25, 27, 33, 0.2)",
};

interface IRenderParams {
  data: string[];
  min: number | string;
  value: Array<number | string>;
}

interface IRealTimeParams {
  currentData: Ref<string>;
  currentValue: Ref<string | number>;
}

export { load, noData };
export type { IRenderParams, IRealTimeParams };
