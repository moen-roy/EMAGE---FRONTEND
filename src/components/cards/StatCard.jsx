import React, { useEffect, useRef, useState } from 'react';

const StatCard = ({ number, label, duration = 1500 }) => {
  // number may include a suffix like '+'
  const match = String(number).match(/^(\d+)(\+?)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] || '' : String(number);

  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
  startRef.current = null;

    const step = (now) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(progress * target);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return (
    <div className="bg-emerald-600 text-white p-6 rounded-2xl text-center">
      <div className="text-4xl font-bold mb-2">{value}{suffix}</div>
      <div className="text-emerald-100 text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
};

export default StatCard;