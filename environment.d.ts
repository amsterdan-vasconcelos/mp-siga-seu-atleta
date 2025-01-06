declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TURSO_AUTH_TOKEN: string;
      TURSO_DATABASE_URL: string;
    }
  }
}

export {};
