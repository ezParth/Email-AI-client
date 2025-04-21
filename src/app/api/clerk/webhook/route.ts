import { db } from "~/server/db";

export const POST = async (req: Request) => {
  try {
    const { data, type } = await req.json();

    if (type !== "user.created") {
      return new Response("Event ignored", { status: 200 });
    }

    const emailAddress = data.email_addresses?.[0]?.email_address ?? "";
    const firstName = data.first_name ?? "";
    const lastName = data.last_name ?? "";
    const imageUrl = data.image_url ?? "";
    const id = data.id;

    await db.user.upsert({
      where: { id },
      update: {},
      create: {
        id,
        email: emailAddress,
        firstName,
        lastName,
        imageUrl
      }
    });

    console.log("User Created!");
    return new Response("Webhook received", { status: 200 });
  } catch (error) {
    console.log("ERROR IN POST Request: ", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
