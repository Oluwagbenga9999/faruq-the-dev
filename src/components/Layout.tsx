import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./Nav";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100 relative overflow-x-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <Nav />
      <Outlet />
    </div>
  );
}
