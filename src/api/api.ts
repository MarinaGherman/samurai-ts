import axios from "axios";

const  baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd4df065f-fd45-48fe-adda-b1fec39821b3'
    }
})
//когда будет кей - заменить аксиос на инстанс and delete baseURL +
export const usersApi = {
    getUsers(currentPage =1,pageSize = 10)  {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`
        ).then((response:any) =>{
            return response.data
        });
    }
}


