interface SplitCategory {
    label: string;
    percentage: number; // Value in percentage (0-100)
    color: string; // Tailwind CSS color class
  }
  
  interface HorizontalSplitBarProps {
    categories: SplitCategory[];
  }
  
  function HorizontalSplitBar({ categories }: HorizontalSplitBarProps) {
    return (
      <div className="w-full bg-gray-700 rounded-lg overflow-hidden h-8 relative">
        <div className="flex h-full">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`h-full ${category.color}`}
              style={{ width: `${category.percentage}%` }}
              title={`${category.label}: ${category.percentage.toFixed(2)}%`}
            ></div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm text-gray-100">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-2"
              style={{
                position: 'absolute',
                left: `${
                  categories.slice(0, index).reduce((sum, cat) => sum + cat.percentage, 0) +
                  category.percentage / 2
                }%`,
                transform: 'translateX(-50%)',
              }}
            >
              {category.label} ({category.percentage.toFixed(2)}%)
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default HorizontalSplitBar;
  