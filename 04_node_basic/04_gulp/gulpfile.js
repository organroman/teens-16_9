import gulp from "gulp";
const { src, series, dest, watch, parallel } = gulp;

import bsc from "browser-sync";
import imagemin from "gulp-imagemin";
import clean from "gulp-clean";

const browserSync = bsc.create();

const htmlTaskHandler = () => {
  return src("./src/*.html").pipe(dest("./dist"));
};

const imagesTaskHandler = () => {
  return src("./src/images/**/*.*")
    .pipe(imagemin())
    .pipe(dest("./dist/images"))
    .pipe(browserSync.stream());
};

const cleanDistHandler = () => {
  return src("./dist", { read: false, allowEmpty: true }).pipe(
    clean({ force: true })
  );
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

  watch("./src/images/**/*").on(
    "all",
    series(imagesTaskHandler, browserSync.reload)
  );
};

export const build = series(
  cleanDistHandler,
  parallel(htmlTaskHandler, imagesTaskHandler)
);
export const dev = series(build, browserSyncTaskHandler);
