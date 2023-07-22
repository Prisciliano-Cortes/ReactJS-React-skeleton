import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from "react-router-dom"
import { router } from "./router"

export const App = () => {
    const queryClient = new QueryClient();
    
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools /> 
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}
