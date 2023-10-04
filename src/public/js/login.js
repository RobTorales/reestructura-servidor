const loginUser = async () => {
    try {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        const response = await fetch('/api/sessions/login', {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ email: email, pass: password }) 
        });
        
        const data = await response.json();
        console.log(data);

        if (data.status === "ok") {
            location.href = "/products";
        } else {
            console.error("Error en la respuesta del servidor:", data.message);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}

document.getElementById("btnLogIn").onclick = loginUser;