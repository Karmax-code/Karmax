import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { getCategoryName } from '../store/products';
import { SlidersHorizontal } from 'lucide-react';

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { products } = useApp();
  
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<string>('all');

  const categoryProducts = products.filter(
    p => p.category === category
  );

  // Apply filters and sorting
  let filteredProducts = [...categoryProducts];

  // Filter by price range
  if (priceRange !== 'all') {
    if (priceRange === 'under-50') {
      filteredProducts = filteredProducts.filter(p => p.price < 50);
    } else if (priceRange === '50-100') {
      filteredProducts = filteredProducts.filter(p => p.price >= 50 && p.price < 100);
    } else if (priceRange === '100-200') {
      filteredProducts = filteredProducts.filter(p => p.price >= 100 && p.price < 200);
    } else if (priceRange === 'over-200') {
      filteredProducts = filteredProducts.filter(p => p.price >= 200);
    }
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const categoryName = category ? getCategoryName(category as any) : 'Products';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {categoryName}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filters</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Price Range Filter */}
              <div>
                <label className="text-sm text-gray-600 mr-2">Price Range:</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">All Prices</option>
                  <option value="under-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="over-200">Over $200</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="text-sm text-gray-600 mr-2">Sort By:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
