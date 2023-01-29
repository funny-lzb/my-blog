import React from 'react'
import Login from '../Login'
import Dashboard from '../components/dashBoard'


const code = new URLSearchParams(window.location.search).get("code")
console.log(code)

export default function Hobby() {
  return (
    <>
      {code ? <Dashboard code={code} /> : <Login />}
    </>
  )
}
