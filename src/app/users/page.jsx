"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function UsersPage() {
    const queryClient = useQueryClient();
    const [name, setName] = useState('');

    // Fetch users
    const { data: users, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('/api/users');
            if (!res.ok) throw new Error('Failed to fetch users');
            return res.json();
        }
    });

    // Add a new user
    const addUser = useMutation({
        mutationFn: async (newUser) => {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
            return res.json();
        },
        onSuccess: () => queryClient.invalidateQueries(['users'])
    });

    if (isLoading) return <p>Loading users...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Users</h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addUser.mutate({ name });
                    setName('');
                }}
                className="mb-6"
            >
                <input
                    className="border p-2 mr-2 rounded"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded" type="submit">
                    Add User
                </button>
            </form>

            <ul>
                {users.map((user) => (
                    <li key={user.id} className="border p-2 rounded mb-2">{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
