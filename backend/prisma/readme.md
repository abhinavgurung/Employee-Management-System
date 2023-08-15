## Whenever you update your Prisma schema, you will need to run the prisma db push command to create new indexes and regenerate Prisma Client.

## In Development - to update schema

npx prisma db push

## Once schema is stable - Start migration

## create the first migration

npx prisma migrate dev --name init

## To create subsequent migration

npx prisma migrate dev --name feature_changed
