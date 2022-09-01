import { Layout } from 'components/account'
import React from 'react'
import { Link } from 'components';

const forgotpassword = () => {
  return (
    <Layout>
      <div className="card border-0">
        <div className="mb-5">
          <p className="float-right">
            Don&apos;t have an account?{" "}
            <Link className="text-success" href="/account/login">
              Sign Up
            </Link>
          </p>
        </div>
        <h4 className="text-center">Forgot Password</h4>
        <p className="text-center">
          Enter the email you used to create this account to reset your
          password.
        </p>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder='Enter your email address' className="form-control" />
            </div>

            <button className="btn btn-success btn-lg btn-block">
              Continue
            </button>
            <p className="text-center mt-3">Nevermind, I got it</p>

            <Link href="/account/login">
              <p className="text-center">Back to Login</p>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default forgotpassword