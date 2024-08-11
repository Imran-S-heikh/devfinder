function CardSkeleton() {
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
        <div className="mt-8 px-8 py-4 bg-background rounded animate-pulse h-16">
          
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

export default CardSkeleton;
