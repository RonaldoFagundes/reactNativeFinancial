import request from "./request";



export function getInvestBank() {
    return request(`/investbank`);
}
