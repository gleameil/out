// Ambient declarations for things Parcel resolves at build time but `tsc` does not.
// These exist so `npm run typecheck` can run over the real source tree.

// Parcel turns a CSS import into a build-time side effect.
declare module '*.css';
