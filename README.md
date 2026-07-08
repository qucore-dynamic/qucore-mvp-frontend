# QuCore Dynamic MVP Frontend

**QuCore Dynamic MVP Frontend** is the web application for the QuCore Dynamic MVP. It provides an interactive interface for demonstrating and testing system behavior across multiple business modules through predefined event scenarios.

> Visualizing system behavior one scenario at a time.

---

## Architecture

The frontend is built using the Next.js App Router and follows a modular approach that mirrors the QuCore Dynamic ecosystem.

### Core Principles

- Modular application structure
- Shared UI components
- Unified authentication
- Event-driven interaction
- Scalable architecture
- Maintainable codebase

---

## MVP Features

The application currently includes interactive demonstrations for three core modules:

- ToDo
- Finance
- Inventory

Each module contains predefined event scenarios that simulate how the system responds to user actions and business events.

### Scenario System

- 12 predefined test scenarios
- Interactive event selection
- Real-time scenario visualization
- Module-specific demonstrations
- Consistent user experience

---

## Technology Stack

### Backend

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM

### Frontend

- Next.js
- React
- TypeScript

### Infrastructure

- Docker

### Security

- JWT
- Helmet
- CORS

---

## Development

```bash
npm install
npm run dev
```

---

## Environment

Configure the application using the same environment variables described in the Landing project README.

---

## Status

QuCore Dynamic MVP Frontend is currently under active development. The current focus is delivering a stable MVP that demonstrates event-driven interactions across the ToDo, Finance, and Inventory modules while establishing the foundation for future expansion.

---

## Authors

Developed by **Artem Zhyto** and contributors.

---

_Building technology one interface at a time._
