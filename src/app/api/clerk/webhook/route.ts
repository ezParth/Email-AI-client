export const POST = async (req: Request) => {
  try {
    const { data } = await req.json();
    console.log("Webhook from clerk: ", data);

    return new Response("Webhook recieved", { status: 200 });
  } catch (error) {
    console.log("ERROR IN POST Request: ", error);
  }
};
