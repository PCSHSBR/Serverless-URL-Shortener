import { error } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ url }) => {
  return new Response(JSON.stringify({ url }));
};
