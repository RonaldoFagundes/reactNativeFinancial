import API from "./api";
import request from "./request";


/*
export function getInvestments() {
    return request(`/investbank`);
}
*/

/*
export function getInvestmentByBank(bankId) {    
    return request(`/banks/${bankId}/investments`);    
}
*/


export function getInvestmentByAccount(actId) {    
    return request(`/account/${actId}/investments`);    
}




/*
export function createInvestment(data) {
    const formData = new FormData();
    formData.append("fk_act", data.fk_act);
    formData.append("type_inv", data.type_inv); // deposit | profit | withdraw
    formData.append("value_inv", data.value_inv);
    formData.append("yield_rate", data.yield_rate);
    formData.append("profit", data.profit);
    formData.append("date_inv", data.date_inv);
    return request("/investments", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    });
}
*/



