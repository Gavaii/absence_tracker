
export async function helloRoot(req: Request): Promise<Response> {
  return new Response(
    JSON.stringify({
      message: "Hello, world!",
      method: req.method,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function helloName(
  req: Request & { params: { name: string } }
): Promise<Response> {
  const { name } = req.params;
  return new Response(
    JSON.stringify({
      message: `Hello, ${name}!`,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
