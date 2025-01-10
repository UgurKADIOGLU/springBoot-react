import { useEffect, useMemo, useState } from "react";
import { SingUp } from "./api";
import { Input } from "./components/Input";
import { useTranslation } from "react-i18next";


export function Singup() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [succesMessage, setSuccesMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalErrors, setgeneralErrors] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        username: undefined,
      };
    });
  }, [username]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        password: undefined,
      };
    });
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setApiProgress(true);
    setSuccesMessage();
    setgeneralErrors();
    try {
      const response = await SingUp({
        username,
        email,
        password,
      });
      setSuccesMessage(response.data.message);
    } catch (axiosError) {
      if (axiosError.response?.data) {
        if (axiosError.response.data.status === 400) {
          setErrors(axiosError.response.data.validationError);
        }else{
          setgeneralErrors(axiosError.response.data.validationError);
        }
      } else {
        setgeneralErrors("unexpected error ocured. Please try again ...");
      }
    } finally {
      setApiProgress(false);
    }
  };

  const passwordRepeatError = useMemo(() => {
    if (password && password !== passwordRepeat) {
      return "password missmatch";
    }
  }, [password, passwordRepeat]);

  return (
    <>
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <form onSubmit={onSubmit} className="card">
            <div className="text-center card-header">
              <h1>{t("singUp")}</h1>
            </div>
            <div className="card-body">
              <Input
                id="username"
                label={t("username")}
                error={errors.username}
                onChange={(event) => setUserName(event.target.value)}
              />
              <Input
                id="email"
                label={t("email")}
                error={errors.email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                id="password"
                label={t("password")}
                error={errors.password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <Input
                id="passwordRepeat"
                label={t("passwordRepeat")}
                error={passwordRepeatError}
                type="password"
                onChange={(event) => setPasswordRepeat(event.target.value)}
              />
            </div>

            {succesMessage && (
              <div className="alert alert-success text-center">
                {succesMessage}
              </div>
            )}
            {generalErrors && (
              <div className="alert alert-danger text-center">
                {generalErrors}
              </div>
            )}

            <div className="text-center card-footer">
              <button
                disabled={
                  apiProgress || !password || password !== passwordRepeat
                }
                className="btn btn-primary"
              >
                {t("singUp")}{" "}
                {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
}
export default Singup
