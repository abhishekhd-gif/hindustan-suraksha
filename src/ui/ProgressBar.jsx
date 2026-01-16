export default function ProgressBar({ value }) {
  return (
    <div
      style={{
        marginTop: 8,
        border: "1px solid var(--border)",
        borderRadius: 999,
        height: 12,
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: "var(--brand)",
        }}
      />
    </div>
  );
}
