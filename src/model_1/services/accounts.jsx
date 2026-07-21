import API from "./api";


export async function getAccount(id){

    const response = await fetch(`${API}/accounts/${id}`);

    return await response.json();

}



export async function getReports(id){

    const response = await fetch(`${API}/accounts/${id}/reports`);

    return await response.json();

}



export async function getCreditCards(id){

    const response = await fetch(`${API}/accounts/${id}/creditcards`);

    return await response.json();

}