// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  integer,
  numeric,
  pgTable,
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



// export const createTable = pgTableCreator((name) => `dunder-mifflin-x-salah-yudin_${name}`);

export const products = pgTable(
  "product",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 256 }).notNull(),
    price: integer("price").notNull(),
    description: varchar("description", { length: 1024 }),
    image: varchar("image", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const users = pgTable(
  "user",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: varchar("clerkId").notNull(),
    firstName: varchar("firstName", { length: 256 }).notNull(),
    lastName: varchar("lastName", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    // address: varchar("address", { length: 1024 }).notNull(),
    // phone: numeric("phone").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const userAddress = pgTable(
  "userAddress",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("userId").references(() => users.id).notNull(),
    address: varchar("adress", { length: 256 }).notNull(),
    city: varchar("city", { length: 256 }).notNull(),
    district: varchar("district", { length: 256 }).notNull(),
    telephone: varchar("telephone", { length: 256 }).notNull(),
    postalCode: varchar("postalCode", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const userRelationsWithAddress = relations(users, ({ one }) => ({
  userAddress: one(userAddress)
}))

export const userAddressRelations = relations(userAddress, ({ one }) => ({
  user: one(users, { fields: [userAddress.userId], references: [users.id] }),
}))

// export const shoppingSessions = pgTable(
//   "shoppingSession",
//   {
//     id: uuid("id").primaryKey().defaultRandom(),
//     userId : uuid("userId").notNull(),
//     total: decimal("total").notNull(),
//     createdAt: timestamp("created_at")
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp("updatedAt"),
//   },
// )


export const cartItem = pgTable(
  "cartItem",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId : uuid("userId").notNull().defaultRandom().references(() => users.id),
    productId : uuid("productId").notNull().references(() => products.id),
    quantity : integer("quantity").notNull(),
    createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const cartItemRelation = relations(cartItem, ({ one }) => ({
  user: one(users, { fields: [cartItem.userId], references: [users.id] }),
}))

export const userRelationWithCartItem = relations(users, ({ many }) => ({
  cartItems: many(cartItem),
}))

// export const userRelationWithShoppingSession = relations(users, ({ one }) => ({
//   shoppingSession: one(shoppingSessions, { fields: [users.id], references: [shoppingSessions.userId] }),
// }))

// export const shoppingSessionRelations = relations(shoppingSessions, ({ many }) => ({
//   cartItems: many(cartItem),
// }))

// export const cardItemRelationWithShoppingSession = relations(cartItem, ({ one }) => ({
//   shoppingSession: one(shoppingSessions, { fields: [cartItem.sessionId], references: [shoppingSessions.id] }),
// }))

export const  cartItemRelationWithProducts = relations(cartItem, ({ many }) => ({
  products: many(products),
}))

export const productRelationWithCartItem = relations(products, ({ many }) => ({
  cartItems: many(cartItem),
}))
