# BeYourLoop - Full Stack Authentication System

A modern, responsive full-stack authentication system built with the MERN stack, featuring a beautiful UI inspired by Topmate.io.

## 🚀 Features

### Frontend
- **Modern Landing Page** with smooth animations and responsive design
- **Complete Authentication Flow** (Login/Register/Dashboard)
- **Protected Routes** with JWT token validation
- **Responsive Design** with mobile-first approach
- **Beautiful UI Components** built with Tailwind CSS
- **Form Validation** with real-time error handling
- **Smooth Animations** using CSS transitions and transforms

### Backend
- **RESTful API** built with Express.js and Node.js
- **User Authentication** with JWT tokens
- **Password Security** using bcrypt hashing
- **MongoDB Integration** with Mongoose ODM
- **Protected Routes** with authentication middleware
- **Error Handling** with proper HTTP status codes

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Axios** for API requests

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** for cross-origin requests

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git https://github.com/nikhilshakya07/BeYourLoop-Assignment.git
cd Beyourloop-Assignment
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```

## 📁 Project Structure

```
beyourloop-auth/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── common/
    │   │   ├── ui/
    │   │   └── animations/
    │   ├── pages/
    │   ├── context/
    │   ├── hooks/
    │   ├── services/
    │   └── utils/
    └── package.json
```

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

## 🎨 Design Features

- **Responsive Design** - Works perfectly on all devices
- **Modern Animations** - Smooth transitions and hover effects
- **Consistent UI** - Reusable components with consistent styling
- **Accessible** - Proper form labels and keyboard navigation
- **Fast Loading** - Optimized images and lazy loading

## 📱 Pages

1. **Landing Page** - Hero section with call-to-action
2. **About Us** - Company information and team details
3. **Contact** - Contact form with validation
4. **Login** - User authentication
5. **Register** - User registration
6. **Dashboard** - Protected user profile page

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Protected routes on both frontend and backend
- Input validation and sanitization
- CORS configuration
- Environment variables for sensitive data

## 🚀 Deployment

### Frontend (Vercel)
1. Build the project: `npm run build`
2. Deploy to Vercel: `vercel --prod`

### Backend (Render)
1. Create a new web service on Render
2. Connect your GitHub repository
3. Set environment variables
4. Deploy automatically

## 📝 Environment Variables

### Backend
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
```

### Frontend
```env
REACT_APP_API_URL=https://your-backend-url.com/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please contact:
- Email: support@beyourloop.com
- GitHub Issues: [Create an issue](https://github.com/nikhilshakya07/BeYourLoop-Assignment/issues)

## 🙏 Acknowledgments

- Design inspiration from Topmate.io
- Icons by Lucide React
- Styling with Tailwind CSS
- Built with MERN Stack

---

Made with ❤️ by Nikhil Shakya