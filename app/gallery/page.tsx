
import Image from 'next/image';
export default function Page(){
  const imgs=['/img/sample1.jpg','/img/sample2.jpg','/img/sample3.jpg'];
  return (<main className="container">
    <h1>Gallery</h1>
    <div className="grid grid-3">
      {imgs.map((src,i)=>(<Image className="img" key={i} src={src} alt={`Sample ${i+1}`} width={600} height={400} />))}
    </div>
  </main>);
}
