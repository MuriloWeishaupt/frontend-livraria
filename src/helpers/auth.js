import { jwtDecode } from "jwt-decode";

export default function GetUser() {
    const token = sessionStorage.getItem("token-jwt");

    if (!token) {
        return null;
    }

    try {
        const decoded = jwtDecode(token)
        return decoded;
    } catch (error) {
        console.log(error)
        return null;
    }

}

function isAuthenticated() {
    return !!GetUser();
}

export {GetUser, isAuthenticated};