import {isRouteErrorResponse, Link, useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <div id="error-page">
                    <h1>404 Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                    <Link to="/">Return Home</Link>
                    <p>
                        <i>{error.data}</i>
                    </p>
                </div>
            );
        }

        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.data}</i>
                </p>
            </div>
        );
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}