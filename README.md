# Northcoders News API

## Background

We will be building an API for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture.

Your database will be PSQL, and you will interact with it using [node-postgres](https://node-postgres.com/).

## Set-up

We'll have two databases in this project. One for real looking dev data and another for simpler test data.

To run this project locally please follow the instructions below .

You will need to create two .env files for your project: .env.test and .env.development.
Into each, add PGDATABASE=<database_name_here>, with the correct database name for that environment (see /db/setup.sql for the database names).

Double check that these .env files are .gitignored.
