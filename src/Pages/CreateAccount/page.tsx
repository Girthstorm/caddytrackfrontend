"'use client"

import React, { useEffect, useState } from 'react'
import { Label, TextInput, Select, Button } from 'flowbite-react'
import { useRouter } from 'next/navigation'



const CreateAccount = () => {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const router = useRouter()

    const userInfo = {
        Username: username,
        Password: password,
        Email: email
    }
    try{
        CreateAccount()
    }catch{
        alert("Not Working")
    }



  return (
    <>
    <div className="bg-white opacity-95 rounded-xl py-5">
      <p className="text-3xl text-center pb-4 tracking-wide">Log In</p>
      <form className="flex flex-col gap-4">
            <div className="mx-auto">
              <div className="mb-2 block">
                <Label htmlFor="username1" value="Username" />
              </div>
              <TextInput
                id="email1"
                type="text"
                className="w-72 border-black"
                onChange={(e) => {setUsername(e.target.value)}}
                required
              />
            </div>
            <div className="mb-8 mx-auto">
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                className="w-72 border-black"
                onChange={(e) => {setPassword(e.target.value)}}
                required
              />
            </div>
            

            <div className="flex space-x-6 mb-4 mx-auto">
              <Button
                className="w-36 text-white border-black"
                color="blue"
                // onClick={handleLogin}
              >
                Log In
              </Button>
              {/* <a onClick={handleForgot} className="underline text-sm my-auto">
                Forget Password?
              </a> */}
            </div>
            <div className="mx-auto">
                <a>Don't Have An Account</a>
              <a
                // onClick={handleCreate}
                className="underline text-[#0744A0] text-sm text-center"
              >
                Click Here
              </a>
            </div>
          </form>
          </div>
    </>
  )
}

export default CreateAccount
