# Todo App

A modern, secure Node.js todo application with comprehensive CI/CD pipeline featuring automated testing, security scanning, and deployment to Railway.

[![CI Pipeline](https://github.com/yourusername/todo-app/actions/workflows/ci.yml/badge.svg)](https://github.com/yourusername/todo-app/actions/workflows/ci.yml)
[![Security Scan](https://github.com/yourusername/todo-app/actions/workflows/codeql.yml/badge.svg)](https://github.com/yourusername/todo-app/actions/workflows/codeql.yml)
[![protected by gitleaks](https://img.shields.io/badge/protected%20by-gitleaks-blue)](https://github.com/zricethezav/gitleaks)

## Features

- **Full CRUD Operations** - Create, read, update, and delete todos
- **User Authentication** - Secure login/signup with Passport.js
- **Responsive Design** - Modern UI that works on all devices
- **Real-time Updates** - Dynamic todo management without page refreshes
- **Secure by Design** - Input validation, session management, and security headers

## CI/CD Pipeline

This project features a comprehensive CI/CD pipeline with:

### Continuous Integration
- **Linting** - ESLint with Standard configuration
- **Testing** - Jest test suite with coverage reporting
- **Security Scanning** - Multi-layer security analysis:
  - **Secret Detection** - GitLeaks prevents credential leaks
  - **SAST** - CodeQL static application security testing
  - **SCA** - npm audit for dependency vulnerabilities

### Continuous Deployment
- **Development** - Auto-deploy to Railway dev environment from `develop` branch
- **Production** - Auto-deploy to Railway prod environment from `main` branch
- **Environment Management** - Separate configs for dev/prod environments

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js with local strategy
- **Template Engine**: EJS
- **Styling**: CSS3 with modern design
- **Testing**: Jest
- **CI/CD**: GitHub Actions
- **Deployment**: Railway
- **Security**: GitLeaks, CodeQL, npm audit

## Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- Git


## Security Features

- **Input Validation** - All user inputs are validated and sanitized
- **Session Security** - Secure session configuration with proper cookies
- **Authentication** - Password hashing with bcrypt
- **CSRF Protection** - Built-in CSRF token validation
- **Security Headers** - Helmet.js for security headers
- **Secret Scanning** - GitLeaks prevents credential leaks in git history
- **Dependency Scanning** - Automated vulnerability detection

## 📁 Project Structure

```
todo-app/
├── 📁 .github/workflows/     # CI/CD pipeline configurations
├── 📁 __tests__/            # Test files
├── 📁 config/               # Database and passport configuration
├── 📁 controllers/          # Route controllers
├── 📁 middleware/           # Custom middleware
├── 📁 models/               # Mongoose models
├── 📁 public/               # Static assets (CSS, JS, images)
├── 📁 routes/               # Express routes
├── 📁 views/                # EJS templates
├── 📄 server.js             # Main application file
├── 📄 package.json          # Dependencies and scripts
└── 📄 CICD_SETUP.md         # Detailed CI/CD setup guide
```

## Deployment

### Railway Deployment

This app is configured for deployment on Railway with automatic deployments:

1. **Development Environment**: Deploys from `develop` branch
2. **Production Environment**: Deploys from `main` branch

For detailed deployment setup, see [CICD_SETUP.md](./CICD_SETUP.md)

### Manual Deployment

```bash
# Build and start
npm run build
npm start
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_STRING` | MongoDB connection string | Required |
| `SESSION_SECRET` | Session secret key | Required |
| `PORT` | Port number | 3000 |
| `NODE_ENV` | Environment mode | development |

### Database Setup

1. Install MongoDB locally or use MongoDB Atlas
2. Create a database named `todoapp`
3. Update the `DB_STRING` in your `.env` file

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Development Workflow

- All changes should be made in feature branches
- Pull requests require passing CI checks
- Code must pass linting and security scans
- Tests must pass with adequate coverage

## API Endpoints

### Authentication
- `GET /` - Home page
- `GET /login` - Login page
- `POST /login` - Authenticate user
- `GET /signup` - Registration page
- `POST /signup` - Register new user
- `GET /logout` - Logout user

### Todos
- `GET /todos` - Get all todos for authenticated user
- `POST /todos` - Create a new todo
- `PUT /todos/markComplete` - Mark todo as complete
- `PUT /todos/markIncomplete` - Mark todo as incomplete
- `DELETE /todos` - Delete a todo

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify MongoDB is running
   - Check DB_STRING in .env file

2. **Session Issues**
   - Ensure SESSION_SECRET is set
   - Clear browser cookies

3. **Port Already in Use**
   - Change PORT in .env file
   - Kill process using the port: `lsof -ti:3000 | xargs kill`

For more troubleshooting tips, see [CICD_SETUP.md](./CICD_SETUP.md#troubleshooting)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [Live Demo (Production)](https://your-prod-app.railway.app)
- [Live Demo (Development)](https://your-dev-app.railway.app)
- [CI/CD Pipeline](https://github.com/yourusername/todo-app/actions)
- [Security Reports](https://github.com/yourusername/todo-app/security)

---

**Built with ❤️ and modern practices**
