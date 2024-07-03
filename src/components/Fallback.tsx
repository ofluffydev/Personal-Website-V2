import {renderToString} from "react-dom/server";
import {FC} from "react";

/**
 * Interface defining the props for the Fallback component.
 * @interface
 * @property {string} supportEmail - The email address to contact for support.
 */
interface FallbackProps {
    supportEmail: string;
}

/**
 * Fallback component rendered when a container element is not found.
 * This component is server-side rendered to a string.
 *
 * @param {FallbackProps} props - The props for the Fallback component.
 * @returns {string} The HTML string of the Fallback component.
 */
export const Fallback: FC<FallbackProps> = ({supportEmail}) => {
    const html = <div>
        <h1>Container element not found!</h1>
        <h2>Make sure the container element exists in the HTML file.</h2>
        <p>If you are a user of the website, and refreshing the page doesn't fix this, please contact me at
            {supportEmail}</p>
    </div>

    return renderToString(html);
}

export default Fallback;