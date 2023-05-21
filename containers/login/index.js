import Link from 'next/link'
import { Button, Title, Input, Checkbox, InputPass } from '@/components'


function Home() {
    return (
        <main >
            <div className='font-[Jost] w-8/12 mx-auto md:w-1/3  mt-12 mb-12'>


                <div className='mb-12'>
                    <Title color="secondary" size="large">Log In</Title>
                </div>
                <form>
                    <div className=''>
                        <div className='mb-6'>
                            <Input type="email" label="Email" name="email" placeholder="Email" />
                        </div>

                        <div className=''>
                            <InputPass label="Password" name="password" placeholder="Password" />
                        </div>
                    </div>

                    <div className='mt-3 my-6 flex justify-between  text-[#4f4cee]'>
                        <Checkbox name="rememberMe" message="Remember Me" />
                    </div>

                    <Button >Log In</Button>
                </form>
                <div className='mt-3 text-center flex flex-col text-[#4f4cee] text-md'>
                    <Link href="/" className='text-sm md:text-base mb-3 text-[#7F7DF3]'>Forgot Password?</Link>
                    <hr />
                    <Link href="/signup" className='mt-3'>Don&apos;t You Have an Account?</Link>
                </div>

            </div>

        </main>
    )
}


export default Home