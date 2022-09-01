import { Link } from 'components'
import { Layout } from 'components/account'
import React from 'react'

const otp = () => {
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
        <h2 className="text-center">Enter Your Security Code</h2>
        <p className="text-center">Please complete the verification below.</p>
        <div className="card-body">
          <form className="digit-group text-center">
            <input
              type="text"
              id="digit-1"
              name="digit-1"
              data-next="digit-2"
            />
            <input
              type="text"
              id="digit-2"
              name="digit-2"
              data-next="digit-3"
              data-previous="digit-1"
            />
            <input
              type="text"
              id="digit-3"
              name="digit-3"
              data-next="digit-4"
              data-previous="digit-2"
            />
            <input
              type="text"
              id="digit-4"
              name="digit-4"
              data-previous="digit-3"
            />
          </form>
            <button className="btn btn-resend btn-sm">Resend Code</button>
            <button className="btn btn-success btn-sm float-right">
              Continue
            </button>
        </div>
      </div>
    </Layout>
  );
}

export default otp