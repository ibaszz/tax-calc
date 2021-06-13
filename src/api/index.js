import axios from 'axios';

const baseURL = "http://localhost:5000"

const callApi = (data) => {
    return axios({
        baseURL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        url: "/api/tax",
        method: 'post',
        data
    })
}

export default callApi;