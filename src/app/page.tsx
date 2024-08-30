import { promises as fs } from 'fs';
import ProductList from './components/productList';
import { Product } from './Contract';
import Cart from './components/cart';


export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json' , 'utf8')
    const products = JSON.parse(file)
    return (
        <>
            <main className='bg-Rose-50 h-screen'>
            <div className='w-[85vw] mx-auto font-RedHat py-16 flex'>
                <div className='basis-[70%]'>
                    <h1 className='font-bold text-Rose-900 text-4xl'>Desserts</h1>
                    <div className='grid grid-cols-3 gap-6 mt-8'>
                    {
                        products.map((product : Product) => (
                        <ProductList product = {product}/>
                        ))
                    }
                    </div>
                </div>
                <div className='ml-10 basis-[30%]'>
                    <Cart />                
                </div>
            </div>
            </main>
        
        </>
    )
}
