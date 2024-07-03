import {RefObject, useEffect, useRef, useState} from 'react';

const useFadeInOnScroll = (threshold = 0.1, delay = 0): [RefObject<HTMLDivElement>, boolean] => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        let timeoutId: NodeJS.Timeout;

        const observer = new IntersectionObserver(([entry]) => {
            // Clear any existing timeout
            clearTimeout(timeoutId);

            // Set isVisible to true after the delay, but only if the element is intersecting
            if (entry.isIntersecting) {
                timeoutId = setTimeout(() => {
                    setIsVisible(true);
                }, delay);
            } else {
                // If the element is not intersecting, set isVisible to false immediately
                setIsVisible(false);
            }
        }, {threshold});

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            clearTimeout(timeoutId);
        };
    }, [threshold, delay]);

    return [ref, isVisible];
};

export default useFadeInOnScroll;