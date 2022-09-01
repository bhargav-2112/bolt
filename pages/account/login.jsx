import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';

export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ email, password }) {
        return userService.login(email, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
      <Layout>
        <div className="card border-0">
          {/* <div className='mb-5'>
          <p className=" float-right">Don&apos;t have an account? <Link className="text-success" href="/account/register">Sign Up for Free</Link></p>
          </div>   */}
          <h4 className="text-center">Sign In</h4>
          <p className="text-center">Log in with your social accounts.</p>
          <div className="btn-toolbar mx-auto" role="toolbar" aria-label="Basic example">
            <button type="button" className="btn btn-brand">
            <i className="fa fa-google"></i> Google
            </button>
            <button type="button" className="btn btn-brand ml-2">
            <i className="fa fa-facebook"></i> Facebook
            </button>
          </div>
            <p className="text-center mt-4">Or continue with email</p>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder='Enter your email address'
                  {...register("email")}
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.email?.message}
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder='Enter password'
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <Link
                href="/account/forgotpassword"
                className="btn btn-link text-success float-right"
              >
                Forgot Password?
              </Link>
              <button
                disabled={formState.isSubmitting}
                className="btn btn-success btn-lg btn-block"
              >
                {formState.isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Log In
              </button>
              {/* <Link href="/account/register" className="btn btn-link">
                Register
              </Link> */}
            </form>
          </div>
        </div>
      </Layout>
    );
}
