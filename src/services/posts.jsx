import API from "./api";
import request from "./request";


export function createPost(data) {

    const formData = new FormData();

    formData.append("fk_ccr", data.fk_ccr);
    formData.append("title_post", data.title_post);
    formData.append("value_post", data.value_post);
    formData.append("type_post", data.type_post);
    formData.append("date_post", data.date_post);
    formData.append("status_post", data.status_post);

    return request("/posts", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: formData
    });
}