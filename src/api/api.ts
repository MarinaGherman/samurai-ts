import axios from "axios";

const  baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd0ce4cd8-d0d2-4152-99ad-f6e1407cb23f'
    }
})
//когда будет кей - заменить аксиос на инстанс and delete baseURL +
export const usersApi = {
    getUsers(currentPage =1,pageSize = 10)  {
        return axios.get(baseURL + `users?page=${currentPage}&count=${pageSize}`
        ).then((response:any) =>{
            return response.data
        });
    }
}


