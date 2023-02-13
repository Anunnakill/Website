import { line } from "./line";
import { IRenderParams } from "./config";

interface ITidySupportTypes {
  [key: string]: (raw: IRenderParams) => any;
}

const tidySupportTypes: ITidySupportTypes = {
  line,
};

export { tidySupportTypes };
