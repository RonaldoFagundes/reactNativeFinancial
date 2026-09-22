import API from "./api";
import request from "./request";

export async function getCreditCards() {

    const response = await fetch(
        `${API.baseURL}/creditcards`,
        {
            headers: API.headers
        }
    );

    if (!response.ok) {
        throw new Error(
            `Erro ao buscar cartões: ${response.status}`
        );
    }

    return response.json();
}


export async function getCreditCard(id) {

    const response = await fetch(
        `${API.baseURL}/creditcards/${id}`,
        {
            headers: API.headers
        }
    );

    if (!response.ok) {
        throw new Error(
            `Erro ao buscar cartão: ${response.status}`
        );
    }

    return response.json();
}


export async function getCreditCardsByAccount(id) {

    const response = await fetch(
        `${API.baseURL}/accounts/${id}/creditcards`,
        {
            headers: API.headers
        }
    );

    if (!response.ok) {
        throw new Error(
            `Erro ao buscar cartões da conta: ${response.status}`
        );
    }

    return response.json();
}


export function createCreditCard(data) {

    const formData = new FormData();

    formData.append("fk_act", data.fk_act);
    formData.append("number_ccr", data.number_ccr);
    formData.append("brand_ccr", data.brand_ccr);
    formData.append("format_ccr", data.format_ccr);
    formData.append("closing_ccr", data.closing_ccr);
    formData.append("desc_ccr", data.desc_ccr);
    formData.append("limit_ccr", data.limit_ccr);
    formData.append("expiry_ccr", data.expiry_ccr);
    formData.append("create_ccr", data.create_ccr);

    return request("/creditcards", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    });
}


export function deleteCreditCard(id) {

    return request(`/creditcards/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json"
        }
    });
}

/*
export async function getCreditCard(id){

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
    formData.append("format_ccr", data.format_ccr);    
    formData.append("closing_ccr", data.closing_ccr);
    formData.append("desc_ccr", data.desc_ccr);
    formData.append("limit_ccr", data.limit_ccr);
    formData.append("expiry_ccr", data.expiry_ccr);
    formData.append("create_ccr", data.create_day);

    return request("/creditcards", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    });
}
*/