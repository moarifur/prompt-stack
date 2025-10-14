import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const userSchema = z.object({
    name: z.string().min(3)
});

let users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req) {
    try {
        const body = await req.json();
        const user = userSchema.parse(body);
        const newUser = { id: users.length + 1, ...user };
        users.push(newUser);
        return NextResponse.json(newUser, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 });
    }
}
