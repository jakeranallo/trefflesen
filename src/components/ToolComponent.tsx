import React from 'react';
import type { ToolProps } from '@treffwerk/types';

export const ToolComponent: React.FC<ToolProps> = ({ 
  id,
  name,
  description,
  version,
  icon,
  author,
  homepage,
  languages,
  tags,
  category,
  license,
  ...props 
}) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold">Details</h2>
          <ul className="list-disc list-inside">
            <li>Version: {version}</li>
            <li>Author: {author}</li>
            <li>Category: {category}</li>
            <li>License: {license}</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span key={tag} className="bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 