import io from "socket.io-client";

export const socket = io("http://localhost:8080", {
  reconnection: true,
  reconnectionAttempts: 3,
  reconnectionDelay: 5 * 1000,
  reconnectionDelayMax: 60 * 1000,
});
