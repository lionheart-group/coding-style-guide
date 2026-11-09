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

export type SiblingDocCardListProps = {
  /** Doc IDs relative to the current directory, e.g. "modifiers" */
  ids: string[];
  className?: string;
};

/**
 * Cards for sibling docs, resolved from the current sidebar so that they stay in the
 * version (and locale) being read
 */
export const SiblingDocCardList = ({ ids, className }: SiblingDocCardListProps) => {
  const items = useCurrentSidebarSiblings();
  const found = ids
    .map(id =>
      items.find(
        item =>
          item.type === "link" &&
          item.docId != null &&
          (item.docId === id || item.docId.endsWith("/" + id))
      )
    )
    .filter(item => item != null);

  if (found.length === 0) {
    return null;
  }

  return <DocCardList items={found} className={className} />;
};
