export const OPTIONS = ["SQL", "NOSQL", "GRAPH"] as const;

export const OPTIONS_LONG: Record<(typeof OPTIONS)[number], string> = {
  SQL: "Relational Database (SQL)",
  NOSQL: "Document / Key-Value Store (NoSQL)",
  GRAPH: "Graph Database",
};
