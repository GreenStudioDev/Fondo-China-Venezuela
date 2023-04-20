import axios from "axios";

export const fcvInstance = axios.create({
  baseURL: "https://fundacionandresbello.org/wp-json/fab/v1",
  // timeout: 1000,
});


