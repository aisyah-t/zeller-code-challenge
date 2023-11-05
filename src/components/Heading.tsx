import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

function Heading({ children, className }: HeadingProps) {
  return (
    <div className={className}>
      <h1 className="font-sans font-normal tracking-wider text-3xl text-black">
        {children}
      </h1>
    </div>
  );
}

export default Heading;
