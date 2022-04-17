import React from "react";
import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const OtherLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading || loadingGit) {
    return <Loading />;
  }

  if (error || errorGit) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {errorGit?.message}
      </p>
    );
  }
  if (user || userGit) {
    navigate("/home");
  }

  return (
    <>
      <div className="d-flex align-items-center w-25 mx-auto">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <div className="mx-3">or</div>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      {errorElement}
      <div className="w-50 mx-auto text-center mt-4">
        <button
          onClick={() => signInWithGoogle()}
          className="w-50 btn bg-info text-white mb-2 d-block mx-auto"
        >
          <FontAwesomeIcon icon={["fab", "google"]} />
          Google Sign In
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="w-50 btn bg-dark text-white mb-2 d-block mx-auto"
        >
          Github Sign In
        </button>
        <button className="w-50 btn bg-success text-white d-block mx-auto">
          Facebook Sign In
        </button>
      </div>
    </>
  );
};

export default OtherLogin;
