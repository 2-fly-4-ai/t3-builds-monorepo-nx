import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export const useSupabase = () => {
  const [supabase, setSupabase] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const supabaseUrl = process.env.SUPABASE_PUBLIC_URL;
    const supabaseKey = process.env.SUPABASE_SECRET_KEY;

    // Check if the variables are set
    if (!supabaseUrl || !supabaseKey) {
      setError('Missing supabase environment variables');
      return;
    }

    // Create and initialize the supabase client
    const client = createClient(supabaseUrl, supabaseKey);
    setSupabase(client);

    // Sign in with email and password
    // const signIn = async () => {
    //   try {
    //     const { error } = await client.auth.signIn({
    //       email: 'test@example.com',
    //       password: 'password',
    //     });
    //     if (error) {
    //       setError(error.message);
    //     }
    //   } catch (error) {
    //     setError(error.message);
    //   }
    // };

    // signIn();
  }, []);

  return { supabase, error };
};

// Use the custom hook in your editor component const Editor = ({ onChange, value }: CKeditorProps) => { const [showEditor, setShowEditor] = useState<boolean>(false); const { supabase, error } = useSupabase();

// Handle image upload with supabase const handleImageUpload = async (file: File): Promise<string> => { // Check if supabase is ready if (!supabase) { return ‘’; }
