import { createAuth } from "@travellers-click/auth";
import { createDb } from "@travellers-click/db";

import { ENV } from "./env.server";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);
