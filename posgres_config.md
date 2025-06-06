---

## ✅ Step-by-Step PostgreSQL Setup on Ubuntu WSL

### 🔹 1. **Install PostgreSQL**

Run inside your WSL terminal:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib -y
```

---

### 🔹 2. **Start PostgreSQL**

Start the PostgreSQL server:

```bash
sudo service postgresql start
```

---

### 🔹 3. **Create User and Database**

Login as the `postgres` superuser:

```bash
sudo -u postgres psql
```

Inside the `psql` prompt, run:

```sql
-- Create the user
CREATE USER fitaura WITH PASSWORD 'fitaura123';

-- Create the database
CREATE DATABASE fitaura OWNER fitaura;

-- (Optional) Give privileges if needed
GRANT ALL PRIVILEGES ON DATABASE fitaura TO fitaura;

\q  -- Exit psql
```

---

### 🔹 4. **Enable Password Authentication**

Edit PostgreSQL authentication file:

```bash
sudo nano /etc/postgresql/*/main/pg_hba.conf
```

Look for:

```
local   all             all                                     peer
```

🔁 Change to:

```
local   all             all                                     md5
```

Save and exit (Ctrl+O, Enter, Ctrl+X).

---

### 🔹 5. **Allow Localhost Connections (Optional but Safe)**

Edit `postgresql.conf` to listen on localhost:

```bash
sudo nano /etc/postgresql/*/main/postgresql.conf
```

Find the line:

```
#listen_addresses = 'localhost'
```

🔁 Change it to:

```
listen_addresses = 'localhost'
```

Uncomment it (remove the `#`).

---

### 🔹 6. **Restart PostgreSQL**

```bash
sudo service postgresql restart
```

---

### 🔹 7. **Test Connection (Optional)**

```bash
psql -U fitaura -d fitaura -h localhost
```

Enter password → `fitaura123`

If it connects, your setup is solid.

---

### 🔹 8. **Update `.env`**

In your WSL project directory:

```env
DATABASE_URL=postgresql://fitaura:fitaura123@localhost:5432/fitaura
```

Then run:

```bash
npx prisma db push
```

---

# User For Using the App

**To** **insert a user** into the `users` table **using Prisma**, respecting the optional password field (`password String?`) and the proper mapping (`@@map("users")`).

---

## ✅ Insert a User via Prisma (Seed Script)

Here's your full `prisma/seed.js` script:

```js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('fitaura123', 10);

  const user = await prisma.user.create({
    data: {
      email: 'khaled@fitaura.com',
      name: 'Khaled Mohamed Fathalla',
      password: hashedPassword,
      image: null, // optional
    },
  });

  console.log('✅ User created:', user.email);
}

main()
  .catch((e) => {
    console.error('❌ Error inserting user:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
```

---

## ✅ Steps to Run It

1. **Install bcrypt (if not already):**

```bash
npm install bcryptjs
```

2. **Add seeding command to `package.json` if needed:**

```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```

3. **Run it:**

```bash
npx prisma db seed
```

---

## 🧪 What You Can Do After

* Sign in with:
  **Email**: `khaled@fitaura.com`
  **Password**: `fitaura123`

* Use the user ID to test creating a `Workout`, `Goal`, or `Achievement`.

---
