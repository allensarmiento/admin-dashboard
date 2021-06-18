import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BasicNavigationItem = ({ children }: Props) => {
  return (
    <li className="flex-1 md:flex-none md:mr-3">
      {children}
    </li>
  );
};

export default BasicNavigationItem;
