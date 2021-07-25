const baseURL = "https://us-central1-auth-development-751fc.cloudfunctions.net/app";

export async function postUser(request) {
    const results = await fetch(`${baseURL}/newuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    })
    return results.json();
}

// first attempt at specifically calling backend for updating subscription status
// (not sure if this is correct)

/*export async function updateStatus(request) {
    const status = await fetch(`${baseURL}/updatesubscriptionstatus`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    })
    return status.json();
}*/
