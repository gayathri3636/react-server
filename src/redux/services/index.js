export function GetDataFromServer(apiPath, reqMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    if (!reqMethod && reqMethod !== "POST") {
        return fetch(apiPath, { method: 'GET', headers: myHeaders })

    } else {
        if (formBody) {
            let fetchData = {
                method: 'POST',
                body: JSON.stringify(formBody),
                headers: myHeaders
            }
            return fetch(apiPath, fetchData);
        }
    }
}