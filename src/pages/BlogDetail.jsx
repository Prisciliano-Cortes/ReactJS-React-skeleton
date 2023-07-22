import { useLoaderData } from "react-router-dom"

export const BlogDetail = () => {

    //*** Custom hook with router-loader */
    const data = useLoaderData()

    return (
        <div>
            <h4>{ data.title }</h4>
            <p>{ data.body }</p>
        </div>
    )
}