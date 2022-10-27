import React from 'react'
import { Accordion } from 'flowbite-react';

const Blog = () => {
    return (
        <section className='lg:py-20 py-14 bg-lightGray'>
            <div className="container mx-auto w-full max-w-7xl md:px-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <Accordion alwaysOpen={true}>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Whati is cors?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-dark ">
                                    Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                Why are you using firebase? What other options do you have to implement authentication?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-dark">
                                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                How does the private route work?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-dark">
                                    Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                                    The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title>
                                What is Node? How does Node work?
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-dark">
                                    Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                                </p>

                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>

            </div>

        </section>
    )
}

export default Blog
