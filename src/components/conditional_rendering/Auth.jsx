import { useState } from "react";
import SignInButton from "./SignInButton";
import SignOutBtn from "./SignOutBtn";

const Auth = () => {
    const [profile, setProfile] = useState({
        isLoggedIn: false
    });
    return (
        <div>
            <h3>Conditional Rendering....</h3>
            {
                profile?.isLoggedIn ? <SignOutBtn setProfile={setProfile} /> : <SignInButton setProfile={setProfile} />
            }
        </div>
    )
}

export default Auth