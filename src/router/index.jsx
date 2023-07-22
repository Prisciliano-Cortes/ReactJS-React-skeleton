import { createBrowserRouter } from "react-router-dom";
import { loaderOnePost, loaderPosts } from "../hooks/usePost";
import { Layout } from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                async lazy() { //*** Use lazy loading for components */
                    let { Home } = await import("../pages/Home");
                    return { Component: Home };
                },
            },
            {
                path: 'blog',
                loader: loaderPosts, //*** fetch data with router-loader */
                async lazy() { //*** Use lazy loading for components */
                    let { Blog } = await import("../pages/Blog");
                    return { Component: Blog };
                }
            },
            {
                path: '/:id',
                async lazy() { //*** Use lazy loading for components */
                    let { HomeDetail } = await import('../pages/HomeDetail')
                    return { Component: HomeDetail }
                }
            },
            {
                path: 'blog/:id',
                loader: loaderOnePost, //*** fetch data with router-loader */
                async lazy() { //*** Use lazy loading for components */
                    let { BlogDetail } = await import('../pages/BlogDetail')
                    return { Component: BlogDetail }
                }
            }
        ]
    }
])