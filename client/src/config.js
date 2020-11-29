export const APIURL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api";

export const createNotification = (NotificationManager, type, message) => {
  console.log("notif dispatched", type, message);
  switch (type) {
    case "info":
      NotificationManager.info(message);
      break;
    case "success":
      console.log(message);
      NotificationManager.success(message);
      break;
    case "warning":
      NotificationManager.warning(message);
      break;
    case "error":
      NotificationManager.error(message);
      break;
  }
};

export const notificationType = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};
