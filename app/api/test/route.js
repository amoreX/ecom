export async function POST(request) {
	const f = await request.json();
	console.log(f);
	return Response.json({ bc: "fk" });
}
