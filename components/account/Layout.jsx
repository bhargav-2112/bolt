import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { userService } from 'services';
import { Link } from 'components/Link';

export { Layout };

function 
Layout({ children }) {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-4 bg-image"></div>
          <div className="col-md-8 col-lg-8">
            <div className="fixed-header">
              <p className='text-center mt-3 d-sm-none d-md-block'>Don&apos;t have an account?{" "}
                <Link className="text-success" href="/account/register">
                  Sign Up for Free
                </Link>
              </p>
                <Link className="float-right mr-5 text-success d-block d-sm-none" href="/account/register">
                  Sign Up
                </Link>
            </div>
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}