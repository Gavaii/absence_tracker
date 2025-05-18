export const notFound = new Response(
    JSON.stringify({ message: "Not found" }),
    {
      status: 404,
      headers: { "Content-Type": "application/json" },
    }
  );
  