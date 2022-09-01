import { Link } from 'components'
import { Layout } from 'components/account'
import React from 'react'

const confirmEmail = () => {
  return (
    <Layout>
      <div className="card border-0">
        <div className="mb-5">
          <p className="float-right">
            Already have an account?{" "}
            <Link className="text-success" href="/account/login">
              Log in
            </Link>
          </p>
        </div>
        <h2 className="text-center">Let&apos;s Confirm Your Email Address</h2>
        <p className="text-center">
        Enter the 4-digit code we sent to t*m@gmail.com
        </p>
        <div className="card-body">
          <form>
            <p className="text-center">
              Receive your code via email at tranm••••••••••••@gm•••.com
            </p>
            <button className="btn btn-success btn-lg btn-block">
              Continue
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default confirmEmail