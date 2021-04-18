import React, {useState} from 'react';

const Toggle = ({className}, ...props) => {
    const [active, setActive] = useState(false);
  
    return (
          <button className={['w-20', 'h-7', 'rounded-full', 'dark:bg-gray-400', 'px-1', 'flex', 'items-center', active ? 'justify-start' : 'justify-end', 'transition-all', 'duration-200', className].filter(Boolean).join(' ')} onClick={() => setActive(!active)} {...props} >
            <div className="bg-gray-800 w-6 h-6 rounded-full"></div>
          </button>
    );
  }


export default Toggle;