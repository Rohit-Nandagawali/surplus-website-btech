
###  Backend Setup
1. Navigate to the backend directory:

```bash
cd ../backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `backend` directory with the necessary database and server configurations.
```bash
DB_HOST=db4free.net #where your database is hosted
DB_USER=put_your_username
DB_PASSWORD=put_your_password
DB_DATABASE=surplusdb #your database name

```

4. Run the backend:

```bash
nodemon
```

Once the server is started successfully, you will see the following messages:

- Server is listening on port 5000
- Connected to Host: ${process.env.DB_HOST}, Database: ${process.env.DB_DATABASE}
