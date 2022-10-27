import React from 'react'
import { TextInput, Label, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <section className=" login_section lg:py-20 py-14 bg-lightGray ">
            <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>
                <div className=' form_wrapper w-full mx-auto lg:max-w-lg'>
                    <h2 className="text-3xl font-semibold text-dark mt-7 mb-10 text-center">Login Now!</h2>
                    <form className="flex flex-col gap-4">


                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email2"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email2"
                                type="email"
                                placeholder="Email"
                                required={true}
                                shadow={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password2"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password2"
                                type="password"
                                placeholder='Password'
                                required={true}
                                shadow={true}
                            />
                        </div>

                        {/* <div className="flex items-center gap-2">
                            <Checkbox id="agree" />
                            <Label htmlFor="agree">
                                I agree with the{' '}
                                <a
                                    href="/forms"
                                    className="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    terms and conditions
                                </a>
                            </Label>
                        </div> */}
                        <Button type="submit">
                            Login
                        </Button>
                    </form>
                    <div className="flex justify-between items-center py-6">
                        <span className="text-lg text-dark font-normal ">Not signed up yet?</span><span className="text-dark text-lg font-normal"> <Link to="/registration" className='underline'>Register here</Link></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
