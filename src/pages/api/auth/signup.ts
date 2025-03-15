import { supabase } from '../../../lib/supabase';
import { User } from '@supabase/supabase-js';

interface SignUpRequest {
    email: string;
    password: string;
}

interface SignUpResponse {
    user: User | null; // Using the proper Supabase User type
}

export default async function handler(
    req: {
        method: string;
        body: SignUpRequest;
    },
    res: {
        status: (code: number) => {
            json: (data: SignUpResponse | { error: string }) => void;
        };
    }
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, password } = req.body;

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) throw error;
        const { user } = data;
        return res.status(200).json({ user });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(400).json({ error: 'An unknown error occurred' });
    }
}