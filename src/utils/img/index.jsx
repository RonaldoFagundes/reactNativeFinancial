import { Platform } from "react-native";


/*
|--------------------------------------------------------------------------
| Converter imagem selecionada para Base64
|--------------------------------------------------------------------------
*/
export async function prepareImage(image) {

    // Android / iOS (Expo Go)
    if (Platform.OS !== "web") {
        if (image.base64) {
            return `data:${image.mimeType || "image/jpeg"};base64,${image.base64}`;
        }
    }

    // React Native Web
    if (Platform.OS === "web") {
        return await blobToBase64(image.uri);
    }

    return null;
}





/*
|--------------------------------------------------------------------------
| Converter Blob Web para Base64
|--------------------------------------------------------------------------
*/
function blobToBase64(uri) {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.onload = function () {

            const reader = new FileReader();

            reader.onloadend = function () {
                resolve(reader.result);
            };

            reader.onerror = reject;
            reader.readAsDataURL(xhr.response);
        };


        xhr.onerror = reject;

        xhr.open("GET", uri);

        xhr.responseType = "blob";

        xhr.send();

    });
}



/*
|--------------------------------------------------------------------------
| Exibir imagem Base64
|--------------------------------------------------------------------------
*/
export function getBankImage(img_bnk) {

    if (!img_bnk) {
        return null;
    }

    // Já está no formato correto
    if (img_bnk.startsWith("data:image")) {

        return {
            uri: img_bnk
        };
    }


    // PNG Base64 puro
    if (img_bnk.startsWith("iVBOR")) {

        return {
            uri: `data:image/png;base64,${img_bnk}`
        };
    }

    // JPEG Base64 puro
    if (img_bnk.startsWith("/9j/")) {

        return {
            uri: `data:image/jpeg;base64,${img_bnk}`
        };
    }

    return null;
}







/*
export function getBankImage(img_bnk) {


    if (!img_bnk) {

        return null;

    }


    return {

        uri: img_bnk

    };

}
*/





/*
export function getBankImage(img_bnk) {

    if (!img_bnk) {
        return null;
    }

    // Já veio completa
    if (img_bnk.startsWith("data:image")) {
        return { uri: img_bnk };
    }

    // PNG
    if (img_bnk.startsWith("iVBOR")) {
        return {
            uri: `data:image/png;base64,${img_bnk}`
        };
    }

    // JPEG
    if (img_bnk.startsWith("/9j/")) {
        return {
            uri: `data:image/jpeg;base64,${img_bnk}`
        };
    }

    // Fallback
    return {
        uri: `data:image/*;base64,${img_bnk}`
    };
}
*/



/*
export function getBankImage(img_bnk) {

    if (!img_bnk) {
        return null;
    }

    // Já é um data URI
    if (img_bnk.startsWith("data:image")) {
        return { uri: img_bnk };
    }

    // PNG
    if (img_bnk.startsWith("iVBOR")) {
        return {
            uri: `data:image/png;base64,${img_bnk}`
        };
    }

    // JPEG
    if (img_bnk.startsWith("/9j/")) {
        return {
            uri: `data:image/jpeg;base64,${img_bnk}`
        };
    }

    // Outros formatos (fallback)
    return {
        uri: `data:image/*;base64,${img_bnk}`
    };
}
*/

/*
export function getBankImage(img_bnk) {
    if (!img_bnk) return null;

    if (img_bnk.startsWith("iVBOR")) {
        return {
            uri: `data:image/png;base64,${img_bnk}`
        };
    }

    return {
        uri: `http://10.0.2.2:8000/storage/${img_bnk}`
    };
}
*/




