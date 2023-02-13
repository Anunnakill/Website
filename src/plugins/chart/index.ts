import { tidySupportTypes } from "./tidy";
import { LineChart } from "echarts/charts";
import { use, init, ECharts } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent, GridComponent } from "echarts/components";
import { load, noData, IRenderParams, IRealTimeParams } from "./config";

use([LineChart, GridComponent, CanvasRenderer, TooltipComponent]);

class EChart {
  type: string;
  myEchart!: ECharts;
  HTMLElement: HTMLElement;
  raw!: IRenderParams;

  constructor(type: string, HTMLElement: HTMLElement) {
    this.type = type;
    this.HTMLElement = HTMLElement;
  }

  init() {
    this.myEchart = init(this.HTMLElement);
  }

  noData() {
    this.myEchart.showLoading(noData);
  }

  showLoading() {
    this.myEchart.showLoading(load);
  }

  hideLoading() {
    this.myEchart.hideLoading();
  }

  dispose() {
    this.myEchart.dispose();
  }

  clear() {
    this.myEchart.clear();
  }

  render(raw: IRenderParams) {
    this.raw = raw;
    this.myEchart.setOption(tidySupportTypes[this.type](this.raw));

    window.addEventListener("resize", () => this.myEchart.resize());
  }

  turnOnRealTime({ currentData, currentValue }: IRealTimeParams) {
    let { data, value } = this.raw;
    let latestData = data[data.length - 1];
    let latestValue = value[value.length - 1];

    currentData.value = latestData;
    currentValue.value = latestValue;

    this.myEchart.getZr().on("mousemove", ({ offsetX, offsetY }) => {
      let index = { seriesIndex: 0 };
      let pointInPixel = [offsetX, offsetY];
      let grid = this.myEchart.convertFromPixel(index, pointInPixel);

      if (!grid) return;

      currentData.value = data[grid[0]] || latestData;
      currentValue.value = value[grid[0]] || latestValue;
    });

    this.myEchart.on("globalout", () => {
      currentData.value = latestData;
      currentValue.value = latestValue;
    });
  }
}
