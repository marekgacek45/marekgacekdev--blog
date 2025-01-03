

const ColorSpan = ({className,secondary,children}:{children: React.ReactNode, secondary?:boolean,className?:string}) => {
  return (
    <span className={`${className} font-accent text-3xl sm:text-4xl font-semibold tracking-wide ${secondary?"text-ownPurple-400 dark:text-ownYellow-400" : "text-ownPink-400"} `}>{children}</span>
  )
}

export default ColorSpan