import Image from 'next/image'
 
export default function Page() {
  return (
    <div className='flex justify-center mt-12'> 
      <Image
      src="/lender.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
  )
}