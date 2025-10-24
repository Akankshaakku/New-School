# CPPS React Application - Usage Guide

## 🎯 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

```bash
# Navigate to frontend directory
cd CPPS/School/frontend

# Install dependencies (if not already installed)
npm install

# Start development server
npm start

# Build for production
npm run build
```

The application will open at `http://localhost:3001`

---

## 📖 Page Guide

### 1. **Home Page** (`/`)
- **Hero Section**: Welcome message with call-to-action buttons
- **Stats Section**: Key metrics about the school
- **Features Section**: Why choose CPPS
- **Facilities Section**: 8 dynamic facility cards with images
  - Computer Lab, Physics Lab, Chemistry Lab, Library
  - Doubt Class, Transport, Yoga Class, Smart Class
- **Testimonials**: Parent feedback carousel
- **Events Timeline**: Latest school events
- **CTA Section**: Enrollment call-to-action

### 2. **About Page** (`/about`)
- School introduction and welcome message
- Mission and Vision statements
- Core values (Innovation, Care, Excellence, Integrity)
- Why choose CPPS with 6 key points

### 3. **Gallery Page** (`/gallery`)
- Photo gallery with 12+ images
- Click any image to view in modal
- Image descriptions and event details
- Smooth animations and hover effects

### 4. **Faculty Page** (`/faculty`)
- Display of 8+ faculty members
- Shows: Name, Position, Qualification, Experience
- Social media links for each faculty member
- Responsive grid layout

### 5. **Blog Page** (`/blog`)
- School events and news articles
- Date badges on each post
- Click "Read More" to view full details in modal
- Author information displayed

### 6. **Disclosure Page** (`/disclosure`)
- Mandatory compliance documents
- Expandable document cards
- PDF download links for:
  - Building Certificate
  - Fire Safety Certificate
  - Land Certificate
  - NOC (No Objection Certificate)
  - Recognition Certificate
  - Drinking Water Safety Certificate
  - Teacher Qualifications
  - Trust Deed
- School and contact information

### 7. **Contact Page** (`/contact`)
- Contact information display
- Contact form with fields:
  - Name, Email, Phone, Subject, Message
- Google Maps embedded showing school location
- Office hours and address

---

## 🎨 Customization Guide

### Adding New Facilities
Edit `src/pages/Home.js`:
```javascript
const facilities = [
  { 
    image: '/image/your-image.png', 
    title: 'Facility Name', 
    desc: 'Description' 
  },
  // Add more...
];
```

### Adding Gallery Images
Edit `src/pages/Gallery.js`:
```javascript
const galleryImages = [
  { 
    id: 1, 
    src: '/image/your-image.jpeg', 
    alt: 'Description',
    title: 'Title',
    desc: 'Details'
  },
  // Add more...
];
```

### Adding Faculty Members
Edit `src/pages/Faculty.js`:
```javascript
const facultyMembers = [
  {
    id: 1,
    name: 'Name',
    position: 'Position',
    qualification: 'Qualification',
    experience: 'Experience',
    image: '/image/FAC1.png'
  },
  // Add more...
];
```

### Adding Blog Posts
Edit `src/pages/Blog.js`:
```javascript
const blogPosts = [
  {
    id: 1,
    title: 'Post Title',
    date: 'Date',
    image: '/image/image.jpeg',
    excerpt: 'Short excerpt',
    content: 'Full content',
    author: 'Author Name'
  },
  // Add more...
];
```

### Adding Disclosure Documents
Edit `src/pages/Disclosure.js`:
```javascript
const disclosureItems = [
  {
    id: 1,
    title: 'Document Title',
    description: 'Description',
    file: '/image/Certificate/document.pdf'
  },
  // Add more...
];
```

---

## 🖼️ Image Management

### Image Locations
- **General Images**: `/public/image/`
- **Certificates**: `/public/image/Certificate/`
- **Facility Images**: `/public/image/` (computer lab.png, physics lab.png, etc.)

### Adding New Images
1. Place image in `/public/image/` folder
2. Reference in component: `/image/filename.ext`
3. Images are automatically served by React

### Image Naming Convention
- Use descriptive names
- Replace spaces with underscores or hyphens
- Keep extensions lowercase (.png, .jpg, .jpeg)

---

## 🔧 Troubleshooting

### Images Not Loading
- Check image path in component
- Verify image exists in `/public/image/` folder
- Check browser console for 404 errors
- Images have fallback error handling

### Port Already in Use
- React will ask to use another port
- Or manually specify: `PORT=3002 npm start`

### Build Errors
- Clear node_modules: `rm -r node_modules`
- Reinstall: `npm install`
- Clear cache: `npm cache clean --force`

---

## 📱 Responsive Design

The application is fully responsive:
- **Desktop**: Full layout with all features
- **Tablet**: Optimized grid layout
- **Mobile**: Single column, touch-friendly

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `build/` folder.

### Deploy Options
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Traditional web hosting

---

## 📞 Support

For issues or questions:
- Check the browser console for errors
- Verify all image paths are correct
- Ensure all dependencies are installed
- Review component data structures

---

**Last Updated**: 2024
**Version**: 1.0
**Status**: Production Ready ✅

