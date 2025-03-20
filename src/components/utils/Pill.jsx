export default function Pill({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`flex justify-center items-center
        bg-gray-400/20
        dark:bg-white/20
        border
        border-white
        border-black/50
        dark:border-white/50
        rounded-full
        gap-x-2
        py-1 px-3
        text-[10px]
        font-light
        dark:font-extralight
        hover:font-medium
        hover:scale-110
        hover:bg-white/20
        dark:hover:bg-white/10 
        transition
        ${className}
        sm:py-1 sm:px-2
        sm:text-xs
        lg:py-2 lg:px-4
        lg:text-base`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
} 