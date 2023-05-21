import Link from 'next/link'
import { Button, Title, Input, InputPass } from '@/components'



function Page() {
    return (
        <main >
            <div className='font-[Raleway] w-8/12 mx-auto  lg:w-6/12  mt-12 mb-12'>


                <div className='mb-12'>
                    <Title color="secondary" size="large">Sign Up</Title>
                </div>
                <form>
                    <div className='md:flex-row flex-col flex'>
                        <div className='w-full px-5'>
                            <div className='mb-6'>
                                <Input type="text" label="First Name" name="name" placeholder="First Name" />
                            </div>

                            <div className='mb-6'>
                                <Input type="text" label="Last Name" name="surname" placeholder="Last Name" />
                            </div>

                            <div className='mb-6'>
                                <Input type="email" label="Email" name="email" placeholder="Email" />
                            </div>
                        </div>



                        <div className='w-full px-5'>
                            <div className='mb-6'>
                                <InputPass label="Password" name="pass" placeholder="Password" />
                            </div>

                            <div className='mb-6'>
                                <InputPass label="Password Repeat" name="pass-r" placeholder="Password" />
                            </div>

                            <div className='mb-6'>
                                <Input type="tel" label="Telephone" name="telephone" placeholder="Telephone" />
                            </div>


                        </div>

                    </div>


                    <div className='w-2/5 mx-auto'>
                        <Button>Sign Up</Button>
                    </div>
                </form>
                <div className='mt-6 text-center text-[#4f4cee] text-md'>
                    <Link href="/login">Do You Have an Account?</Link>
                </div>

            </div>


        </main>
    )
}

export default Page