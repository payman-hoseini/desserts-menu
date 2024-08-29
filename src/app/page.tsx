import { promises as fs } from 'fs';
import ProductList from './components/productList';
import { Product } from './Contract';

export default async function Home() {
  
  const file = await fs.readFile(process.cwd() + '/src/app/data.json' , 'utf8')
  const products = JSON.parse(file)
  return (
   <>
      <main className='bg-Rose-50 h-screen'>
        <div className='w-[80vw] mx-auto font-RedHat py-16'>
          <div>
              <h1 className='font-bold text-Rose-900 text-3xl'>Desserts</h1>
              {
                products.map((product : Product) => (
                  <ProductList product = {product}/>
                ))
              }
          </div>
          <div>

          </div>
        </div>
      </main>
   </>
  );
}
