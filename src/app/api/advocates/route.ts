import db from "../../../db";
import { advocates } from "../../../db/schema";
import { NextResponse } from "next/server";
import { GetAdvocatesSchema } from "./types";
import { or, ilike, sql } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = GetAdvocatesSchema.parse(body);

    const {
      searchTerm = "",
      page = 1,
      pageSize = 10,
    } = validated;

    const filters: (ReturnType<typeof sql> | ReturnType<typeof ilike>)[] = [];

    // Lowercasing the search term to improve search results
    // Example: When searching for John, users can type 'john'
    const term = searchTerm.trim().toLowerCase();

    // If the term is a number, lets filter for experience years or phone numbers
    const numericTerm = Number(term);
    const isNumericTerm = !isNaN(numericTerm);

    // Add simple filters for string values
    if (term) {
      filters.push(
        ilike(advocates.firstName, `%${term}%`),
        ilike(advocates.lastName, `%${term}%`),
        ilike(advocates.city, `%${term}%`),
        ilike(advocates.degree, `%${term}%`),
      );
    }

    // Adding simple filters for numeric values
    if (isNumericTerm) {
      filters.push(
        sql`${advocates.yearsOfExperience} = ${numericTerm}`,
        sql`${advocates.phoneNumber}::text ILIKE ${`%${term}%`}`
      );
    }

    const combinedFilter = filters.length > 0 ? or(...filters) : undefined;

    const query = db
      .select()
      .from(advocates)
      .where(combinedFilter)
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    const countQuery = db
      .select({ count: sql<number>`count(*)` })
      .from(advocates)
      .where(combinedFilter);

    const [data, [{ count }]] = await Promise.all([
      query,
      countQuery,
    ]);

    return NextResponse.json({
      data,
      meta: {
        page,
        pageSize,
        total: Number(count),
        totalPages: Math.ceil(Number(count) / pageSize),
      },
    });
  } catch (error) {
    console.error("POST /api/advocates failed:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
