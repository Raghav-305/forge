declare global {
  namespace Express {
    interface UserPayload {
      id: string;
      email?: string;
      role?: string;
      [key: string]: unknown;
    }

    interface Request {
      user?: UserPayload;
      token?: string;
    }
  }
}

export {};
