import Constants from "expo-constants";

const settings = {
    dev: {
        apiUrl: "https://geniepanel.herokuapp.com",
    },
    staging: {
        apiUrl: "https://geniepanel.herokuapp.com",
    },
    prod: {
        apiUrl: "https://geniepanel.herokuapp.com",
    },
};

// const getCurrentSettings = () => {
//     if (__DEV__) return settings.dev;
//     if (Constants.manifest.releaseChannel === "staging") return settings.staging;
//     return settings.prod;
// };

export default getCurrentSettings();
