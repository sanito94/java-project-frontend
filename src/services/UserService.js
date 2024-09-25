import axios from 'axios';


const USER_BASE_REST_API_URL = "http://localhost:9090/users";
var username = 'admin';
var password = 'admin123';
var basicAuth = 'Basic ' + btoa(username + ':' + password);
var headers = {
    'Authorization': basicAuth,
    "Access-Control-Allow-Origin": "*"
}

class UserService {
    getAllUsers() {
        return axios.get(USER_BASE_REST_API_URL, {
            headers: headers
        });
    }

    createUser(user) {
        return axios.post(USER_BASE_REST_API_URL, user, {
            headers: headers
        });
    }

    getUserById(userId) {
        return axios.get(USER_BASE_REST_API_URL + "/" + userId, {
            headers: headers
        });
    }

    updateUser(userId, user) {
        return axios.put(USER_BASE_REST_API_URL + "/" + userId, user, {
            headers: headers
        });
    }

    deleteUser(userId) {
        return axios.delete(USER_BASE_REST_API_URL + "/" + userId, {
            headers: headers
        })
    }
}

export default new UserService();