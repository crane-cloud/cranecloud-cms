# CraneCloud CMS

A modern content management system built with Sanity for managing CraneCloud community events and other content.

## 🚀 Features

- **Community Events Management** - Create, edit, and manage community events with rich content
- **Event Types System** - Flexible categorization system for different types of events
- **Rich Content Editor** - Full-featured content editor with images and formatting
- **Image Management** - Hotspot-enabled image cropping and gallery support
- **SEO Optimized** - Built-in SEO fields and metadata management
- **Real-time Collaboration** - Multiple users can edit content simultaneously

## 📋 Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Sanity account (free tier available)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cranecloud-cms
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3333](http://localhost:3333) to access the Sanity Studio.

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn start` - Start production server
- `yarn build` - Build for production
- `yarn deploy` - Deploy to Sanity
- `yarn deploy-graphql` - Deploy GraphQL API

## 🌐 API Access

This CMS provides data through Sanity's APIs:

- **GROQ Query Language** - Powerful query language for data fetching
- **GraphQL API** - Standard GraphQL interface
- **Real-time Updates** - Live content updates via WebSocket

### Example GROQ Query

```groq
*[_type == "events" && isActive == true] {
  title,
  description,
  date,
  location,
  "eventType": eventType->name,
  "imageUrl": image.asset->url
}
```

## 🏗️ Project Structure

```
cranecloud-cms/
├── schemaTypes/          # Content type definitions
│   ├── Events.ts        # Community events schema
│   ├── EventType.ts     # Event types schema
│   └── index.ts         # Schema exports
├── static/              # Static assets
├── sanity.config.ts     # Sanity configuration
├── sanity.cli.ts        # CLI configuration
└── package.json         # Dependencies and scripts
```

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📖 Documentation

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Schema Types](https://www.sanity.io/docs/schema-types)
- [Content Studio](https://www.sanity.io/docs/content-studio)

---

Built with ❤️ by the CraneCloud team
