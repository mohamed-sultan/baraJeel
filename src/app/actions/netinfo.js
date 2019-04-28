import { ConnectionStatus } from "./types";

export const UpdateConnectionStatus = isConnected => ({
  type: ConnectionStatus,
  payload: isConnected
});
