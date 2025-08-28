import gulp from "gulp";
const { src, series, dest, watch, parallel } = gulp;

import bsc from "browser-sync";
import imagemin from "gulp-imagemin";
import clean from "gulp-clean";

import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
const sass = gulpSass(dartSass);

const browserSync = bsc.create();

const htmlTaskHandler = () => {
  return src("./src/*.html").pipe(dest("./dist"));
};

const cssTaskHandler = () => {
  return src("./src/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoPrefixer())
    .pipe(csso())
    .pipe(dest("./dist/css"))
    .pipe(browserSync.stream());
};

const imagesTaskHandler = () => {
  return src("./src/images/**/*.*")
    .pipe(imagemin())
    .pipe(dest("./dist/images"))
    .pipe(browserSync.stream());
};

const fontTaskHandler = () => {
  return src("./src/fonts/**/*.*").pipe(dest("./dist/fonts"));
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

  watch("./src/scss/**/*.scss").on(
    "change",
    series(cssTaskHandler, browserSync.reload)
  );

  watch("./src/images/**/*").on(
    "all",
    series(imagesTaskHandler, browserSync.reload)
  );
};

export const build = series(
  cleanDistHandler,
  parallel(htmlTaskHandler, imagesTaskHandler, fontTaskHandler, cssTaskHandler)
);
export const dev = series(build, browserSyncTaskHandler);
