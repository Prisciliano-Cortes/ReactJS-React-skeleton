import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Skeleton-react
                </span>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
								`text-white rounded-full text-sm px-6 pb-[6px] pt-[3px] font-medium mr-2 ${
									isActive ? "bg-[#007AFF] text-white" : "bg-blue-700 text-[#282828]"
								}`
							}

                        >
                            Home React-Query
                        </NavLink>
                        <NavLink 
                            to="/blog" 
                            className={({ isActive }) =>
								`text-white rounded-full text-sm px-6 pb-[6px] pt-[3px] font-medium mr-2 ${
									isActive ? "bg-[#007AFF] text-white" : "bg-blue-700 text-[#282828]"
								}`
							}
                        >
                            Blog Router-loader
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}