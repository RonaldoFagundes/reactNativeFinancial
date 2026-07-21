import API from "./api";



export async function getBanks() {
    const response = await fetch(`${API}/banks`);

    if (!response.ok) {
        throw new Error("Erro ao buscar bancos");
    }

    return await response.json();
}



export async function getBank(id) {
    const response = await fetch(`${API}/banks/${id}`);

    if (!response.ok) {
        throw new Error("Banco não encontrado");
    }

    return await response.json();
}



export async function getBankAccounts(id) {
    const response = await fetch(`${API}/banks/${id}/accounts`);

    if (!response.ok) {
        throw new Error("Erro");
    }

    return await response.json();
}