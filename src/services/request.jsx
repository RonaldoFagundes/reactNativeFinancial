import API from "./api";

export default async function request(endpoint, options = {}) {

    const response = await fetch(
        `${API.baseURL}${endpoint}`,
        {
            headers: {
                ...(API.headers || {}),
                ...(options.headers || {})
            },
            ...options
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.erro || "Erro na requisição");
    }
    return data;
}