// src/quizzes/db-choice/approachInfo.ts
import type { ApproachInfoEntry } from "../../types/Question";
import type { Option as DbOption } from "./questions";

export const APPROACH_INFO: Record<DbOption, ApproachInfoEntry> = {
  SQL: {
    label: "Relational Database (SQL)",
    blurb:
      "Best when your data fits clear tables with consistent columns and you need strong correctness, joins, and rich analytics. Modern SQL engines also support JSON columns (e.g., PostgreSQL JSONB, MySQL/SQL Server JSON) which can absorb flexible per-record fields without abandoning SQL entirely. Many SQL databases can model trees/graphs effectively (recursive CTEs, materialized paths, and PostgreSQL’s ltree) so you don’t always need a separate NoSQL or Graph store.",
    useCases: [
      "Financial systems: invoices, payouts, ledger transfers with ACID guarantees",
      "Operational apps with stable schemas: orders, customers, inventory",
      "Reporting/BI: cohorts, revenue by region, windowed metrics",
      "Multi-entity workflows that depend on referential integrity",
      "Hybrid rows: relational core + JSON attributes for flexible fields",
      "Hierarchies and catalogs: org charts, category trees, dependencies",
    ],
    frameworks: [
      "Engines: PostgreSQL, MySQL, MariaDB, SQL Server",
      "Cloud: Amazon RDS/Aurora, Google Cloud SQL, Azure Database",
      "ORM/Query: Prisma, Drizzle, TypeORM, Sequelize, jOOQ",
      "SQL features: indexes, foreign keys, constraints, CTEs, window functions",
      "Flexible fields: PostgreSQL JSONB, MySQL JSON, SQL Server JSON",
      "Tree tooling: Recursive CTEs, materialized-path patterns, PostgreSQL ltree",
    ],
    tips: [
      "Model relationships explicitly; use foreign keys and check constraints.",
      "Use JSON/JSONB for ‘long tail’ attributes while keeping core columns relational; index JSON paths where needed (e.g., GIN on JSONB).",
      "For hierarchies, compare adjacency lists (simple writes), materialized paths (fast reads), and ltree (indexed path queries).",
      "Index for read paths (composite/partial indexes); monitor query plans.",
      "Use transactions for multi-row changes; keep them short to avoid locks.",
      "For scale: read replicas for reads, partitioning/sharding for hot tables.",
    ],
  },

  NOSQL: {
    label: "Document / Key-Value Store (NoSQL)",
    blurb:
      "Great for fast writes, massive scale, and flexible schemas. Ideal when most requests fetch by key and each record can live mostly on its own (denormalized documents) without frequent multi-document transactions.",
    useCases: [
      "User/profile/settings documents with varying fields",
      "High-throughput event/click/IoT ingestion and time-based TTL storage",
      "Catalogs or content where each item is self-contained",
      "Low-latency key lookups and write-heavy workloads",
    ],
    frameworks: [
      "Engines: MongoDB, DynamoDB, Couchbase, Cassandra",
      "KV/Cache: Redis (JSON/Hashes), Aerospike",
      "Patterns: denormalization, change streams, TTL/indexed expiry",
      "Cloud tooling: DynamoDB Streams + Lambda, MongoDB Atlas Triggers",
    ],
    tips: [
      "Design access patterns first; shape documents to match your queries.",
      "Embrace denormalization; update all copies on write (or use CDC).",
      "Control partition keys/hot keys; use autoscaling/throughput alarms.",
      "Add secondary indexes sparingly; mind write amplification and costs.",
    ],
  },

  GRAPH: {
    label: "Graph Database",
    blurb:
      "Optimized for data that’s primarily about connections. Excels at multi-hop traversals, recommendations, dependency analysis, and network/path questions that are cumbersome in tables or documents.",
    useCases: [
      "Social/identity graphs: friends-of-friends, influencer discovery",
      "Dependency graphs: tasks blocking tasks, microservice call maps",
      "Product recommendations and similarity networks",
      "Fraud/risk patterns across connected entities",
    ],
    frameworks: [
      "Engines: Neo4j, Amazon Neptune, ArangoDB, JanusGraph",
      "Query languages: Cypher, openCypher, Gremlin, GQL (emerging standard)",
      "Integrations: APOC procedures (Neo4j), Neptune Streams",
      "Hybrid: ETL from SQL/NoSQL into a graph for traversal use cases",
    ],
    tips: [
      "Model relationships first (nodes, edges, properties); keep traversals local.",
      "Index entry points (by id/type) to start traversals efficiently.",
      "Beware graph partitioning: cross-partition hops can add latency.",
      "Often used alongside SQL/NoSQL—sync core entities, traverse in graph.",
    ],
  },
};
