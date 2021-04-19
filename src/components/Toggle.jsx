import React, { useState } from 'react';

const Toggle = ({ className, leftText, rightText }, ...props) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={[
        'w-20',
        'h-7',
        'rounded-full',
        'bg-gray-800 dark:bg-gray-400',
        'px-1',
        'flex',
        'items-center',
        active && 'flex-row-reverse',
        'transition-all',
        'duration-200',
        'focus:outline-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={() => setActive(!active)}
      {...props}
    >
      <div className="bg-gray-400 dark:bg-gray-800 w-6 h-6 rounded-full" />
      <span className="text-xs text-gray-400 dark:text-black px-1">
        {active ? leftText : rightText}
      </span>
    </button>
  );
};

export default Toggle;
