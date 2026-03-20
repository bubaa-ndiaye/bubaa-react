type Props = {
  href: string;
  color: string;
  hover: string;
  emoji: string;
  label: string;
};

export default function LinkButton({ href, color, hover, emoji, label }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className={`flex items-center justify-center gap-3 w-80 mx-auto py-4 mb-4 rounded-xl ${color} text-white font-bold text-lg ${hover} transition`}>
      {emoji} {label}
    </a>
  );
}