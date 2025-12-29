interface DescriptionProps {
  description: string;
}

export function Description({ description }: DescriptionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Description</h2>
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}