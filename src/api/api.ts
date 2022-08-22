import axios, {AxiosResponse} from "axios";
import {ProfileType} from "../redux/profileReducer";
import {LoginParamsType} from "../redux/auth-reducer";

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
        return instance.post<RespType<AuthDataType>>(`follow/${userId}`)
    },
    unfollow(userId:number) {
        return instance.delete<RespType<AuthDataType>>(`follow/${userId}`)
    },
    getProfile(userId:number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export type AuthDataType = {
    id:number,
    email: string
    login:string
}
export type RespType<T = {}> = {
    resultCode: 0
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
}


export const profileAPI = {
    getProfile(userId:number) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
    getStatus(userId:number) {
        return instance.get<AxiosResponse<RespType>, any>(`profile/status/` + userId)
    },
    updateStatus(status:string) {
        return instance.put<AxiosResponse<RespType>, any>(`profile/status`,{status: status})
    },
    saveProfile(profile:string) {
        return instance.put(`profile/`,profile)
    },
    updateProfile(profile: ProfileType){
        return instance.put<AxiosResponse<RespType>,any>(`profile`, {...profile})
    },
    savePhoto(photo:any) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put<RespType<{photos:{small:"", large:""}}>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}


export const authAPI = {
    me() {
        return instance.get<RespType<AuthDataType>>(`auth/me`)},
    login(data: LoginParamsType) {
        return instance.post<RespType<AuthDataType>>(`auth/login`,data)},
    logout() {
        return instance.delete<RespType<AuthDataType>>(`auth/login`)},
}




