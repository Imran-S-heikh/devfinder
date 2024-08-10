"use client";

import {
  IconCompany,
  IconLocation,
  IconSearch,
  IconSun,
  IconTwitter,
  IconWebsite,
} from "@/assets/icons";
import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch";
import { useEffect, useState } from "react";
import { defaultProfile, getProfile, Profile } from "@/utils";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  const [state, setState] = useState<Profile | null>(null);
  const [username, setUsername] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetProfile();
  }, []);

  async function handleGetProfile() {
    setLoading(true);
    const data = await getProfile(username || "Imran-S-heikh");
    if (data) {
      console.log(data);
      setLoading(false);
      return setState(data);
    }

    setLoading(false);
    setErrorStatus("No Result");
  }

  return (
    <main className="w-[730px] ">
      <section className="flex justify-between">
        <h2 className="font-bold text-2xl">devfinder</h2>
        <div className="">
          <ThemeSwitch />
        </div>
      </section>

      <section className="bg-surface rounded-2xl p-[10px] mt-16 drop-shadow-xl">
        <div className="w-full flex">
          <div className="flex-1 relative flex items-center">
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 outline-none bg-red text-lg text-muted bg-transparent absolute inset-0 pl-12"
              type="text"
              placeholder="Search GitHub username"
            />
            <span className="absolute text-[#F74646] font-bold right-5">
              {errorStatus}
            </span>
            <IconSearch className="relative ml-3 fill-primary" />
          </div>
          <button
            onClick={handleGetProfile}
            className="bg-primary hover:bg-primary/75 duration-150 active:opacity-50 font-bold px-5 py-3 rounded-xl text-white"
          >
            Search
          </button>
        </div>
      </section>

      <ProfileCard profile={state || defaultProfile} loading={loading} />
    </main>
  );
}
