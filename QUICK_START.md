# Karmax - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to the URL shown in terminal (usually `http://localhost:5173`)

## 🎯 What You Get

A complete e-commerce website with:
- **4 Categories**: Home Decor, Kitchen, Tech, Toys
- **16 Products**: Pre-loaded with realistic data
- **Shopping Cart**: Full cart functionality
- **Checkout**: Complete order process
- **Admin Panel**: Manage products and view orders

## 🔑 Admin Access

1. Click "Admin" in header or go to `/admin-login`
2. Password: `karmax2024`
3. Manage products and view orders

## 📱 Key Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page with featured products |
| Category | `/category/tech` | Browse products by category |
| Product | `/product/:id` | Individual product details |
| Cart | `/cart` | Shopping cart summary |
| Checkout | `/checkout` | Complete purchase |
| Admin | `/admin` | Product & order management |

## ✨ Main Features

### For Customers
- ✅ Browse 16 products across 4 categories
- ✅ Filter by price range
- ✅ Sort by price, rating, or name
- ✅ Add items to cart
- ✅ Adjust quantities
- ✅ Complete checkout
- ✅ Free shipping over $100

### For Admins
- ✅ Add/Edit/Delete products
- ✅ Set prices and discounts
- ✅ Mark products as featured
- ✅ Manage stock status
- ✅ View all orders
- ✅ Track revenue

## 🎨 Categories

1. **Home Decor** - `/category/home-decor`
   - Wall art, vases, pillows, lamps

2. **Kitchen** - `/category/kitchen`
   - Cookware, appliances, knives, mixers

3. **Tech** - `/category/tech`
   - Headphones, smartwatches, speakers

4. **Toys** - `/category/toys`
   - Building blocks, RC cars, robots, art kits

## 💡 Quick Tips

### Adding Products (Admin)
1. Login to admin panel
2. Click "Add Product"
3. Fill all required fields
4. Use Unsplash URLs for images
5. Click "Add Product"

### Testing Checkout
1. Add items to cart
2. Go to cart
3. Click "Proceed to Checkout"
4. Fill in dummy data
5. Submit order
6. Check admin panel for order

### Managing Orders
1. Login to admin
2. Click "Orders" tab
3. View all customer orders

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── ProductCard.tsx # Product display card
├── pages/              # Route pages
│   ├── Home.tsx       # Landing page
│   ├── Category.tsx   # Category listing
│   ├── ProductDetail.tsx
│   ├── Cart.tsx       # Shopping cart
│   ├── Checkout.tsx   # Order form
│   ├── AdminLogin.tsx # Admin auth
│   └── Admin.tsx      # Admin dashboard
├── context/           # State management
│   └── AppContext.tsx # Global state
├── store/            # Data
│   └── products.ts   # Product data
└── App.tsx          # Main app with routing
```

## 🔧 Build for Production

```bash
npm run build
```

Output: `dist/index.html` (single file, ready to deploy)

## 📊 Default Data

### Products
- 16 products total
- 4 per category
- Price range: $34.99 - $279.99
- All with ratings and reviews
- Some marked as featured

### Categories
- Home Decor (4 products)
- Kitchen (4 products)
- Tech (4 products)
- Toys (4 products)

## 🎯 Use Cases

### 1. Online Store
Deploy as-is for a real online store. Just update:
- Products (add real inventory)
- Images (upload actual product photos)
- Payment (integrate Stripe/PayPal)
- Backend (add API for persistence)

### 2. Portfolio Project
Showcase your development skills:
- Full-stack capable
- Modern React patterns
- TypeScript proficiency
- E-commerce understanding

### 3. Learning Resource
Study the code to learn:
- React Router
- Context API
- TypeScript
- Tailwind CSS
- E-commerce flows

### 4. Template/Starter
Use as foundation for:
- Custom e-commerce sites
- Product catalogs
- Inventory systems
- Order management

## 🛠️ Customization

### Change Colors
Edit `src/App.tsx` and component files:
- Primary: `indigo-600` → your color
- Secondary: `purple-600` → your color

### Add Categories
Edit `src/store/products.ts`:
```typescript
category: 'your-category'
```

### Change Admin Password
Edit `src/context/AppContext.tsx`:
```typescript
const adminPassword = 'your-password';
```

### Modify Shipping
Edit `src/pages/Cart.tsx` and `Checkout.tsx`:
```typescript
const shippingCost = cartTotal > 100 ? 0 : 9.99;
```

### Update Tax Rate
Edit `src/pages/Cart.tsx` and `Checkout.tsx`:
```typescript
const tax = cartTotal * 0.08; // 8% tax
```

## 📝 Notes

- **Data Storage**: Uses browser LocalStorage
- **Authentication**: Simple password (upgrade for production)
- **Images**: External URLs from Unsplash
- **Responsive**: Works on all screen sizes
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 🐛 Troubleshooting

### Products not showing?
- Check browser console for errors
- Clear LocalStorage and refresh

### Can't login to admin?
- Password is case-sensitive: `karmax2024`
- Clear cookies and try again

### Cart not updating?
- Check if JavaScript is enabled
- Try refreshing the page

### Build fails?
- Run `npm install` again
- Delete `node_modules` and reinstall

## 🚀 Deploy

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

## 💬 Support

This is a demo/template project. For production use:
- Add proper backend
- Implement real authentication
- Integrate payment processing
- Add email notifications
- Set up analytics

---

**Happy Shopping! 🛍️**

Built with ❤️ using React + TypeScript + Tailwind CSS
