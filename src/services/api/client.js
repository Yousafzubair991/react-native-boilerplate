import { create } from "apisauce";
import authStorage from "../api/authToken";
import cache from "../../utils/cache";
import settings from "../../config/settings";

const apiClient = create({
    baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = `${await authStorage.getToken()}`;
    // console.log("authToken@@@@", authToken);
    if (!authToken) return;
    request.headers["token"] = authToken;

});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url);
    return data ? { ok: true, data } : response;
};

export default apiClient;
