
import { Product } from "../Contract";

export default function ProductList({product} : {product : Product}){
    return (
        <>
        {/* koli */}
            <div> 
                {/* mahsol */}
                <div>
                    <div>
                        <img src={product.image.desktop} alt={product.name}/>
                        <button>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}