import API from "./api";
import request from "./request";


export function getBanks() {
    return request("/banks");
}

export function getBank(id) {
    return request(`/banks/${id}`);
}


export function getAccounts(bankId) {
    return request(`/banks/${bankId}/accounts`);
}


export async function createBank(bank) {

    const formData = new FormData();

    formData.append("number_bnk", bank.number_bnk);
    formData.append("name_bnk", bank.name_bnk);
    formData.append("ein_bnk", bank.ein_bnk);
    formData.append("contact_bnk", bank.contact_bnk);
    formData.append("broker_bnk", bank.broker_bnk);
    formData.append("desc_bnk", bank.desc_bnk);

    if (bank.img_bnk) {
        formData.append("img_bnk", bank.img_bnk);

        /*
        formData.append("img_bnk", {
            uri: bank.img_bnk,
            name: "bank.jpg",
            type: "image/jpeg"
        });
        */ 
    }
   
    const response = await fetch(
        `${API.baseURL}/banks`,
        {
            method: "POST",
            headers: {
                Accept: "application/json"
            },
            body: formData
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.erro || "Erro ao cadastrar banco.");
    }

    return data;   

}
