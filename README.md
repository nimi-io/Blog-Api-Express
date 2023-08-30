# Blog API using Express.js, TypeORM, TypeScript, and PostgreSQL

This project implements a Blog API with basic CRUD operations for managing blog posts. It's built using Express.js for the server, TypeORM as the ORM, TypeScript for type-safe code, and PostgreSQL as the database.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (>=14.x)
- npm (or yarn)
- PostgreSQL

### Installation

- Clone the repository
 
- Edit OrmConfig.json to match required specs
 

## Running the app

```bash
# development
$ npm install


# watch mode
$ npm run typeorm migration:run


# production mode
$ npm run dev

```

## Endpoints

### Get All Blog Posts

- **URL:** `/blog/posts`
- **Method:** `GET`
- **Description:** Get a list of all blog posts.
- **Query Parameters:**
  - `page` (optional): Page number for pagination.
  - `limit` (optional): Number of posts per page.
  - `search` (optional): Search for posts by title or content.

### Get a Specific Blog Post

- **URL:** `/blog/posts/:id`
- **Method:** `GET`
- **Description:** Get details of a specific blog post.
- **Parameters:**
  - `id`: ID of the blog post.

### Add a New Blog Post

- **URL:** `/blog/posts`
- **Method:** `POST`
- **Description:** Create a new blog post.
- **Request Body:**
  ```json
  {
    "title": "Sample Title",
    "content": "Lorem ipsum dolor sit amet..."
  }

## License

Nest is [MIT licensed](LICENSE).
