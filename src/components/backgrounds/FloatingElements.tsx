import React from 'react';

interface FloatingElement {
  id: number;
  icon: string;
  size: number;
  position: {
    top: string;
    left: string;
  };
  animation: string;
}

const generateElements = (count: number): FloatingElement[] => {
  const icons = ['🔧', '⚙️', '🔩', '⛓️', '🔨'];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    icon: icons[Math.floor(Math.random() * icons.length)],
    size: Math.random() * (30 - 15) + 15,
    position: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    },
    animation: `float-${Math.floor(Math.random() * 3)} ${Math.random() * (20 - 10) + 10}s infinite`,
  }));
};

export function FloatingElements({ count = 10 }) {
  const elements = React.useMemo(() => generateElements(count), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-20"
          style={{
            top: element.position.top,
            left: element.position.left,
            fontSize: `${element.size}px`,
            animation: element.animation,
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  );
}