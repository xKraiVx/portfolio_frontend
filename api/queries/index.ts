export const getQuery = (name: string, query: string): string =>
  `query ${name} {
        ${query}
    }`;
