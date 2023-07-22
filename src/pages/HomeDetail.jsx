import { useParams } from "react-router-dom"
import { usePostId } from "../hooks/usePost";

export const HomeDetail = () => {

    const { id } = useParams();

    //*** Custom hook with react-query */
    const { data, error, isError, isLoading } = usePostId( id )

    if ( isLoading ) {
        return <div>Loading...</div>
    } else if ( isError ) {
        return <div>{ error.message }</div>
    }

    return (
        <div className="w-full h-screen p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ data.title }</h4>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ data.body }</p>
        </div>
    )
}