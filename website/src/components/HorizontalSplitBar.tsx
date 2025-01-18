interface SplitCategory {
  label: string;
  percentage: number; // Value in percentage (0-100)
  color: string; // Tailwind CSS color class
}

interface HorizontalSplitBarProps {
  categories: SplitCategory[];
  showLabelsOnBar?: boolean; // Toggle to show labels on the bar or legend below
}

function HorizontalSplitBar({
  categories,
  showLabelsOnBar = false,
}: HorizontalSplitBarProps) {

  return (
    <div className="space-y-4">
      {/* Horizontal Bar */}
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

        {showLabelsOnBar && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm text-gray-100">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-2"
                style={{
                  position: "absolute",
                  left: `${categories.slice(0, index).reduce((sum, cat) => sum + cat.percentage, 0) +
                    category.percentage / 2
                    }%`,
                  transform: "translateX(-50%)",
                }}
              >
                {category.label} ({category.percentage.toFixed(2)}%)
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Legend Below the Bar */}
      {!showLabelsOnBar && (
        <div className="flex flex-wrap justify-center mt-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center mx-2 text-sm text-gray-200 space-x-2 hover:underline"
              title={category.label}
            >
              <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
              <span>
                {category.label.substring(0, 12)}{category.label.length > 15 && "..."} ({category.percentage.toFixed(2)}%)
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HorizontalSplitBar;
