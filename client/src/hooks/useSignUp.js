import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signUp = async (values) => {
        const success = handleInputErrors(values);
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            });

            const data = await res.json();

            if (data.error) { // coming from back end response
                throw new Error(data.error);
            }

            // console.log(data);
            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signUp };
};

export default useSignUp;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords don\'t match');
        return false;
    }

    return true;
}