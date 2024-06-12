import { instance } from "./instance";
//api
export const getAllElements = () => {
  return instance.get(`/elements`)
}