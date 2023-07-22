import { useQuery } from "@tanstack/react-query"
import skeletonApi from "../api/skeletonApi"

const getPost = async() => {
    const res = await skeletonApi.get('/posts')

    return res.data
}

const getOnePost = async( id ) => {
    const res = await skeletonApi.get(`/posts/${ id }`)

    return res.data
}

//*** fetch data with react-query */
export const usePosts = () => {
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async() => await getPost(),
    })

    return {
        data,
        error,
        isError,
        isLoading
    }
}

//*** fetch data with react-query */
export const usePostId = ( id ) => {
    const { data, error, isError, isLoading } = useQuery({
        queryKey: ['onePost'],
        queryFn: async() => await getOnePost( id ),
    })

    return {
        data,
        error,
        isError,
        isLoading
    }
}

//*** fetch data with router-loader */
export const loaderPosts = async() => {
    const { data } = await skeletonApi.get('/posts')

    return data
}

//*** fetch data with router-loader */
export const loaderOnePost = async({ params }) => {
    const { data } = await skeletonApi.get(`/posts/${ params.id }`)

    return data
}