import { useRouteError } from "react-router-dom";
import type { FC } from "react";

type RouteError = {
  statusText?: string;
  message?: string;
};
const ErrorPage: FC = () => {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>404</h1>
      <p>ページが存在しません</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
