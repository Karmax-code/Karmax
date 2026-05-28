# Karmax Admin Guide

## Getting Started with Admin Panel

### 1. Access Admin Panel

1. Navigate to the website
2. Click on "Admin" in the header (or go to `/admin-login`)
3. Enter the admin password: **karmax2024**
4. Click "Login"

### 2. Admin Dashboard Overview

The dashboard shows 4 key metrics:
- **Total Products**: Number of products in your store
- **Total Orders**: Number of customer orders received
- **Total Revenue**: Sum of all order values
- **Customers**: Unique customer count

### 3. Managing Products

#### Adding a New Product

1. Click the "Add Product" button
2. Fill in all required fields:
   - **Product Name**: Full name of the product
   - **Price**: Current selling price (decimal number)
   - **Original Price**: Optional - for showing discounts
   - **Category**: Choose from Home Decor, Kitchen, Tech, or Toys
   - **Image URL**: Link to product image (use Unsplash or similar)
   - **Description**: Detailed product description
   - **Rating**: 0-5 stars (decimal allowed)
   - **Reviews Count**: Number of reviews
   - **In Stock**: Check if product is available
   - **Featured**: Check to show on homepage
3. Click "Add Product"

#### Editing a Product

1. Find the product in the products table
2. Click the edit icon (pencil)
3. Modify any fields
4. Click "Update Product"

#### Deleting a Product

1. Find the product in the products table
2. Click the delete icon (trash)
3. Confirm deletion

### 4. Managing Orders

Switch to the "Orders" tab to view:
- Order ID
- Customer name and email
- Order date
- Total amount
- Order status

### 5. Tips for Success

#### Product Images
Use high-quality images from:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com

Example URL format:
```
https://images.unsplash.com/photo-[ID]?w=500&h=500&fit=crop
```

#### Pricing Strategy
- Set **Original Price** higher than **Price** to show discounts
- The system automatically calculates discount percentage
- Free shipping kicks in at $100+ orders

#### Featured Products
- Mark your best sellers as "Featured"
- Featured products appear on the homepage
- Limit to 4-8 featured products for best results

#### Categories
- **Home Decor**: Furniture, decorations, lighting, textiles
- **Kitchen**: Appliances, cookware, utensils, gadgets
- **Tech**: Electronics, gadgets, accessories
- **Toys**: Educational toys, games, outdoor toys

### 6. Customer Experience Flow

1. **Browse**: Customer visits homepage or category pages
2. **Product Detail**: Clicks on product to see details
3. **Add to Cart**: Adds items to shopping cart
4. **Cart Review**: Reviews cart, adjusts quantities
5. **Checkout**: Fills out shipping and payment info
6. **Order Placed**: Order appears in your admin panel

### 7. Data Management

All data is stored in the browser's LocalStorage:
- **Products**: Persists all product data
- **Cart**: Customer's current cart (per browser)
- **Orders**: All completed orders
- **Auth**: Admin login status

⚠️ **Note**: Clearing browser data will reset everything to initial state.

### 8. Best Practices

#### Product Management
- ✅ Use descriptive product names
- ✅ Write detailed descriptions (50-100 words)
- ✅ Use high-resolution images (500x500px minimum)
- ✅ Set realistic ratings (4.0-5.0 for quality products)
- ✅ Keep stock status updated

#### Pricing
- ✅ Research competitor pricing
- ✅ Use psychological pricing (.99 endings)
- ✅ Offer strategic discounts (10-30% off)
- ✅ Bundle products for higher value

#### Categories
- ✅ Maintain balance across categories
- ✅ Add 5-10 products per category minimum
- ✅ Update inventory regularly
- ✅ Rotate featured products monthly

### 9. Security Notes

**Current Setup**:
- Password: `karmax2024`
- Stored in: `src/context/AppContext.tsx`

**For Production**:
- Implement proper backend authentication
- Use environment variables for secrets
- Add user roles and permissions
- Implement session management
- Add two-factor authentication

### 10. Troubleshooting

**Problem**: Products not showing
- **Solution**: Check if category filter is correct

**Problem**: Can't login to admin
- **Solution**: Password is `karmax2024` (lowercase)

**Problem**: Orders not appearing
- **Solution**: Customer must complete checkout process

**Problem**: Changes not saving
- **Solution**: Check browser console for errors

### 11. Quick Reference

| Action | Steps |
|--------|-------|
| Add Product | Admin → Products → Add Product button |
| Edit Product | Admin → Products → Click edit icon |
| Delete Product | Admin → Products → Click delete icon |
| View Orders | Admin → Orders tab |
| Logout | Header → Logout button |

---

**Need Help?** This is a demo application. For production use, consider implementing:
- Backend API
- Database (MongoDB, PostgreSQL)
- Payment processing (Stripe, PayPal)
- Email notifications
- Analytics tracking
- Advanced search
- Inventory management
