import API from "./api";
import request from "./request";

export async function getCard(id){

    const response = await fetch(`${API}/creditcards/${id}`);

    return await response.json();
}

export async function getPosts(id){
    const response = await fetch(`${API}/creditcards/${id}/posts`);
    return await response.json();
}




export function createCreditCard(data) {

    const formData = new FormData();

    formData.append("fk_act", data.fk_act);
    formData.append("number_ccr", data.number_ccr);
    formData.append("brand_ccr", data.brand_ccr);
    formData.append("limit_ccr", data.limit_ccr);
    formData.append("used_ccr", data.used_ccr);
    formData.append("closing_day", data.closing_day);

    return request("/creditcards", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    });
}