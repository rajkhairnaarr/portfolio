import { Button } from './ui/button';
import { cn } from '../lib/utils';

function FilterPills({ activeFilter, onFilterChange }) {
  const filters = ['All', 'Brand', 'Product', 'UI', 'System'];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <div
          className="flex gap-3 justify-center overflow-x-auto pb-4"
          role="toolbar"
          aria-label="Project filter"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => onFilterChange(filter)}
              variant={activeFilter === filter ? 'default' : 'ghost'}
              size="sm"
              className={cn(
                'whitespace-nowrap rounded-full px-6',
                activeFilter !== filter && 'border-2 border-gray-300'
              )}
              aria-pressed={activeFilter === filter}
              aria-label={`Filter by ${filter}`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilterPills;
