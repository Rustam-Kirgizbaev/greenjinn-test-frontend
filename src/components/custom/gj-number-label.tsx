interface GJNumberLabelProps {
  number: string | number;
  description: string;
}

export default function GJNumberLabel({
  number,
  description,
}: GJNumberLabelProps) {
  return (
    <div className="text-center mb-4">
      <p className="text-3xl font-bold">{number}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}
