import Link from 'next/link';

const LinkBtn = (props: { children: React.ReactNode; href: string; variant?: 'default' | 'yellow' | 'pink' , attributes?:any,className?:string,small?:boolean }) => {
  const { children, href,attributes,className,small, variant = 'default' } = props;

  const baseStyles = ` ${small ? "px-4  py-2  text-sm shadow-customSmall" : "px-6  sm:px-12 2xl:px-16 py-3 sm:py-4 text-xl md:text-2xl shadow-custom"}  font-bold  duration-150 `;
  const variantStyles = {
    default: 'bg-ownPurple-400 hover:bg-ownPurple-600 text-fontLight',
    yellow: 'bg-ownYellow-400 hover:bg-ownYellow-600 text-fontDark',
    pink: 'bg-ownPink-400 hover:bg-ownPink-600 text-fontDark',
  };

  const combinedStyles = `${className} ${baseStyles} ${variantStyles[variant]} `;

  return (
    <Link href={href} className={combinedStyles} {...attributes}>
      {children}
    </Link>
  );
};

export default LinkBtn;