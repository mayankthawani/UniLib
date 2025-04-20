// components/LibraryMap.js
export default function LibraryMap() {
    const layout = [
      ['S', 'S', 'B', 'B', 'S', 'S'],
      ['S', '',  '',  '',  '',  'S'],
      ['B', '',  '',  '',  '',  'B'],
      ['S', '',  '',  '',  '',  'S'],
      ['S', 'S', 'B', 'B', 'S', 'S'],
    ];
  
    return (
      <div className="grid grid-cols-6 gap-2 p-4 bg-gray-900 rounded-lg">
        {layout.flat().map((cell, index) => (
          <div key={index} className={`w-12 h-12 flex items-center justify-center rounded 
            ${cell === 'S' ? 'bg-green-500' : 
              cell === 'B' ? 'bg-blue-500' : 
              'bg-gray-700'}`}>
            {cell}
          </div>
        ))}
      </div>
    );
  }
  