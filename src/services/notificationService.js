import { eventBusService } from "./eventBusService";

export const notificationService = {
  notify(type, txt) {
    console.log("emitting notify");
    eventBusService.emit("notify", { type, txt });
  },
};
