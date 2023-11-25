import { gsap } from "gsap";
import barba from "@barba/core";
import { innerCursor, moveCursor, addCursorEffect } from "./cursor";
import animations from "./animations";
import menu from "./menu";
import threeBase from "./threeBase";

document.addEventListener("mousemove", moveCursor);
addCursorEffect();
