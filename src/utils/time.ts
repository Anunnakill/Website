import soon from "@/assets/images/events/soon.svg";
import end from "@/assets/images/events/end.svg";
import live from "@/assets/images/events/live.svg";

const checkTimeStatusToImage = (startTime: string, endTime: string) => {
  const startTimestamp = new Date(startTime).getTime();
  const endTimestamp = new Date(endTime).getTime();
  const currentTimestamp = new Date().getTime();

  if (currentTimestamp < startTimestamp) return soon;
  if (currentTimestamp > endTimestamp) return end;
  return live;
};

export { checkTimeStatusToImage };
