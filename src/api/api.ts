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
    unfollow(userId:number) {
        return instance.delete(`follow/${userId}`)
            .then((response:any) =>  {
            return response.data
        })
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`)
            .then((response:any) =>  {
                return response.data
            })
    },
    getProfile(userId:number) {
        //чтоб не рефакторить в коде просто делигирую profileAPI
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId:number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string) {
        return instance.put(`profile/status/`,{status: status})
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)}
}




