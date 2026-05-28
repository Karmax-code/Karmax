import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Truck, CreditCard } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { products } = useApp();

  const featuredProducts = products.filter(p => p.featured);

  const categories = [
    {
      name: 'Home Decor',
      path: '/category/home-decor',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      description: 'Transform your living space',
    },
    {
      name: 'Kitchen',
      path: '/category/kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      description: 'Premium kitchen essentials',
    },
    {
      name: 'Tech',
      path: '/category/tech',
      image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop',
      description: 'Latest tech gadgets',
    },
    {
      name: 'Toys',
      path: '/category/toys',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop',
      description: 'Fun for all ages',
    },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Shipping',
      description: 'On orders over $100',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payment',
      description: '100% secure transactions',
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Best Quality',
      description: 'Premium products only',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Karmax
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Your one-stop shop for home decor, kitchen essentials, latest tech, and amazing toys
            </p>
            <Link
              to="/category/home-decor"
              className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-200 mb-3">{category.description}</p>
                <span className="text-white flex items-center space-x-2 font-medium">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="container mx-auto px-4 py-16 bg-white">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link
              to="/category/home-decor"
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center space-x-1"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-indigo-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Discover amazing products at unbeatable prices
          </p>
          <Link
            to="/category/tech"
            className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
