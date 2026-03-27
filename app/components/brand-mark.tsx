type BrandMarkProps = {
  name: string;
  color: string;
};

export function BrandMark({ name, color }: BrandMarkProps) {
  const suffix = name.replace(/^Over/i, "");
  const isOverture = name === "Overture";

  return (
    <h1 className="brand-mark" aria-label={name}>
      <span className={`brand-over ${isOverture ? "overture" : ""}`} style={{ color: isOverture ? color : undefined }}>
        Over
      </span>
      <span className={`brand-domain ${isOverture ? "overture" : ""}`} style={{ color }}>
        {suffix}
      </span>
    </h1>
  );
}
