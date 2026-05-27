# Repo Notes

- This is an npm-managed Expo SDK 54 app (`package-lock.json` is the lockfile). Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before changing Expo, Expo Router, or native build/config code.
- Expo SDK 54 pairs with React Native 0.81 and React 19.1.0; the SDK 54 docs list Node 20.19.x as the minimum.
- App entry is `expo-router/entry`; route files live under `src/app`, not root `app` despite README template text.
- Path aliases are in `tsconfig.json`: `@/*` -> `src/*`, `@/assets/*` -> `assets/*`.
- `app.json` enables `typedRoutes` and `reactCompiler`; avoid adding manual memoization unless there is a measured need or existing pattern.

# Commands

- Install deps: `npm install`.
- Start dev server: `npm run start`; platform shortcuts are `npm run ios`, `npm run android`, and `npm run web`.
- Focused typecheck: `npx tsc --noEmit`.
- There is no test script or Jest config in this repo.
- `npm run lint` currently has no committed ESLint config to use; `expo lint` will try to auto-install ESLint/config and may mutate `package.json`, `package-lock.json`, and add `eslint.config.js`.
- `npm run reset-project` is interactive and destructive: it moves or deletes `src` and `scripts`, then recreates a blank `src/app`.

# Structure And Quirks

- `src/app/_layout.tsx` wires the theme, splash overlay, and tabs. Native tabs use `src/components/app-tabs.tsx` with `expo-router/unstable-native-tabs`; web uses `src/components/app-tabs.web.tsx` with `expo-router/ui`.
- Shared styling constants live in `src/constants/theme.ts`; existing screens/components use `ThemedText`, `ThemedView`, `Spacing`, and platform-specific files rather than a global design system.
- NativeWind is configured through `metro.config.js`, `babel.config.js`, `tailwind.config.js`, and `src/app/global.css`; keep those paths aligned if moving the CSS entry.
- CSS imports are typed by `css.d.ts` for both side-effect CSS imports and `*.module.css` default imports.
