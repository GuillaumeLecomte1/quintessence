import { useState, useRef, useEffect } from "react";
import {
  Router,
  Route,
  rootRouteWithContext,
  Outlet,
} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

import { HomePage } from "./routes/index";
import { ContactPage } from "./routes/contact";
import { ReflexologyPage } from "./routes/reflexology";
import { ReikiPage } from "./routes/reiki";
import { BachFlowersPage } from "./routes/bach-flowers";
import { FiveContinentsMassagePage } from "./routes/five-continents-massage";
import { NaturopathyPage } from "./routes/naturopathy";
import { PrivacyPage } from "./routes/privacy";
import { LegalPage } from "./routes/legal";
import { AboutStoryPage } from "./routes/about-story";
import { AboutCabinetPage } from "./routes/about-cabinet";

export interface RouterContext {
  queryClient: QueryClient;
}

const rootRoute = rootRouteWithContext<RouterContext>()({
  component: Layout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const reflexologyRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/reflexology",
  component: ReflexologyPage,
});

const reikiRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/reiki",
  component: ReikiPage,
});

const bachFlowersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/bach-flowers",
  component: BachFlowersPage,
});

const fiveContinentsMassageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/five-continents-massage",
  component: FiveContinentsMassagePage,
});

const naturopathyRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/naturopathy",
  component: NaturopathyPage,
});

const privacyRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const legalRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/legal",
  component: LegalPage,
});

const aboutStoryRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about-story",
  component: AboutStoryPage,
});

const aboutCabinetRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about-cabinet",
  component: AboutCabinetPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  contactRoute,
  reflexologyRoute,
  reikiRoute,
  bachFlowersRoute,
  fiveContinentsMassageRoute,
  naturopathyRoute,
  privacyRoute,
  legalRoute,
  aboutStoryRoute,
  aboutCabinetRoute,
]);

export const router = new Router({
  routeTree,
  context: {
    queryClient: undefined!,
  },
});

export type RouterType = typeof router;

