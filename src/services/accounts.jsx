import request from "./request";



export function createAccount(data) {

    const formData = new FormData();

    formData.append("number_act", data.number_act);
    formData.append("type_act", data.type_act);
    formData.append("desc_act", data.desc_act);
    formData.append("saldo_act", data.saldo_act);
    formData.append("fk_bank", data.fk_bank);

    return request("/accounts", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    });
}




