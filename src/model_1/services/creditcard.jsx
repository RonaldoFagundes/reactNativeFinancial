import API from "./api";

export async function getCard(id){

    const response = await fetch(`${API}/creditcards/${id}`);

    return await response.json();

}

export async function getPosts(id){

    const response = await fetch(`${API}/creditcards/${id}/posts`);

    return await response.json();

}