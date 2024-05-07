// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTableCreator,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `dunder-mifflin-x-salah-yudin_${name}`);

export const products = createTable(
  "product",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 256 }).notNull(),
    price: integer("price").notNull(),
    description: varchar("description", { length: 512 }),
    category: varchar("category", { length: 128 }),
    image: varchar("image", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

// export const users = createTable(
//   "user",
//   {
//     id: uuid("id").primaryKey().defaultRandom(),
//     name: varchar("name", { length: 256 }).notNull(),
//     email: varchar("email", { length: 256 }).notNull().unique(),
//     createdAt: timestamp("created_at")
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt"),
//   },
//   (example) => ({
//     nameIndex: index("name_idx").on(example.name),
//   })
// );

// export const userCards = createTable( 
//   "userCard",
//   {
//     id: uuid("id").primaryKey().defaultRandom(),
//     userId: uuid("userId").references(() => users.id).notNull(),
//     productId: uuid("productId").references(() => products.id).notNull(),
//     createdAt: timestamp("created_at")
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt"),
//   },
//   (example) => ({
//     userIdIndex: index("userId_idx").on(example.userId),
//     productIdIndex: index("productId_idx").on(example.productId),
//   })
// );

// export const posts = createTable(
//   "post",
//   {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 256 }),


//     createdAt: timestamp("created_at")
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt"),
//   },
//   (example) => ({
//     nameIndex: index("name_idx").on(example.name),
//   })
// );