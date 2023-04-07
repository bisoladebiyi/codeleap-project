import axios from "axios"
import { BASE_URL } from "../utils/constants/baseUrl"
import { IPostBody } from "../utils/interfaces/interfaces"

export const getPosts = async (newUrl?: string | null) => {
    const options = {
        url: newUrl || BASE_URL,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const { data }: any = await axios(options)
        return data
    } catch (error) {
        throw error
    }
}

export const createPost = async (data: IPostBody) => {
    const options = {
        url: BASE_URL,
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const { data }: any = await axios(options)
        return data
    } catch (error) {
        throw error
    }
}

export const deletePost = async (id: number) => {
    const options = {
        url: BASE_URL + id.toString() + "/",
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const { data }: any = await axios(options)
        return data
    } catch (error) {
        throw error
    }
}

export const editPost = async (id: number, data: IPostBody) => {
    const options = {
        url: BASE_URL + id.toString() + "/",
        method: 'PATCH',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const { data }: any = await axios(options)
        return data
    } catch (error) {
        throw error
    }
}