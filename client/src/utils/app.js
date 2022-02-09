export const getAppLanguage = () => {
  if (typeof window === "undefined") return undefined;

  let appPersist = window.localStorage.getItem("persist:app");
  if (appPersist) {
    appPersist = JSON.parse(appPersist);
  }
  return appPersist && appPersist.language ? appPersist.language : "en";
};
