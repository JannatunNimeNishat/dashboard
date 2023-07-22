import Image from 'next/image'
import loginImg from '../../public/login/loginImg.jpg'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen  justify-center items-center bg-white text-black">
      <div className='lg:w-[900px] lg:h-[564px] lg:flex border rounded-md'>
        <div className='lg:w-1/2'>
          <Image className='rounded-md' src={loginImg} alt='loginImg'></Image>
        </div>

        <div className='lg:w-1/2 py-5 px-5'>
          <h3 className='text-2xl font-bold'>Login</h3>
          <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>

          <div className='pt-5'>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text">E-Mail</span>
              </label>
              <input type="email" placeholder="Placeholder content" className="input input-bordered w-full max-w-full rounded-md" />

            </div>
            <div className="form-control w-full max-w-full pt-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Placeholder content" className="input input-bordered w-full max-w-full rounded-md" />

            </div>

            <p className='text-end py-3'>Forget password?</p>

            <Link href={'/dashboard'}>
              <button className='w-full bg-blue-600 text-center text-white py-2 rounded-md mt-2'>Login</button>
            </Link>


            <div className="divider py-5">OR</div>
            <Link href={'/dashboard'}>
              <button className='w-full text-center border py-2 rounded-md mt-2'>Register now</button>
            </Link>
          </div>

        </div>

      </div>
    </main>
  )
}
