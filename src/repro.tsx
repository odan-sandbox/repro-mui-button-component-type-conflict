/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import Button from "@mui/material/Button";
import type { UrlObject } from "url";

// Like next/link component
const Link = (_: { href: string | UrlObject }) => null;

const X1 = <Button href=""></Button>;

const href = {} as UrlObject;
const X2 = <Button component={Link} href={href}></Button>; // Occurs type error
/*
No overload matches this call.
  Overload 1 of 3, '(props: { href: string; } & ButtonOwnProps & Omit<ButtonBaseOwnProps, "classes"> & CommonProps & Omit<Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & { ...; }, "className" | ... 24 more ... | "variant">): Element', gave the following error.
    Type 'UrlObject' is not assignable to type 'string'.
  Overload 2 of 3, '(props: { component: (_: { href: string | UrlObject; }) => null; } & ButtonOwnProps & Omit<ButtonBaseOwnProps, "classes"> & CommonProps & Omit<...>): Element | null', gave the following error.
    Type 'UrlObject' is not assignable to type 'string'.
  Overload 3 of 3, '(props: DefaultComponentProps<ExtendButtonBaseTypeMap<ButtonTypeMap<{}, "button">>>): Element | null', gave the following error.
    Type 'UrlObject' is not assignable to type 'string'.
*/