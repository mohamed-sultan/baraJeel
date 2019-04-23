import localization from "../localization/localization";
export const ChangeRtl = (payload = true) => {
  localization.setLanguage(payload ? "ar" : "en");
  return {
    type: "rtl",
    payload
  };
};
