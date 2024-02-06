import axios from "axios";
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "cors";

export async function POST(request) {
	let uri =
		"mongodb+srv://nihal:mdnihalrahman@ecom.dnrac7w.mongodb.net/Ecom?retryWrites=true&w=majority";

	const client = new MongoClient(uri, {
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		},
	});

	const connectToDatabase = async () => {
		//basically checks connection
		try {
			await client.connect();
			console.log("Connected to MongoDB Atlas");
		} catch (error) {
			console.error("Error connecting to MongoDB Atlas:", error);
		}
	};
	let checkres = 2;

	const check = async () => {
		const p = await client
			.db()
			.collection("users")
			.findOne({ name: data.username, password: data.password });
		if (p == null) {
			await client
				.db()
				.collection("users")
				.insertOne({ name: data.username, password: data.password });
			return 0;
		} else {
			return 1;
		}
	};
	connectToDatabase();
	const data = await request.json();

	console.log(data);

	return Response.json({ result: checkres == 2 ? await check() : "slow" });
}
