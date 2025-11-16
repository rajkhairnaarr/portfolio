import { motion } from 'framer-motion';

function FilterPills({ activeFilter, onFilterChange }) {
  const filters = ['All', 'Brand', 'Product', 'UI', 'System'];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-content mx-auto">
        <div
          className="flex gap-4 justify-center overflow-x-auto pb-4"
          role="toolbar"
          aria-label="Project filter"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange(filter)}
              className="filter-pill whitespace-nowrap"
              aria-pressed={activeFilter === filter}
              aria-label={`Filter by ${filter}`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilterPills;
