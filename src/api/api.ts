import axios from "axios";



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd4df065f-fd45-48fe-adda-b1fec39821b3'
    }
})

export const usersApi = {
    getUsers(currentPage =1,pageSize = 10)  {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`
        ).then((response:any) =>{
            return response.data
        });
    },

    deleteFollowers(id:number) {
        return instance.delete(`follow/${id}`)
            .then((response:any) =>  {
            return response.data
        })
    },
    getFollower(id:number) {
        return instance.post(`follow/${id}`)
            .then((response:any) =>  {
                return response.data
            })
    }
}




