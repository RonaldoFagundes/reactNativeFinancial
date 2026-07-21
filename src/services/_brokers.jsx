import request from "./request";



export function getBrokers() {
    return request(`/brokers`);
}
