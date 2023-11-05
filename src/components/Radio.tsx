interface RadioProps {
  label: string;
  isChecked?: boolean;
  onChange(): void;
  id?: string;
  value?: string;
}

export function Radio({
  label,
  isChecked = false,
  onChange,
  id,
  value,
}: RadioProps) {
  return (
    <label
      htmlFor={id}
      className="flex items-center p-4 rounded-lg hover:bg-sky-50 active:bg-sky-100 font-sans font-light text-xl tracking-wider pl-4"
    >
      <input
        className="h-6 w-6"
        type="radio"
        checked={isChecked}
        onChange={onChange}
        id={id}
        value={value}
      />
      <span className="pl-4">{label}</span>
    </label>
  );
}

export default Radio;
