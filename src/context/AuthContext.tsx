import { createContext, useEffect, useState, useContext, ReactNode } from "react";
import { supabase } from "../supabaseClient";
import { AuthError, Session, User } from "@supabase/supabase-js";

interface SignUpResult {
  success: boolean;
  data?: User | null;
  error?: {
    message: string;
  };
}

interface AuthContextType {
  session: Session | null;
  signUpNewUser: (email: string, password: string, username: string) => Promise<SignUpResult>;
  signInUser: (credentials: { email: string; password: string }) => Promise<{
    success: boolean;
    data?: User | null;
    error?: string;
  }>;
  signOut: () => Promise<{
    success: boolean;
    data?: null;
    error?: AuthError;
  }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);

    //Signup
    const signUpNewUser = async (email: string, password: string, username: string): Promise<SignUpResult> => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        username: username,
                        display_name: username
                    },
                    emailRedirectTo: `${window.location.origin}/auth/callback`
                }
            });

            if (error) {
                console.error("Error signing up: ", error);
                return { 
                    success: false, 
                    error: { 
                        message: error.message 
                    } 
                };
            }

            if (data?.user) {
                return { success: true };
            } else {
                return { 
                    success: false, 
                    error: { 
                        message: "No user data returned" 
                    } 
                };
            }
        } catch (err) {
            console.error("Unexpected error during signup:", err);
            return { 
                success: false, 
                error: { 
                    message: "An unexpected error occurred" 
                } 
            };
        }
    }

    //Signin
    const signInUser = async ({ email, password }: { email: string; password: string }) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) {
                console.error("Error signing in: ", error);
                return { success: false, error: error.message };
            }
            console.log("Signed in successfully: ", data);
            return { success: true, data: data.user };
            
        } catch (error) {
            console.error("Error signing in: ", error);
            return { success: false, error: "An unexpected error occurred" };
        }
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    //Signout
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out: ", error);
            return { success: false, error };
        }
        return { success: true, data: null };
    }

    return (
        <AuthContext.Provider value={{ session, signUpNewUser, signInUser, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("UserAuth must be used within an AuthContextProvider");
    }
    return context;
}