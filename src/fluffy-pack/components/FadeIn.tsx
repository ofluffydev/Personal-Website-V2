import { ReactNode, forwardRef } from 'react';
import useFadeInOnScroll from "../hooks/fluffy-hooks.tsx";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    threshold?: number;
}

const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
    ({ children, delay = 0, threshold = 0.1 }, forwardedRef) => {
        const [internalRef, isVisible] = useFadeInOnScroll(threshold, delay);

        const setRefs = (element: HTMLDivElement | null) => {
            (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = element;

            if (typeof forwardedRef === 'function') {
                forwardedRef(element);
            } else if (forwardedRef) {
                (forwardedRef).current = element;
            }
        };

        return (
            <div
                ref={setRefs}
                className={`transition-opacity duration-1000 ease-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {children}
            </div>
        );
    }
);

FadeIn.displayName = 'FadeIn';

export default FadeIn;