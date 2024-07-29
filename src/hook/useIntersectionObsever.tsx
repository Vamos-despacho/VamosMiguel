import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (
    callback?: IntersectionObserverCallback,
    options?: IntersectionObserverInit
): [boolean, React.RefObject<HTMLDivElement>] => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!targetRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsIntersecting(entry.isIntersecting);
            if (callback) {
                callback(entries, observer);
            }
        }, options);

        observer.observe(targetRef.current);

        return () => {
            observer.disconnect();
        };
    }, [callback, options]);

    return [isIntersecting, targetRef];
};

export default useIntersectionObserver;
