import { FlexContainer } from "./Container";

interface DetailsPanelProps {
  title: string;
  subtitle: string;
}

function DetailsPanel({ title, subtitle }: DetailsPanelProps) {
  return (
    <FlexContainer isVertical>
      <span className="font-sans font-light text-2xl tracking-wider">
        {title}
      </span>
      <span className="font-sans font-light text-lg tracking-wider text-gray-500">
        {subtitle}
      </span>
    </FlexContainer>
  );
}

export default DetailsPanel;
