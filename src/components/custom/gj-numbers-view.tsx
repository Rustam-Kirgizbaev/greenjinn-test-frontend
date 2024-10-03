import GJNumberLabel from "./gj-number-label";

interface GJNumbersViewProps {
  title: string;
  numbers: Array<{ number: string; description: string }>;
}

export default function GJNumbersView({ title, numbers }: GJNumbersViewProps) {
  return (
    <div className="p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {numbers.map((item, index) => (
          <GJNumberLabel
            key={index}
            number={item.number}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
