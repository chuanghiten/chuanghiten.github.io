export default async (req, context) => {
  return new Response(context.params);
};
