export default async (req, context) => {
  return new Response(context.params);
};

export const config = {
    path: ["/:timestamp"]
};