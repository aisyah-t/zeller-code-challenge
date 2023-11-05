import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="container mx-auto md p-16">{children}</div>;
}

interface FlexContainerProps extends ContainerProps {
  isVertical?: boolean;
  gap?: string;
}

export function FlexContainer({
  children,
  isVertical,
  gap,
}: FlexContainerProps) {
  return (
    <div
      className={`flex flex-1 ${
        isVertical ? "flex-col" : "flex-row items-center"
      }
      ${gap ? gap : "gap-0"}`}
    >
      {children}
    </div>
  );
}
