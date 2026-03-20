type Props = {
  name: string;
  description: string;
  emoji: string;
};

export default function ProfileCard({ name, description, emoji }: Props) {
  return (
    <div className="bg-white/10 rounded-2xl p-6 mb-6 text-center">
      <div className="text-5xl mb-3">{emoji}</div>
      <h2 className="text-white font-bold text-xl mb-1">{name}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}