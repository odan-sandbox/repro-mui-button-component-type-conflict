/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import Button from "@mui/material/Button";
import type { UrlObject } from "url";

// Like next/link component
const Link = (_: { href: string | UrlObject }) => null;

const X1 = <Button href=""></Button>;

const href = {} as UrlObject;
const X2 = <Button component={Link} href={href}></Button>;
