import { useNavigate } from "react-router-dom"
import { usePosts } from "../hooks/usePost"

export const Home = () => {
    
    const navigate = useNavigate()

    //*** Custom hook with react-query */
    const { data = [], error, isError, isLoading } = usePosts()

    if ( isLoading ) {
        return <div>Loading...</div>
    } else if ( isError ) {
        return <div>{ error.message }</div>
    }

    const getOnePost = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-4">
            {
                data.map( ({ id, body, title }) => (
                    <div 
                        key={ id }
                        className="w-full p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 rounded-lg"
                    >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        { title }
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        { body }
                    </p>
                    <button
                        onClick={() => getOnePost(id)}
                        className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        View post
                    </button>
                </div>
                ))
            }
        </div>
    )
}