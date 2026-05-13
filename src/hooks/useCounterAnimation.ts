import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimal?: number;
}

export const useCounterAnimation = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
  decimal = 0
}: UseCounterAnimationOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = start + (end - start) * easeOutQuart;
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, start, end, duration, delay]);

  const formatNumber = (num: number): string => {
    const formattedNum = decimal > 0 ? num.toFixed(decimal) : Math.floor(num).toString();
    return `${prefix}${formattedNum}${suffix}`;
  };

  return {
    ref: elementRef,
    value: formatNumber(count)
  };
};