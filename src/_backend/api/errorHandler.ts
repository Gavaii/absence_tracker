
export const errorHandler = (err:Error) => {
  console.error(err);
  return new Response(`Internal Error: ${err.message}`, {
    status: 500,
    headers: { "Content-Type": "text/plain" },
  });
};
