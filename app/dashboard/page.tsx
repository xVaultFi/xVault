import Image from 'next/image'
 
export default function Page() {
  return (
    <div className='flex justify-center mt-12'> 
      <Image
      src="/dashboard.png"
      width={1000}
      height={1000}
      alt="Picture of the author"
    />
    </div>
  )
}