import { supabase } from '../../../lib/supabase';
import { User, Session } from '@supabase/supabase-js';

interface SignInRequestBody {
    email: string;
    password: string;
}

interface SignInResponse {
    user: User | null; // Using proper Supabase User type
    session: Session | null; // Using proper Supabase Session type
}

export default async function handler(
    req: { method: string; body: SignInRequestBody },
    res: {
        status: (code: number) => {
            json: (data: SignInResponse | { error: string }) => void;
        };
    }
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, password } = req.body;

    try {
        const { data: { user, session }, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) throw error;
        return res.status(200).json({ user, session });
    } catch (error) {
        return res.status(400).json({ error: error instanceof Error ? error.message : 'An error occurred' });
    }
}