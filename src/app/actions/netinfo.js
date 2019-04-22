import { UpdateConnection } from "./types";

export const UpdateConnectionStatus = isConnected => ({
  type: UpdateConnection,
  payload: isConnected
});
