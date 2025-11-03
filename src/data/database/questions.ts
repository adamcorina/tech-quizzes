import type { OPTIONS } from "./options";

export type Option = (typeof OPTIONS)[number];

export type Question = {
  id: number;
  text: string;     
  techText: string; 
  answers: Record<Option, boolean>; 
};

export const QUESTIONS: ReadonlyArray<Question> = [
  // 1
  {
    id: 1,
    text:
      "Is your core about relationships, and you frequently query across many connections (e.g., who knows whom, what tasks depend on what)?",
    techText:
      "Relationship-first model with frequent traversals and edge properties → Graph DB. (For shallow/bounded hierarchies, SQL with CTE/materialized paths/ltree can suffice.)",
    answers: { SQL: false, NOSQL: false, GRAPH: true },
  },
  // 2
  {
    id: 2,
    text:
      "Do different items have very different fields, and you’re OK treating each as a mostly self-contained document (e.g., laptops have CPU/RAM, shoes have size/color)?",
    techText:
      "Per-record heterogeneity where documents are the primary interface; few cross-document constraints → NoSQL. (If you still need strong joins/constraints, consider SQL + JSON instead.)",
    answers: { SQL: false, NOSQL: true, GRAPH: false },
  },
  // 3
  {
    id: 3,
    text:
      "Are your relationships mostly hierarchical and shallow/bounded (e.g., an org chart or category tree), and you still want strong constraints and joins?",
    techText:
      "Hierarchies handled well in SQL via recursive CTEs, materialized paths, or PostgreSQL ltree; keeps relational integrity and analytics.",
    answers: { SQL: true, NOSQL: false, GRAPH: false },
  },
  // 4
  {
    id: 4,
    text:
      "Will your data volume grow very fast with write-heavy workloads (e.g., billions of clicks, logs, or sensor events)?",
    techText: "Easy horizontal scaling and high write throughput → NoSQL.",
    answers: { SQL: false, NOSQL: true, GRAPH: false },
  },
  // 5
  {
    id: 5,
    text:
      "Do you require strict multi-step correctness (e.g., moving money between accounts must always balance)?",
    techText: "Strong ACID transactions across rows/tables → SQL.",
    answers: { SQL: true, NOSQL: false, GRAPH: false },
  },
  // 6
  {
    id: 6,
    text:
      "Do your relationship types change or grow over time (e.g., you keep adding new ways entities relate) and you still need to query across them uniformly?",
    techText:
      "Evolving, heterogeneous edge types with flexible traversal patterns → Graph DB.",
    answers: { SQL: false, NOSQL: false, GRAPH: true },
  },
  // 7
  {
    id: 7,
    text:
      "Do you need built-in analytics or reporting (e.g., average sales per region, monthly revenue trends)?",
    techText: "Aggregations, GROUP BY, window functions, OLAP support → SQL.",
    answers: { SQL: true, NOSQL: false, GRAPH: false },
  },
  // 8
  {
    id: 8,
    text:
      "Are most reads single-record lookups by ID with strict low-latency targets at large scale (e.g., “Get customer 123” in a hot path)?",
    techText:
      "Hot key/value or document fetches, minimal joins, horizontal scale → NoSQL.",
    answers: { SQL: false, NOSQL: true, GRAPH: false },
  },
  // 9
  {
    id: 9,
    text:
      "Do your records all share the same structure, like rows in an Excel sheet (e.g., every order has id, date, and amount)?",
    techText: "Stable, normalized schema; strong tabular fit → SQL.",
    answers: { SQL: true, NOSQL: false, GRAPH: false },
  },
  // 10
  {
    id: 10,
    text:
      "Do you need real-time impact analysis across dependencies (e.g., 'if this service is down, which downstream services and customers are affected')?",
    techText:
      "Cascading dependency traversal and reachability queries at runtime → Graph DB.",
    answers: { SQL: false, NOSQL: false, GRAPH: true },
  },
  // 11
  {
    id: 11,
    text:
      "Do you prefer to store and query records mainly as whole JSON documents (e.g., a user profile with nested fields) rather than join smaller tables?",
    techText:
      "Document-centric reads/writes, denormalization, sparse attributes → NoSQL. (If you still need joins/constraints, consider SQL + JSON.)",
    answers: { SQL: false, NOSQL: true, GRAPH: false },
  },
  // 12
  {
    id: 12,
    text:
      "Do you need shortest paths, influence/centrality, communities, or similar network algorithms for decisions (e.g., 'find the most connected suppliers')?",
    techText:
      "Native graph algorithms (shortest path, PageRank, community detection) are required → Graph DB.",
    answers: { SQL: false, NOSQL: false, GRAPH: true },
  },
  // 13
  {
    id: 13,
    text:
      "Do you often need to combine data from multiple tables or entities in one query (e.g., customers with their orders and invoices)?",
    techText: "Frequent joins and relational queries → SQL.",
    answers: { SQL: true, NOSQL: false, GRAPH: false },
  },
  // 14
  {
    id: 14,
    text:
      "Do you need live multi-hop queries (e.g., 'friends of friends who also bought X') rather than precomputing results?",
    techText:
      "Runtime multi-hop traversals and pattern matching → Graph DB. Precompute/flatten if you want to stay on SQL.",
    answers: { SQL: false, NOSQL: false, GRAPH: true },
  },
  // 15
  {
    id: 15,
    text:
      "Do relationships themselves carry important data you query (e.g., 'friend since 2022', 'depends-on with priority=high')?",
    techText:
      "Edges have first-class properties that influence queries and algorithms → Graph DB.",
    answers: { SQL: false, NOSQL: false, GRAPH: true },
  },
  // 16
  {
    id: 16,
    text:
      "Will non-technical teams explore data with new questions frequently (e.g., ad-hoc queries by marketing or finance)?",
    techText: "Ad-hoc querying with rich indexes and SQL semantics → SQL.",
    answers: { SQL: true, NOSQL: false, GRAPH: false },
  },
];
