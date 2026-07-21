import API from "./api";
import request from "./request";



export  function getApicationsByAccount(actId) {   
    return request(`/account/${actId}/applications`);  
}




export async function createApplications(apl) {

    const formData = new FormData();   
     /*
    formData.append("name_inv"   , apl.name_inv);
    formData.append("type_inv"   , apl.type_inv);
    formData.append("open_apl"   , apl.open_apl);
    formData.append("expery_apl" , apl.expery_apl);    
    formData.append("rate_inv"   , apl.rate_inv);
    formData.append("value_apl"  , apl.value_apl);
    formData.append("income_inv" , apl.income_inv);      
    formData.append("id_inv"     , apl.id_inv);
     */

    formData.append("id_act",String(apl.fk_act));
    formData.append("id_inv",String(apl.fk_inv));
    formData.append("open_apl", apl.open_apl || "");
    formData.append("expery_apl", apl.expery_apl || "");
    formData.append("value_apl", String(apl.value_apl ?? 0));

    /*
    console.log("Dados enviados:");
    console.log(apl);
    // Para testar apenas o front-end, não envia para a API.
    return {
        success: true,
        message: "Teste realizado com sucesso.",
        data: apl,
    };
    */     
    
    const response = await fetch(`${API.baseURL}/application`,
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
        throw new Error(data.erro || "Erro ao cadastrar application.");
    }
    return data;      
}