import { ShowLanguageScreeOnStartup } from "./types";

export const LoadStartupLang = payload => {
  return {
    type: ShowLanguageScreeOnStartup,
    payload
  };
};
