import API from "./api";
import request from "./request";

export function createReport(data) {

    const formData = new FormData();

    formData.append("fk_act", data.fk_act);
    formData.append("type_rep", data.type_rep);
    formData.append("value_rep", data.value_rep);
    formData.append("description", data.description);
    formData.append("status_rep", data.status_rep || "completed");

    return request("/reports", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    });
}