import { ComponentProps } from "react";

// Extender propriedades de elementos nativos do HTML e passar todas elas para dentro de um elemento do componente (extends ComponentProps<"a">)
interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm">
      {props.children}
    </a>
  );
}
