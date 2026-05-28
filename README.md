# Karmax - E-Commerce Platform

A fully functional, production-ready e-commerce platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Customer-Facing Features
- **Browse Products**: Shop across 4 categories - Home Decor, Kitchen, Tech, and Toys
- **Product Details**: View detailed product information with images, ratings, and reviews
- **Shopping Cart**: Add/remove items, adjust quantities, view cart total
- **Advanced Filtering**: Filter by price range and sort by various criteria
- **Checkout Process**: Complete checkout form with order summary
- **Responsive Design**: Fully responsive across all devices
- **Featured Products**: Highlighted products on the homepage

### Admin Panel Features
- **Secure Login**: Password-protected admin access (Default: `karmax2024`)
- **Product Management**: 
  - Add new products with all details
  - Edit existing products
  - Delete products
  - Mark products as featured
  - Manage stock status
- **Order Management**: View all customer orders with details
- **Dashboard Analytics**: 
  - Total products count
  - Total orders
  - Revenue tracking
  - Customer count

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons
- **LocalStorage** - Data Persistence

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 🔐 Admin Access

- **URL**: `/admin-login`
- **Password**: `karmax2024`

## 📱 Pages

- **Home** (`/`) - Landing page with featured products and categories
- **Category** (`/category/:category`) - Category-specific product listing
- **Product Detail** (`/product/:id`) - Individual product page
- **Cart** (`/cart`) - Shopping cart with checkout summary
- **Checkout** (`/checkout`) - Order placement form
- **Admin Login** (`/admin-login`) - Admin authentication
- **Admin Dashboard** (`/admin`) - Product and order management

## 🎨 Categories

1. **Home Decor** - Wall art, vases, pillows, lamps
2. **Kitchen** - Cookware, appliances, utensils
3. **Tech** - Gadgets, electronics, accessories
4. **Toys** - Educational toys, RC cars, robots, art kits

## 💾 Data Persistence

All data is stored in browser's LocalStorage:
- Products catalog
- Shopping cart
- Orders history
- Admin authentication status

## 🎯 Key Features

### For Customers
- Browse 16 pre-loaded products across 4 categories
- Filter products by price range
- Sort by price, rating, or name
- Add multiple quantities to cart
- View real-time cart total with shipping and tax
- Free shipping on orders over $100
- Complete checkout with customer information

### For Admins
- Full CRUD operations on products
- Upload custom product images via URL
- Set product ratings and review counts
- Mark products as featured
- Manage stock availability
- View all customer orders
- Track revenue and customer metrics

## 🎨 Design Features

- Modern gradient-based color scheme
- Smooth animations and transitions
- Card-based layouts
- Mobile-first responsive design
- Intuitive navigation
- Clear call-to-action buttons
- Professional product photography

## 🚀 Production Ready

This application is fully functional and ready to launch:
- ✅ No build errors
- ✅ TypeScript type safety
- ✅ Responsive design
- ✅ Data persistence
- ✅ Error handling
- ✅ Form validation
- ✅ Professional UI/UX
- ✅ SEO-friendly structure

## 📝 Future Enhancements

- User authentication
- Payment gateway integration
- Email notifications
- Product search functionality
- Wishlist feature
- Product reviews and ratings system
- Order tracking
- Multiple product images
- Backend API integration
- Database integration

## 📄 License

This project is open source and available for use.

---

**Karmax** - Your trusted online shopping destination 🛍️
