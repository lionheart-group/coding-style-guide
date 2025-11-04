import { PropSidebarItemCategory } from "@docusaurus/plugin-content-docs";
import { useCurrentSidebarSiblings } from "@docusaurus/plugin-content-docs/client";
import DocCardList from "@theme/DocCardList";

export type CategoryDocCardListProps = {
  label: string;
  className?: string;
};

export const CategoryDocCardList = ({
  label,
  className
}: CategoryDocCardListProps) => {
  const items = useCurrentSidebarSiblings();
  const child = items.find(
    item => item.type === "category" && item.label === label
  ) as PropSidebarItemCategory;

  if (child == null) {
    return null;
  }

  return <DocCardList items={child.items} className={className} />;
};
