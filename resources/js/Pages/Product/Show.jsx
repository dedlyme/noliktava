import Authenticated from "@/Layouts/AuthedLayout";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function Show({ product }) {
    const { data, setData, delete: destroy, processing, errors, reset } = useForm(
        {},
    );

    const submit = (e) => {
        e.preventDefault();

        destroy(route("product.destroy", shelf.id));
    };

    return (
        <>
            <Authenticated>
                <section className="flex items-center justify-center w-screen h-screen">
                    <article className="w-full p-2 place-items-center grid grid-cols-2 border border-g mx-2 shadow-xl rounded-md">
                        <div className="grid gap-4 ">
                            <div className="border  border-gray-400 rounded-md shadow-md p-4">
                                <h1 className="text-3xl font-bold ">{product.name}</h1>
                                <p className="text-lg mt-5">{product.description}</p>
                            </div>
                            <p className="text-lg text-green-500"> Price: ${product.price} </p>
                            <div className="flex gap-4 items-center p-2 border border-gray-300 rounded-md">
                                <Link
                                    className="bg-black text-white flex items-center p-2 rounded-md px-5"
                                    href={`/products/${product.id}/edit`}
                                >
                                    Edit
                                </Link>
                                <form onSubmit={submit}>
                                    <button
                                        className=" bg-black text-white w-full p-2 rounded-md px-4"
                                        type="submit"
                                    >
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </div>
                        <img
                            src={`/${product.image}`}
                            alt={product.name}
                            className="w-[200px] h-auto object-cover mr-20 rounded-sm shadow-md"
                        />
                    </article>
                </section>
            </Authenticated>
        </>
    );
}