import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';

export default Register;

function Register() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', { keepAfterRouteChange: true });
                router.push('login');
            })
            .catch(alertService.error);
    }

    return (
      <Layout>
        <div className="card border-0">
          {/* <div className="mb-5">
            <p className="float-right">
              Already have an account?{" "}
              <Link className="text-success" href="/account/login">
                Log in
              </Link>
            </p>
          </div> */}
          <h4 className="text-center">Create Account</h4>
          <p className="text-center">Log in with your social accounts.</p>
          <div
            className="btn-toolbar mx-auto"
            role="toolbar"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-brand">
            <i className="fa fa-facebook"></i> Google
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
                  type="email"
                  placeholder="Enter email address"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">By signing up, I confirm that I’m 18 years of age or older and that I’ve read and agreed to the <Link className="text-success" href={''}>User Agreements</Link> and <Link className="text-success" href={''}>Privacy Policy</Link>.
                </label>
              </div>
              <button
                disabled={formState.isSubmitting}
                className="btn btn-success btn-lg btn-block mt-2"
              >
                {formState.isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Sign Up
              </button>
              {/* <Link href="/account/login" className="btn btn-link">
                Cancel
              </Link> */}
            </form>
          </div>
        </div>
      </Layout>
    );
}
