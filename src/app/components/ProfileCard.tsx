import {
  IconCompany,
  IconLocation,
  IconTwitter,
  IconWebsite,
} from "@/assets/icons";
import { Profile } from "@/utils";
import Image from "next/image";

function ProfileCard({
  profile,
  loading,
}: {
  profile: Profile | null;
  loading: boolean;
}) {
  if (loading) {
    return (
      <section className="bg-surface rounded-2xl p-12 mt-6 flex gap-9 drop-shadow-xl">
        <div className="">
          <div className="w-[117px] h-[117px] rounded-full bg-background animate-pulse"></div>
        </div>
        <div className="flex-1">
          <div className="justify-between flex">
            <div className="w-3/5 h-5 rounded bg-background animate-pulse"></div>
            <div className="w-1/3 h-5 rounded bg-background animate-pulse"></div>
          </div>
          <p className="text-muted mt-6 w-full h-12 rounded bg-background animate-pulse"></p>
          <div className="mt-8 px-8 py-4 bg-background rounded animate-pulse">
            <div className="flex justify-between opacity-0">
              <div>
                <h2 className="text-xs text-muted">Repos</h2>
                <h3 className="font-bold text-2xl">{profile?.repos || 0}</h3>
              </div>
              <div>
                <h2 className="text-xs text-muted">Followers</h2>
                <h3 className="font-bold text-2xl">
                  {profile?.followers || 0}
                </h3>
              </div>
              <div>
                <h2 className="text-xs text-muted">Following</h2>
                <h3 className="font-bold text-2xl">
                  {profile?.following || 0}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-5 fill-muted text-muted">
            <div className="flex gap-4">
              <div className="w-full h-5 rounded bg-background animate-pulse"></div>
            </div>
            <div className="flex gap-4">
              <div className="w-full h-5 rounded bg-background animate-pulse"></div>
            </div>
            <div className="flex gap-4">
              <div className="w-full h-5 rounded bg-background animate-pulse"></div>
            </div>
            <div className="flex gap-4">
              <div className="w-full h-5 rounded bg-background animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-surface rounded-2xl p-12 mt-6 flex gap-9 drop-shadow-xl">
      <div className="">
        <Image
          height={117}
          width={117}
          src={profile?.avatar!}
          alt="avatar"
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="justify-between flex">
          <h1 className="text-2xl font-bold">{profile?.name}</h1>
          <h4 className="text-muted">Joined {profile?.join}</h4>
        </div>
        <h3 className="mb-6 mt-1 text-primary">@{profile?.handle}</h3>
        <p className="text-muted ">
          {profile?.bio || "This profile has no bio"}
        </p>
        <div className="mt-8 px-8 py-4 bg-background rounded-2xl">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xs text-muted">Repos</h2>
              <h3 className="font-bold text-2xl">{profile?.repos}</h3>
            </div>
            <div>
              <h2 className="text-xs text-muted">Followers</h2>
              <h3 className="font-bold text-2xl">{profile?.followers || 0}</h3>
            </div>
            <div>
              <h2 className="text-xs text-muted">Following</h2>
              <h3 className="font-bold text-2xl">{profile?.following}</h3>
            </div>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-5 fill-muted text-muted">
          <div className="flex gap-4">
            <IconLocation className="" />
            <h5>{profile?.location}</h5>
          </div>
          <div className="flex gap-4">
            <IconWebsite className="" />
            <h5>Blog</h5>
          </div>
          <div className="flex gap-4">
            <IconTwitter className="" />
            <h5>Twitter</h5>
          </div>
          <div className="flex gap-4">
            <IconCompany className="" />
            <h5>@github</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
