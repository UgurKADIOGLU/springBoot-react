import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { activateUser } from "./api";

export default function Activation() {
  const { token } = useParams();
  const [apiProgress, setApiProgress] = useState();
  const [succesMessage, setSuccesMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    async function activate() {
      setApiProgress(true);
      try {
        const response = await activateUser(token);
        setSuccesMessage(response.data.message);
      } catch (axiosError) {
        setErrorMessage(axiosError.response.data.message);
      } finally {
        setApiProgress(false);
      }
    }
    activate();
  }, []);
  return <>
  {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
                 {succesMessage && (
              <div className="alert alert-success text-center">
                {succesMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger text-center">
                {errorMessage}
              </div>
            )}
  </>;
}


