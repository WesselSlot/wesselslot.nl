#!/bin/sh
cd $TRAVIS_BUILD_DIR/frontend
npm run test -- --watch=false --no-progress --browsers=ChromeHeadlessNoSandbox