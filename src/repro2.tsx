/* eslint-disable @typescript-eslint/ban-types */
import Link from "next/link";
import { OverrideProps } from "@mui/material/OverridableComponent";

type X1 = OverrideProps<{ props: {}; defaultComponent: "button" }, typeof Link>;
type X2 = OverrideProps<
  { props: { href: string }; defaultComponent: "button" },
  typeof Link
>;

type Y1 = X1["href"]; // string | UrlObject
//   ^?
type Y2 = X2["href"]; // string
//   ^?