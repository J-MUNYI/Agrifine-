import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to a container ref.
 * Any child with class "reveal" gets class "revealed" added when it enters viewport.
 *
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject} - attach this ref to the container element
 */
const useScrollReveal = (options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // animate once
        }
      });
    }, defaultOptions);

    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll('.reveal');
    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return containerRef;
};

export default useScrollReveal;
