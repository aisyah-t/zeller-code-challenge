interface DividerProps {
  margin?: string;
}
function Divider({ margin }: DividerProps) {
  return <hr className={`bg-slate-100 h-0.5 ${margin ? margin : "m-0"}`} />;
}

export default Divider;
