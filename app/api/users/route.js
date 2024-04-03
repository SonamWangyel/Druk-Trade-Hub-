import knex from '@/app/database'

export async function GET() {
	const data = await knex('users').select('*')
	return Response.json({ data })
}

export async function POST(req) {
	const body = await req.json()
	const {name , email , address } = body;
	const data = await knex('users').insert({
		name: name,
		email: email,
		address : address
		
	})
	return Response.json({ data })
}