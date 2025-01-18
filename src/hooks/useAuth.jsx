import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [role, setRole] = useState(Cookies.get("role") || null);

  // Sync state with cookie on mount
  useEffect(() => {
    const cookieRole = Cookies.get("role");
    if (cookieRole && cookieRole !== role) {
      setRole(cookieRole);
    }
  }, [role]);

  const setRoleWithCookie = (newRole) => {
    Cookies.set("role", newRole, { expires: 1 / 144 }); // 10 minutes
    setRole(newRole);
  };

  const clearRole = () => {
    Cookies.remove("role");
    setRole(null);
  };

  return { role, setRole: setRoleWithCookie, clearRole };
};
