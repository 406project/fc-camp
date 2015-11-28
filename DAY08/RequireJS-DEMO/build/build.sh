# Shell Script
# --------------------------------
#! /usr/bin/env sh
# 퍼미션 권한 오류일 경우, 아래 명령어 수행
# chmod +x build/build.sh

node build/r.js -o build/build.config.js
node build/r.js -o build/build.css.config.js