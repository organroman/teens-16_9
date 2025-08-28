import gulp from "gulp";
import bsc from "browser-sync";

const { src, series, dest, watch, parallel } = gulp;

const browserSync = bsc.create();

const htmlTaskHandler = () => {
  return src("./src/*.html").pipe(dest("./dist"));
};

const browserSyncTaskHandler = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  watch("./src/*.html").on(
    "change",
    series(htmlTaskHandler, browserSync.reload)
  );
};

export const build = series(htmlTaskHandler);
export const dev = series(build, browserSyncTaskHandler);
