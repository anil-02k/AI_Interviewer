'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

export default function SignUpPage() {
  return (

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://i.pinimg.com/736x/dd/3d/13/dd3d13a40ee87aa0ce458018967c02c1.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="hidden lg:relative lg:block lg:p-12">

        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to AI Interviewer
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        Experience next-level interview preparation with AI Interviewer — your personal guide for mastering interview skills, receiving instant feedback, and boosting your career confidence.

        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href=""
          >
          </a>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to AI Interviewer
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500 pb-5">
          Experience next-level interview preparation with AI Interviewer — your personal guide for mastering interview skills, receiving instant feedback, and boosting your career confidence.

          </p>
        </div>

        <div className="grid w-full flex-grow items-center bg-white border border-blue-200 rounded-2xl px-4 sm:justify-center shadow-lg">
      <SignUp.Root>
          {/* Start Step */}
          <SignUp.Step name="start" className="w-full space-y-6 rounded-2xl px-4 py-10 sm:w-96 sm:px-8">
              <header className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="mx-auto size-10"
                >
                  <mask id="a" width="40" height="40" x="0" y="0" maskUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                  </mask>
                  <g fill="#0A0A0A" mask="url(#a)">
                    <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                    <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                  </g>
                </svg>
              </header>

              <h1 className="text-xl font-medium tracking-tight text-neutral-950 text-center">
                Create your account
              </h1>

              <div className="space-y-2">
                <Clerk.Connection
                  name="facebook"
                  className="flex w-full items-center justify-center gap-x-3 rounded-md bg-[#1877F2] text-white px-2 py-1.5 text-sm font-medium shadow outline-none hover:bg-[#166FE5] focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-white/60 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="font-medium">Sign up with Facebook</span>
                </Clerk.Connection>

                <Clerk.Connection
                  name="google"
                  className="flex w-full items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    aria-hidden
                    className="w-5 h-5"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="currentColor"
                        d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-neutral-950 font-medium">Sign up with Google</span>
                </Clerk.Connection>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-neutral-500">Or sign up with email</span>
                </div>
              </div>

              <div className="space-y-4">
                <Clerk.Field name="emailAddress" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-neutral-950">
                    Email address
                  </Clerk.Label>
                  <Clerk.Input
                    required
                    placeholder="Enter your email"
                    className="w-full border-b border-neutral-200 bg-white pb-2 text-sm text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-600"
                  />
                  <Clerk.FieldError className="text-red-600 text-xs" />
                </Clerk.Field>

                <Clerk.Field name="password" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-neutral-950">
                    Password
                  </Clerk.Label>
                  <Clerk.Input
                    required
                    type="password"
                    placeholder="Create a password"
                    className="w-full border-b border-neutral-200 bg-white pb-2 text-sm text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-600"
                  />
                  <Clerk.FieldError className="text-red-600 text-xs" />
                </Clerk.Field>
              </div>

              <SignUp.Action
                submit
                className="relative w-full rounded-md bg-neutral-600 bg-gradient-to-b from-neutral-500 to-neutral-600 py-1.5 text-sm font-medium text-white shadow-[0_1px_1px_0_theme(colors.white/10%)_inset,0_1px_2.5px_0_theme(colors.black/36%)] outline-none ring-1 ring-inset ring-neutral-600 before:absolute before:inset-0 before:rounded-md before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:bg-neutral-600 active:text-white/60 active:before:opacity-0 cursor-pointer"
              >
                Sign Up
              </SignUp.Action>
            

            <p className="text-center text-sm text-neutral-500">
              Already have an account?{' '}
              <a href="/sign-in" className="text-neutral-600 hover:underline cursor-pointer">
                Sign in
              </a>
            </p>
          </SignUp.Step>

          {/* Continue Step */}
          <SignUp.Step name="continue">
            <div className="w-full space-y-6 rounded-2xl px-4 py-10">
              <h1 className="text-xl font-medium tracking-tight text-neutral-950 text-center">
                Complete your profile
              </h1>

              <div className="space-y-4">
                <Clerk.Field name="username" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-neutral-950">
                    Username
                  </Clerk.Label>
                  <Clerk.Input
                    required
                    placeholder="Enter your username"
                    className="w-full border-b border-neutral-200 bg-white pb-2 text-sm text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-600"
                  />
                  <Clerk.FieldError className="text-red-600 text-xs" />
                </Clerk.Field>
              </div>

              <SignUp.Action
                submit
                className="relative w-full rounded-md bg-neutral-600 bg-gradient-to-b from-neutral-500 to-neutral-600 py-1.5 text-sm font-medium text-white shadow-[0_1px_1px_0_theme(colors.white/10%)_inset,0_1px_2.5px_0_theme(colors.black/36%)] outline-none ring-1 ring-inset ring-neutral-600 before:absolute before:inset-0 before:rounded-md before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:bg-neutral-600 active:text-white/60 active:before:opacity-0 cursor-pointer"
              >
                Continue
              </SignUp.Action>
            </div>
          </SignUp.Step>

          {/* Verification Step */}
          <SignUp.Step name="verifications">
            <div className="w-full space-y-6 rounded-2xl px-4 py-10">
              <SignUp.Strategy name="phone_code">
                <h1 className="text-xl font-medium tracking-tight text-neutral-950 text-center">
                  Verify your phone
                </h1>
                <p className="text-neutral-600 text-sm text-center">
                  Check your phone for the verification code
                </p>

                <Clerk.Field name="code" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-neutral-950">
                    Verification code
                  </Clerk.Label>
                  <Clerk.Input
                    required
                    placeholder="Enter verification code"
                    className="w-full border-b border-neutral-200 bg-white pb-2 text-sm text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-600"
                  />
                  <Clerk.FieldError className="text-red-600 text-xs" />
                </Clerk.Field>

                <SignUp.Action
                  submit
                  className="relative w-full rounded-md bg-neutral-600 bg-gradient-to-b from-neutral-500 to-neutral-600 py-1.5 text-sm font-medium text-white shadow-[0_1px_1px_0_theme(colors.white/10%)_inset,0_1px_2.5px_0_theme(colors.black/36%)] outline-none ring-1 ring-inset ring-neutral-600 before:absolute before:inset-0 before:rounded-md before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:bg-neutral-600 active:text-white/60 active:before:opacity-0 cursor-pointer"
                >
                  Verify Phone
                </SignUp.Action>
              </SignUp.Strategy>

              <SignUp.Strategy name="email_code">
                <h1 className="text-xl font-medium tracking-tight text-neutral-950 text-center">
                  Verify your email
                </h1>
                <p className="text-neutral-600 text-sm text-center">
                  Check your email for the verification code
                </p>

                <Clerk.Field name="code" className="space-y-2">
                  <Clerk.Label className="block text-sm font-medium text-neutral-950">
                    Verification code
                  </Clerk.Label>
                  <Clerk.Input
                    required
                    placeholder="Enter verification code"
                    className="w-full border-b border-neutral-200 bg-white pb-2 text-sm text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-600"
                  />
                  <Clerk.FieldError className="text-red-600 text-xs" />
                </Clerk.Field>

                <SignUp.Action
                  submit
                  className="relative w-full rounded-md bg-neutral-600 bg-gradient-to-b from-neutral-500 to-neutral-600 py-1.5 text-sm font-medium text-white shadow-[0_1px_1px_0_theme(colors.white/10%)_inset,0_1px_2.5px_0_theme(colors.black/36%)] outline-none ring-1 ring-inset ring-neutral-600 before:absolute before:inset-0 before:rounded-md before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:bg-neutral-600 active:text-white/60 active:before:opacity-0 cursor-pointer"
                >
                  Verify Email
                </SignUp.Action>
              </SignUp.Strategy>
            </div>
          </SignUp.Step>
        
      </SignUp.Root>
    </div>
        
      </div>
    </main>
  </div>
</section>
  )
}
