export default function Timeline({ items, renderItem }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[9px] top-2 bottom-2 w-px bg-[var(--color-line)]" />
      <div className="flex flex-col gap-6">
        {items.map((item, i) => (
          <div key={item.id ?? i} className="relative">
            <span className="absolute -left-8 top-1 w-[19px] h-[19px] rounded-full gradient-primary border-4 border-[var(--color-bg)]" />
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  )
}
