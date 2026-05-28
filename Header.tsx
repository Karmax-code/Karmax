import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const { cartCount, isAdmin, logout } = useApp();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const categories = [
    { name: 'Home Decor', path: '/category/home-decor' },
    { name: 'Kitchen', path: '/category/kitchen' },
    { name: 'Tech', path: '/category/tech' },
    { name: 'Toys', path: '/category/toys' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-2xl">
              KARMAX
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {isAdmin ? (
              <>
                <Link
                  to="/admin"
                  className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Admin</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/admin-login"
                className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Admin</span>
              </Link>
            )}

            <Link
              to="/cart"
              className="relative flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-indigo-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-2 py-1"
                >
                  {category.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-3">
                {isAdmin ? (
                  <>
                    <Link
                      to="/admin"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors px-2 py-1"
                    >
                      <User className="w-5 h-5" />
                      <span className="font-medium">Admin Panel</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors px-2 py-1 mt-2"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/admin-login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors px-2 py-1"
                  >
                    <User className="w-5 h-5" />
                    <span className="font-medium">Admin Login</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
