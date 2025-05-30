
# LifeLine Blood Hub

A modern, responsive blood donation platform that connects donors with those in need. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Easy Navigation**: Intuitive layout for both donors and recipients
- **Mission-Driven**: Clear presentation of the importance of blood donation
- **Step-by-Step Guide**: Simple donation process explanation
- **Community Impact**: Highlighting how donations make a difference

## 🛠️ Tech Stack

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality, accessible component library
- **Lucide React** - Beautiful & consistent icon set
- **React Router** - Client-side routing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/lifeline-blood-hub.git
   cd lifeline-blood-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/UI components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── Mission.jsx      # Mission statement
│   ├── WhyDonate.jsx    # Benefits of donating
│   ├── DonationSteps.jsx # How to donate
│   └── Footer.jsx       # Footer section
├── pages/               # Page components
│   └── Index.jsx        # Home page
├── lib/                 # Utilities
│   └── utils.js         # Helper functions
└── main.jsx            # Application entry point
```

## 🎨 Customization

### Colors
The project uses a red color scheme for blood donation theming. You can customize colors in `tailwind.config.ts`:

```javascript
colors: {
  primary: '#DC2626',    // Red-600
  secondary: '#1F2937',  // Gray-800
  // Add your custom colors
}
```

### Components
All components are modular and can be easily customized. The design system is built with Tailwind CSS for rapid styling changes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help or have questions:
- Open an issue on GitHub
- Contact us at support@lifelinebloodhub.org

## 🌟 Acknowledgments

- Thanks to all blood donors who save lives daily
- Built with ❤️ for the community
- Special thanks to all contributors

---

**Ready to make a difference? Start by forking this repository and customizing it for your blood donation center!**
