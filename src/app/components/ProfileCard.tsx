import {
  IconCompany,
  IconLocation,
  IconTwitter,
  IconWebsite,
} from "@/assets/icons";
import Hide from "@/components/Hide";
import { Profile } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import CardSkeleton from "./CardSkeleton";

function ProfileCard({
  profile,
  loading,
}: {
  profile: Profile | null;
  loading: boolean;
}) {
  if (loading) {
    return <CardSkeleton />;
  }

  return (
    <section className="bg-surface rounded-2xl xxl:p-12 p-6 mt-6 flex gap-9 drop-shadow-xl">
      <div className="hidden sm:block">
        <Image
          height={117}
          width={117}
          src={profile?.avatar!}
          alt="avatar"
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-8 items-center mb-6">
          <div className="sm:hidden">
            <Image
              height={117}
              width={117}
              src={profile?.avatar!}
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <div className="flex-1 ">
            <div className="justify-between flex flex-col sm:flex-row">
              <h1 className="text-2xl font-bold">{profile?.name}</h1>
              <h4 className="text-muted mt-2 sm:mt-0">Joined {profile?.join}</h4>
            </div>
            <h3 className="xxl:mb-6 mt-1 text-primary">@{profile?.handle}</h3>
          </div>
        </div>

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
            <IconLocation className="min-w-5" />
            <h5>{profile?.location}</h5>
          </div>
          <Hide
            open={profile?.blog}
            fallback={
              <div className="flex gap-4 items-center opacity-70">
                <IconWebsite className="min-w-5" />
                <h5>Website</h5>
              </div>
            }
          >
            <Link href={profile?.blog!}>
              <div className="flex gap-4 items-center">
                <IconWebsite className="min-w-5" />
                <h5>Website</h5>
              </div>
            </Link>
          </Hide>
          <Hide
            open={profile?.twitter}
            fallback={
              <div className="flex gap-4 items-center opacity-70">
                <IconTwitter className="min-w-5" />
                <h5>Twitter</h5>
              </div>
            }
          >
            <Link href={`https://twitter.com/${profile?.twitter}`}>
              <div className="flex gap-4 items-center">
                <IconTwitter className="min-w-5" />
                <h5>Twitter</h5>
              </div>
            </Link>
          </Hide>
          <Link href={profile?.github!}>
            <div className="flex gap-4">
              <IconCompany className="min-w-5" />
              <h5>GitHub</h5>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
