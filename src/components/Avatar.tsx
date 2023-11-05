interface AvatarProps {
  initial: string;
}

function Avatar({ initial }: AvatarProps) {
  return (
    <div className="bg-sky-100 flex items-center justify-center rounded-md p-4 h-14 w-14">
      <span className="text-2xl text-sky-700 font-light">{initial}</span>
    </div>
  );
}

export default Avatar;
