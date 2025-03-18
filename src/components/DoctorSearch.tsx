import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFilters {
  rating: number | null;
  price: string;
  availability: string;
  location: string;
  specialization: string;
}

export default function DoctorSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    rating: null,
    price: '',
    availability: '',
    location: '',
    specialization: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctors by name, specialization, or location..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <Filter size={20} />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <select
                value={filters.rating?.toString() || ''}
                onChange={(e) => setFilters({ ...filters, rating: Number(e.target.value) || null })}
                className="w-full px-3 py-2 rounded-lg border dark:bg-gray-700"
              >
                <option value="">Any Rating</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price Range</label>
              <select
                value={filters.price}
                onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border dark:bg-gray-700"
              >
                <option value="">Any Price</option>
                <option value="low">₹0 - ₹500</option>
                <option value="medium">₹501 - ₹1000</option>
                <option value="high">₹1000+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Availability</label>
              <select
                value={filters.availability}
                onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border dark:bg-gray-700"
              >
                <option value="">Any Time</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="week">This Week</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}