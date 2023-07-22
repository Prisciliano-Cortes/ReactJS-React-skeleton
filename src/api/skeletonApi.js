import axios from "axios";

const skeletonApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export default skeletonApi