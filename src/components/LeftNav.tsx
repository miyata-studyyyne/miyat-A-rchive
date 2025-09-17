type LeftNavProps = {
  offsetPx?: number;
  scale?: number;
};

export default function LeftNav({ offsetPx, scale = 0.72 }: LeftNavProps) {
  const diameter =
    scale != null
      ? `calc(100% * ${scale})`
      : `clamp(0px, calc(100% - ${offsetPx}px), 100%)`;

  return (
    <aside className="relative bg-[#FFF3DC] border-r border-[#EBDDC3]">
      <div className="absolute left-0 top-0 w-full aspect-square place-items-center border">
        <div className="grid h-full w-full place-items-center">
          <div
            className="aspect-square rounded-full bg-blue-500/20 border border-blue-500/50"
            style={{ width: diameter }}
          />
        </div>
      </div>
    </aside>
  );
}
