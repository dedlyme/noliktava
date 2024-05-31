import { useForm } from "@inertiajs/react";

    const Navbar = () => {
        const { data, setData, delete: destroy, processing } = useForm({});

        const submit = (e) => {
            e.preventDefault();
            destroy(route("logout"));
        };
        return (
            <>
                <nav className="bg-white h-[80px] flex items-center justify-center w-full dark:text-white dark:bg-gray-900 fixed top-0">
                    <div className="container flex items-center justify-between w-full mx-[150px]">
                        <div className="flex items-center">
                            <a href="/">
                                <img className="w-[60px] h-[60px] rounded-full" src="/assets/logo.jpg" alt="logo" />
                            </a> 
                        </div>

                    <ul className="flex items-center">
                        <li className="mr-6 transition duration-150 ease-out hover:ease-in hover:bg-sky-900 p-2 rounded-md ">
                            <a href="/dashboard">Dashboard</a>
                        </li>

                        <li className="mr-6 transition duration-150 ease-out hover:ease-in hover:bg-sky-900 p-2 rounded-md">
                            <a href="/reports">Reports</a>
                        </li>

                        <li className="mr-6 transition duration-150 ease-out hover:ease-in hover:bg-sky-900 p-2 rounded-md">
                            <a href="/users">Users</a>
                        </li>

                        <li className="mr-6 transition duration-150 ease-out hover:ease-in hover:bg-sky-900 p-2 rounded-md">
                            <a href="/shelves">Shelves</a>
                        </li>

                        <li className="mr-6 transition duration-150 ease-out hover:ease-in hover:bg-sky-900 p-2 rounded-md">
                            <a href="/products">Products</a>
                        </li>

                           
                        </ul>
                        <ul className="flex items-center" >
                        <li className="mr-6">
                                <form onSubmit={submit}>
                                    <button
                                        type="submit"
                                        className="p-2 px-4 text-white bg-black rounded hover:bg-sky-700"
                                    >
                                        Logout
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    };

    export default Navbar;
