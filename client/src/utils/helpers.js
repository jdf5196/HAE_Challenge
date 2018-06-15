export const sortArrObjs = (arr, param, type)=>{
    return arr.slice().sort((a, b)=>{
        if(a[param] < b[param]){
            if(type === "decending"){
                return -1;
            }else{
                return 1;
            }
        }
        if(a[param] > b[param]){
            if(type === "decending"){
                return 1
            }else{
                return -1
            }
        }
        return 0
    });
};

export async function apiGET(){
    try {
        const response = await fetch("/candidates/");
        const candidates = await response.json();
        return candidates;
    } catch (e) {
        console.error("API request raised an error:", e);
    }
}

export async function apiPATCH(id, value){
    let data = JSON.stringify({status: value});
    try {
        const response = await fetch(`/candidates/${id}/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: data
        });
        const candidate = await response.json();
        return candidate;
    } catch(e){
        console.error("API request raised an error:", e)
    }
}