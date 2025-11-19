import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useRef, useEffect } from "react";

const HOST = import.meta.env.VITE_HOST || "http://localhost:5000";

interface GoogleSignupButtonProps {
  onError?: (error: string) => void;
  text?: string;
  size?: "sm" | "md" | "lg";
}

export default function GoogleSignupButton({
  onError,
  text = "Continue with Google",
  size = "md",
}: GoogleSignupButtonProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "py-1.5 text-sm",
    md: "py-2.5",
    lg: "py-3 text-lg",
  };

  // 🔍 DEBUG: Check if client ID is present
  useEffect(() => {
    console.log("🔍 VITE_GOOGLE_CLIENT_ID =>", import.meta.env.VITE_GOOGLE_CLIENT_ID);
    console.log("🔍 GOOGLE Provider Mounted");
  }, []);

  // 🔍 DEBUG: Check actual Google button rendered
  useEffect(() => {
    setTimeout(() => {
      const btn = googleButtonRef.current?.querySelector("div[role=button]");
      console.log("🔍 Rendered Google Button Element:", btn);
      if (!btn) {
        console.warn("❌ Google button not rendered! This is the REAL issue!");
      }
    }, 1500);
  }, []);

  return (
    <div className="relative w-full">
      {/* 🔵 Hidden Google Login element */}
      <div
        ref={googleButtonRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "scale(0.001)", // ⭐ new hiding logic (SAFE)
          transformOrigin: "top left",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <GoogleLogin
          onSuccess={async (credentialResponse: { credential: any }) => {
            console.log("🟢 Google OAuth Success Response:", credentialResponse);

            const idToken = credentialResponse.credential;

            if (!idToken) {
              console.error("❌ ID token missing from Google!");
              onError?.("No ID token received from Google");
              return;
            }

            setLoading(true);

            try {
              console.log("🔄 Sending ID token to backend:", HOST + "/api/auth/google");

              const res = await axios.post(`${HOST}/api/auth/google`, {
                token: idToken,
              });

              console.log("🟢 Backend Success:", res.data);

              localStorage.setItem("token", res.data.token);
              navigate("/dashboard");
            } catch (err: any) {
              console.error("❌ Backend Error:", err);
              const message =
                err.response?.data?.message ||
                "Google login failed. Try again.";
              onError?.(message);
            } finally {
              setLoading(false);
            }
          }}
          onError={() => {
            console.error("❌ Google popup/callback error");
            onError?.("Google login failed or was cancelled.");
          }}
          useOneTap={false}
        />
      </div>

      {/* 🟢 Custom button */}
      <button
        onClick={() => {
          console.log("🟦 Custom button clicked");
          const div = googleButtonRef.current;
          if (!div) {
            console.error("❌ googleButtonRef is NULL (not mounted)");
            return;
          }

          const button = div.querySelector("div[role=button]") as HTMLElement;

          console.log("🔍 Forwarding click to hidden Google button:", button);

          if (!button) {
            console.error("❌ Google rendered button NOT found!");
            alert("Google button not rendered. Check console logs.");
            return;
          }

          button.click();
        }}
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition ${sizeClasses[size]} ${
          loading ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      >
        {loading ? (
          <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
        ) : (
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />
        )}
        {text}
      </button>
    </div>
  );
}