function Layout() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Noto+Serif:ital,wght@0,400;0,500;1,400&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-xl border-b border-[var(--color-outline-variant)]/20 shadow-[0_40px_40px_-15px_rgba(0,70,74,0.04)]">
      <div className="max-w-7xl mx-auto px-12 h-24 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <svg
            className="h-10 w-auto"
            viewBox="0 0 231 224"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="231" height="224" fill="var(--color-primary)" rx="24"/>
            <g fill="white">
              <path d="M0 1120 l0 -1120 1155 0 1155 0 0 1120 0 1120 -1155 0 -1155 0 0 -1120z m1173 962 c3 -15 34 -65 69 -111 35 -46 75 -102 91 -124 15 -23 31 -43 36 -45 24 -8 42 163 20 185 -6 6 -8 16 -4 22 10 17 89 -30 154 -89 30 -27 58 -47 64 -43 6 3 7 1 3 -5 -4 -7 7 -33 25 -58 34 -51 79 -168 74 -196 -3 -11 1 -15 11 -11 8 3 14 9 14 15 0 5 -4 7 -8 4 -5 -3 -9 1 -9 9 0 10 4 12 12 5 9 -7 24 -1 51 21 45 36 103 63 157 73 20 4 37 12 37 19 0 8 3 7 9 -2 6 -9 4 -22 -6 -37 -11 -17 -13 -39 -9 -81 18 -186 18 -230 1 -288 -18 -63 -68 -170 -84 -180 -6 -3 -20 -20 -32 -37 l-23 -31 22 5 c14 4 20 2 15 -5 -4 -6 0 -8 10 -4 10 3 17 3 17 -2 0 -4 18 -16 40 -26 22 -10 45 -24 51 -32 7 -8 21 -11 33 -8 14 4 17 3 8 -3 -10 -7 -10 -11 2 -21 8 -7 21 -9 27 -5 7 4 9 3 6 -3 -4 -6 7 -26 25 -44 70 -75 117 -173 133 -276 7 -47 -7 -58 -26 -20 -12 24 -38 48 -84 78 -35 22 -112 25 -245 8 -47 -6 -93 -11 -102 -11 -15 1 -15 -4 6 -36 41 -67 79 -216 69 -280 -7 -48 -25 -112 -32 -112 -3 0 -14 21 -23 48 -24 63 -86 127 -156 160 -31 14 -61 28 -65 30 -4 2 -5 -19 -1 -46 3 -28 3 -67 0 -87 l-7 -36 -47 48 c-46 48 -91 74 -144 87 -25 6 -30 2 -53 -43 -13 -28 -52 -78 -86 -112 l-61 -63 -57 59 c-32 33 -73 83 -90 112 l-32 51 -36 -10 c-49 -13 -102 -48 -141 -92 -21 -24 -34 -32 -37 -24 -10 30 -10 138 0 141 5 3 7 7 4 11 -10 11 -130 -50 -167 -84 -34 -33 -64 -85 -77 -135 l-7 -30 -18 40 c-37 80 -19 229 40 346 l28 56 -41 6 c-23 3 -94 9 -157 13 -105 6 -119 5 -155 -14 -41 -21 -83 -61 -103 -97 -10 -17 -11 -15 -12 20 0 63 59 225 82 225 4 0 8 6 8 13 0 16 90 112 113 120 11 4 15 12 11 19 -4 7 -4 10 0 6 5 -4 37 9 73 28 36 19 71 34 80 34 8 0 13 6 10 13 -2 6 -10 11 -16 9 -7 -1 -10 2 -7 6 3 5 -4 20 -15 33 -89 103 -125 281 -90 445 11 52 11 65 -3 98 l-16 38 42 -7 c22 -4 55 -13 73 -21 18 -7 35 -10 39 -7 3 4 6 1 6 -5 0 -5 15 -20 33 -31 17 -11 44 -31 59 -45 l27 -26 7 48 c8 57 53 152 103 212 20 24 35 48 34 52 -2 5 0 7 5 5 11 -3 62 39 62 52 0 6 3 10 8 9 4 -1 24 6 46 15 59 26 70 23 51 -13 -19 -37 -18 -71 4 -140 15 -45 20 -51 26 -35 4 11 18 34 31 51 13 17 20 34 17 38 -4 3 -2 6 4 6 6 0 30 26 54 58 23 31 46 59 49 62 4 3 15 24 26 47 22 50 30 53 37 15z"/>
              <path d="M1150 1962 c0 -6 -29 -56 -65 -112 -62 -99 -93 -165 -81 -177 3 -3 8 3 12 13 12 39 29 71 82 157 48 78 72 104 72 78 0 -4 22 -41 49 -82 27 -41 59 -96 70 -124 13 -33 20 -42 20 -28 1 12 -9 42 -21 65 -28 55 -138 222 -138 210z"/>
              <path d="M861 1900 c-11 -25 -21 -53 -21 -64 0 -40 -25 -103 -61 -157 -56 -84 -79 -134 -79 -172 0 -39 27 -100 41 -92 5 4 6 0 3 -8 -3 -8 -1 -18 4 -21 13 -8 45 42 36 56 -4 7 -3 8 4 4 7 -4 12 -1 12 7 0 8 9 22 20 32 12 11 18 25 15 34 -3 8 -3 12 1 8 9 -9 36 29 41 57 14 80 13 95 -5 149 -11 31 -17 59 -12 62 4 2 24 -6 43 -19 l35 -24 -15 36 c-8 20 -21 64 -28 97 l-13 60 -21 -45z"/>
              <path d="M1420 1879 c-7 -35 -19 -77 -27 -93 -12 -23 -12 -27 -1 -23 7 2 12 10 10 16 -1 7 2 10 8 6 6 -4 18 -1 26 6 23 19 28 3 10 -41 -9 -22 -16 -65 -16 -95 0 -55 24 -135 41 -135 5 0 9 -6 9 -12 0 -7 18 -39 39 -72 l39 -58 18 28 c9 16 24 40 32 53 9 15 12 35 7 59 -7 37 -41 112 -51 112 -3 0 -2 -5 2 -12 4 -7 3 -8 -5 -4 -6 4 -9 11 -6 16 3 4 -11 34 -30 65 -19 32 -39 83 -45 114 -7 31 -19 74 -29 95 l-18 40 -13 -65z"/>
              <path d="M1141 1874 c-15 -34 -14 -129 3 -184 l13 -45 12 40 c20 68 24 130 12 168 -16 47 -25 52 -40 21z"/>
              <path d="M936 1662 c18 -76 17 -151 -1 -207 -9 -25 -13 -51 -9 -58 4 -6 4 -9 -1 -5 -13 12 -103 -124 -116 -175 -10 -36 -10 -54 0 -88 23 -78 67 -115 156 -134 17 -3 39 -9 50 -12 19 -5 19 -4 4 13 -19 22 -63 106 -77 149 -17 50 -36 164 -28 172 4 4 20 2 35 -4 28 -10 29 -9 35 21 4 17 16 50 27 74 18 36 21 56 17 114 -3 38 -11 75 -17 81 -6 6 -11 17 -11 25 0 15 -44 72 -65 84 -9 6 -9 -5 1 -50z"/>
              <path d="M410 1707 c0 -2 13 -21 30 -42 19 -23 45 -84 70 -163 53 -160 96 -245 161 -316 56 -61 98 -92 81 -59 -17 32 -24 117 -13 165 10 44 9 50 -19 92 -17 24 -30 47 -30 50 0 18 -97 151 -135 184 -39 34 -145 99 -145 89z"/>
              <path d="M1345 1679 c-14 -18 -24 -38 -21 -46 3 -8 2 -12 -3 -8 -20 12 -46 -120 -34 -176 3 -15 13 -36 22 -46 9 -10 18 -36 19 -58 2 -22 5 -41 7 -43 2 -2 17 4 34 12 16 9 32 12 35 7 13 -20 -37 -198 -75 -269 l-38 -72 27 6 c15 4 32 9 37 13 6 3 21 7 34 9 72 10 124 83 120 169 -3 74 -14 95 -109 211 -6 6 -8 12 -4 12 3 0 2 6 -4 13 -7 7 -17 45 -23 83 -10 57 -9 82 3 142 9 39 12 72 8 72 -5 0 -20 -14 -35 -31z"/>
              <path d="M1850 1682 c-79 -40 -137 -103 -221 -241 -49 -80 -64 -112 -58 -127 11 -27 11 -123 0 -162 -5 -17 -6 -32 -2 -32 10 0 63 56 63 67 0 4 4 7 9 6 12 -4 64 69 99 137 15 31 42 103 60 160 18 58 39 115 47 128 14 23 14 23 -9 12 -22 -11 -22 -10 -4 4 11 9 22 16 25 16 10 1 43 50 34 50 -5 0 -24 -8 -43 -18z"/>
              <path d="M1150 1570 c0 -7 -18 -37 -39 -65 -22 -29 -37 -56 -33 -60 4 -5 2 -5 -5 -2 -16 10 -63 -77 -70 -128 -5 -38 -3 -43 33 -70 25 -19 39 -25 42 -17 2 7 15 33 28 58 13 25 21 51 18 57 -4 7 -3 9 1 4 5 -4 16 0 25 8 14 13 19 7 53 -61 l37 -75 39 31 c36 29 38 34 31 68 -11 54 -19 71 -64 130 -23 30 -53 72 -68 95 -16 23 -28 35 -28 27z"/>
              <path d="M1140 1313 c-31 -67 -29 -154 4 -218 l14 -27 21 57 c26 70 27 114 1 171 -11 24 -22 44 -24 44 -1 0 -9 -12 -16 -27z"/>
              <path d="M1082 1098 c4 -44 12 -68 39 -107 l34 -50 18 22 c44 53 57 83 57 130 0 30 -4 46 -10 42 -16 -10 -41 -77 -35 -92 2 -8 0 -11 -5 -8 -6 3 -10 -1 -10 -10 0 -34 -25 -7 -47 50 -33 85 -46 93 -41 23z"/>
              <path d="M464 1071 c-113 -45 -236 -151 -292 -251 l-23 -41 53 43 c81 66 132 82 242 75 50 -3 150 -17 221 -31 95 -20 145 -25 185 -20 66 8 152 42 143 57 -4 6 0 8 9 5 8 -4 27 2 42 11 l27 18 -88 7 c-158 11 -271 41 -398 105 -38 20 -72 36 -75 37 -3 1 -23 -6 -46 -15z m-59 -51 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m-141 -128 c3 -5 -1 -9 -9 -9 -8 0 -12 4 -9 9 3 4 7 8 9 8 2 0 6 -4 9 -8z"/>
              <path d="M1730 1049 c-117 -61 -306 -109 -432 -109 -30 0 -47 -4 -43 -10 11 -18 134 -72 146 -64 7 4 9 3 6 -3 -14 -23 86 -30 170 -13 26 6 93 20 148 31 190 40 294 21 399 -72 l50 -44 -23 41 c-64 114 -179 216 -297 262 l-50 20 -74 -39z"/>
              <path d="M1249 869 c36 -59 141 -131 299 -205 132 -61 203 -115 236 -179 l16 -30 0 47 c0 48 -35 155 -65 201 -14 22 -28 27 -103 37 -116 16 -212 49 -315 108 -82 47 -84 48 -68 21z"/>
              <path d="M1028 866 c-21 -12 -36 -26 -33 -29 3 -4 2 -5 -1 -3 -3 3 -31 -8 -63 -24 -69 -35 -140 -55 -249 -71 -79 -12 -85 -15 -108 -48 -13 -20 -24 -41 -24 -47 0 -6 -6 -24 -14 -40 -7 -16 -16 -58 -20 -94 l-6 -65 21 43 c31 62 87 104 228 173 138 67 245 134 276 171 41 49 47 58 39 58 -5 0 -26 -11 -46 -24z"/>
              <path d="M1150 839 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>
              <path d="M1077 784 l-28 -46 21 -69 c12 -38 26 -67 31 -64 5 4 7 0 4 -7 -3 -7 8 -32 23 -56 22 -33 31 -40 39 -30 23 29 72 136 84 185 11 46 11 55 -4 71 -9 10 -17 23 -17 29 0 6 -6 15 -13 21 -10 9 -17 1 -32 -33 -11 -25 -24 -45 -28 -45 -4 0 -16 20 -27 45 -11 25 -21 45 -22 45 -2 0 -16 -21 -31 -46z"/>
              <path d="M1025 665 c6 -41 16 -74 44 -140 5 -11 14 -33 20 -50 7 -16 25 -45 40 -64 26 -32 30 -34 45 -19 9 9 16 21 16 26 0 6 4 12 8 14 26 11 108 250 94 273 -4 6 -11 -10 -16 -35 -18 -93 -37 -148 -72 -203 -20 -31 -39 -57 -43 -57 -28 0 -94 130 -116 229 -19 79 -31 96 -20 26z"/>
              <path d="M1374 612 c-3 -15 -10 -39 -14 -54 -7 -23 -6 -28 8 -28 24 0 115 -44 131 -63 21 -26 31 -20 31 16 0 57 -10 71 -81 114 l-69 42 -6 -27z"/>
              <path d="M865 593 c-33 -20 -63 -41 -66 -46 -9 -13 -21 -88 -15 -94 2 -3 28 12 56 31 29 20 58 36 66 36 8 0 14 5 14 11 0 5 4 8 8 5 4 -2 13 -1 19 2 9 6 9 19 1 50 -6 23 -13 42 -17 42 -4 0 -33 -17 -66 -37z"/>
            </g>
          </svg>
          <span className="text-lg font-serif tracking-widest text-[var(--color-on-surface)]">
            QUINTESSENCE
          </span>
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <a
            className="font-serif tracking-wide uppercase text-sm font-medium text-[var(--color-primary)] border-b border-[var(--color-primary)]/50 pb-1 cursor-pointer transition-transform duration-700 hover:scale-105"
            href="#"
          >
            Expérience
          </a>
          <a
            className="font-serif tracking-wide uppercase text-sm font-medium text-[var(--color-on-surface)]/60 hover:text-[var(--color-primary)] transition-all duration-500 ease-out hover:scale-105"
            href="#"
          >
            Services
          </a>
          <div className="group relative">
            <button className="font-serif tracking-wide uppercase text-sm font-medium text-[var(--color-on-surface)]/60 group-hover:text-[var(--color-primary)] transition-all duration-500 ease-out hover:scale-105 flex items-center gap-1 cursor-pointer">
              <span>Pratiques</span>
              <span className="material-symbols-outlined text-base transition-transform duration-300">
                expand_more
              </span>
            </button>
            <div className="invisible group-hover:visible absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-[var(--color-outline-variant)] py-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <Link
                to="/naturopathy"
                className="block px-5 py-3 font-serif text-sm text-[var(--color-on-surface)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition-all duration-300"
              >
                Naturopathie
              </Link>
              <Link
                to="/reflexology"
                className="block px-5 py-3 font-serif text-sm text-[var(--color-on-surface)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition-all duration-300"
              >
                Reflexologie
              </Link>
              <Link
                to="/reiki"
                className="block px-5 py-3 font-serif text-sm text-[var(--color-on-surface)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition-all duration-300"
              >
                Reiki
              </Link>
              <Link
                to="/bach-flowers"
                className="block px-5 py-3 font-serif text-sm text-[var(--color-on-surface)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition-all duration-300"
              >
                Fleurs de Bach
              </Link>
              <Link
                to="/five-continents-massage"
                className="block px-5 py-3 font-serif text-sm text-[var(--color-on-surface)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition-all duration-300"
              >
                Massage des 5 continents
              </Link>
            </div>
          </div>
          <div className="group relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-serif tracking-wide uppercase text-sm font-medium text-[var(--color-on-surface)]/60 group-hover:text-[var(--color-primary)] transition-all duration-500 ease-out hover:scale-105 flex items-center gap-1 cursor-pointer"
            >
              <span>À propos</span>
              <span className="material-symbols-outlined text-base transition-transform duration-300">
                expand_more
              </span>
            </button>
            <div className="invisible group-hover:visible absolute top-full left-0 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-[var(--color-outline-variant)] py-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
              <Link
                to="/about-story"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 font-serif text-sm text-[var(--color-on-surface)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition-all duration-300"
              >
                Mon histoire
              </Link>
              <Link
                to="/about-cabinet"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 font-serif text-sm text-[var(--color-on-surface)]/70 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container)] transition-all duration-300"
              >
                Mon cabinet
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className="font-serif tracking-wide uppercase text-sm font-medium text-[var(--color-on-surface)]/60 hover:text-[var(--color-primary)] transition-all duration-500 ease-out hover:scale-105"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full py-24 bg-slate-50 border-t border-teal-100">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <div className="font-serif italic text-xl text-teal-900">
            QUINTESSENCE
          </div>
          <p className="font-serif text-sm leading-relaxed text-teal-900/50">
            Votre havre de paix pour un bien être holistique et un bien-être
            profond.
          </p>
        </div>
        <div className="space-y-6">
          <h5 className="font-label-caps text-label-caps text-teal-900">
            Services
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                to="/naturopathy"
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
              >
                Naturopathie
              </Link>
            </li>
            <li>
              <Link
                to="/reflexology"
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
              >
                Réflexologie
              </Link>
            </li>
            <li>
              <Link
                to="/reiki"
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
              >
                Reiki
              </Link>
            </li>
            <li>
              <Link
                to="/bach-flowers"
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
              >
                Fleurs de Bach
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-label-caps text-label-caps text-teal-900">
            Sanctuaire
          </h5>
          <ul className="space-y-4">
            <li>
              <a
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
                href="#"
              >
                Mon Histoire
              </a>
            </li>
            <li>
              <a
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
                href="#"
              >
                Le Cabinet
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-label-caps text-label-caps text-teal-900">
            Légal
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                to="/privacy"
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                className="font-serif text-sm text-teal-900/50 hover:text-teal-700 transition-colors"
              >
                Mentions légales
              </Link>
            </li>
          </ul>
          <div className="pt-4">
            <p className="font-serif text-sm text-teal-900/50">
              © 2026 Quintessence Wellness. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Layout };
