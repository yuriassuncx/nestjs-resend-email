# NestJS Resend - Mail Service 🚀

![image](https://github.com/yuriassuncx/beer-project/assets/104099580/c0b586b7-fa56-4294-927a-3cfbd49f8a21)
The objective of this project was to test an email sending service, called Resend, created by a Brazilian developer. In addition, I used a boilerplate in NestJS that authenticates and creates users.

# 💻 Developing differences...

- [x] Built with NestJS and Prisma
- [x] Testing
- [x] SOLID
- [x] TypeScript

# 🚀 Technologies Used
 
  ## BACK-END:
   - [X] NodeJS
   - [x] NestJS
   - [x] Jest
   - [x] Prisma

# 📋 Installation:

### Server

Then, to run the project:
```sh
$ pnpm install
$ pnpm run start:dev
```

After that, to start the server, run:
```sh
$ npx prisma studio
```

## pnpm install

1. Create the .env file `cp .env.example .env`

2. to generate keys `openssl rand -base64 32`

3. define variables .env:
```
DATABASE_URL=""
SESSION_SECRET=""
APP_NAME=""
APP_DESCRIPTION=""
ACCESS_TOKEN_COOKIE_NAME=""
ACCESS_TOKEN_SECRET=""
ACCESS_TOKEN_EXPIRATION_TIME=
JWT_SECRET=""
RESEND_API_KEY=""
```

4. Lift the database 
`docker compose up -d`

5. Run:
`pnpm run start`