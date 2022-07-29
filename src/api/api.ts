import axios from "axios";
import {saveProfile} from "../redux/profileReducer";



const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e3f4a114-326f-49a7-baff-a861cb56c1d2'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId:number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId:number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
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
        return instance.put(`profile/status`,{status: status})
    },
    saveProfile(profile:string) {
        return instance.put(`profile/`,profile)
    },
    savePhoto(photo:any) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)},
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`,{email,password,rememberMe})},
    logout() {
        return instance.delete(`auth/login`)},
}




