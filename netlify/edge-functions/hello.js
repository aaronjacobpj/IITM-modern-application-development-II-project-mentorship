export default async ()=>{

    return new Response("Hello", {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
}