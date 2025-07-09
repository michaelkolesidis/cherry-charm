/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import { useEffect, useRef, useState } from 'react';

export default function useAnimatedNumber(
  target: number,
  duration: number = 1000
) {
  const [animatedValue, setAnimatedValue] = useState(target);
  const animationFrameId = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const startValueRef = useRef<number>(target);

  useEffect(() => {
    startTimeRef.current = performance.now();
    startValueRef.current = animatedValue;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out quadratic: faster at start, slower at end
      const easedProgress = 1 - Math.pow(1 - progress, 2);

      const change = target - startValueRef.current;
      const nextValue = startValueRef.current + change * easedProgress;

      if (progress < 1) {
        setAnimatedValue(Math.round(nextValue));
        animationFrameId.current = requestAnimationFrame(step);
      } else {
        setAnimatedValue(target);
      }
    };

    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [target, duration]);

  return animatedValue;
}
