import type { Session } from "@travellers-click/auth";
import type { Database } from "@travellers-click/db";

export type Context = {
  session: Session | null;
  db: Database;
};
