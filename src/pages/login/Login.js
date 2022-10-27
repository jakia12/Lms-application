import React, { useState } from 'react'
import { TextInput, Label, Button } from 'flowbite-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthState } from '../../context/AuthContext'
const Login = () => {
    const { signIn, setLoading } = AuthState();

    //error state
    const [error, setError] = useState();

    const navigate = useNavigate();
    const location = useLocation();
    //path location
    const from = location.state?.from?.pathname || '/';

    //state for form validation
    const [email, setEmail] = useState();

    const [password, setPassword] = useState();

    //handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    //handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    //handle submit for form submission

    const handleSubmit = event => {
        event.preventDefault();

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setEmail('');
                setPassword('');
                setError('');
                navigate(from, { replace: true });
                console.log(user.displayName);
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <section className=" login_section lg:py-20 py-14 bg-lightGray ">
            <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>
                <div className=' form_wrapper w-full mx-auto lg:max-w-lg'>
                    <h2 className="text-3xl font-semibold text-dark mt-7 mb-10 text-center">Login Now!</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <span className="text-red-600">{error}</span>
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
                                value={email}
                                onChange={handleEmailChange}
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
                                value={password}
                                onChange={handlePasswordChange}
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
