
import { Product } from "../Contract";

export default function ProductList({product} : {product : Product}){
    return (
        <>
        {/* koli */}
                {/* mahsol */}
                <div>
                    <div className="relative">
                        <img src={product.image.desktop} alt={product.name} className="rounded-lg"/>
                        {/* left-[30%] */}
                        <button className="bg-white flex  px-5 py-2 mx-auto rounded-full border border-Rose-500 absolute  -bottom-5 trans hover:text-Red hover:border-Red">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                            <span className="text-sm font-semibold ml-2">Add to Cart</span>
                        </button>
                    </div>
                    <div className="font-RedHat mt-8">
                        <p className="text-sm text-Rose-400">{product.category}</p>
                        <p className="font-semibold text-Rose-5900">{product.name}</p>
                        <p className="font-semibold text-Red">${product.price}</p>
                    </div>
                </div>
        </>
    )
}