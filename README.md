# Animotion Documentation

Official documentation for [Animotion](https://github.com/animotionjs/animotion) - a visual programming framework for creating beautiful animated presentations.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [pnpm](https://pnpm.io/) (recommended package manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/animotionjs/animotion-docs.git
   cd animotion-docs
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

   The documentation site will be available at `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the documentation for production
- `pnpm preview` - Preview the production build locally
- `pnpm check` - Run type checking with Svelte Kit
- `pnpm lint` - Check code formatting and linting
- `pnpm format` - Format code with Prettier
- `pnpm generate:llms` - Generate llms.txt file from documentation

## 📝 Contributing

We welcome contributions to improve the Animotion documentation! Here's how you can help:

### Contribution Workflow

1. **Fork the repository**

   Click the "Fork" button at the top right of the repository page.

2. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style and conventions
   - Test your changes locally with `pnpm dev`

4. **Run checks**

   Before committing, ensure your code passes all checks:

   ```bash
   pnpm lint
   pnpm check
   ```

5. **Commit your changes**

   ```bash
   git add .
   git commit -m "docs: add helpful description of your changes"
   ```

   Use conventional commit messages:
   - `docs:` for documentation changes
   - `fix:` for bug fixes
   - `feat:` for new features
   - `style:` for formatting changes
   - `refactor:` for code refactoring

6. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**

   Go to the original repository and click "New Pull Request". Provide a clear description of your changes.

### Documentation Structure

The documentation is built with SvelteKit and follows this structure:

```
animotion-docs/
├── src/
│   ├── routes/          # Documentation pages
│   ├── lib/             # Reusable components and utilities
│   ├── app.html         # HTML template
│   └── app.css          # Global styles
├── static/              # Static assets (images, etc.)
└── package.json         # Dependencies and scripts
```

### What to Contribute

- 🐛 Fix typos and errors
- 💡 Improve explanations and examples
- 🎨 Enhance UI/UX
- ✨ Add missing documentation

### Code Style

This project uses:

- **Prettier** for code formatting
- **ESLint** for code linting
- **TypeScript** for type safety

Run `pnpm format` to automatically format your code before committing.

## 🛠️ Technology Stack

- [SvelteKit](https://kit.svelte.dev/) - Application framework
- [Svelte 5](https://svelte.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Shiki](https://shiki.matsu.io/) - Syntax highlighting
- [Animotion](https://animotion.dev/) - Animation framework

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Community

- [Discord](https://joyofcode.xyz/invite) - Join the community
- [X](https://x.com/joyofcodedev) - Follow for updates

## 💖 Support

If you find this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs and issues
- 📝 Contributing to the documentation
- 💬 Sharing with others
