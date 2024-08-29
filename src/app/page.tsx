import { promises as fs } from 'fs';

export default async function Home() {
  
  const file = await fs.readFile(process.cwd() + '/src/app/data.json' , 'utf8')
  const data = JSON.parse(file)
  return (
   <>
      <p>{data[0].name}</p>
   </>
  );
}
