#!/bin/sh

if [ "$1" == "local" ]; then
    cd frontend/
else
    cd $TRAVIS_BUILD_DIR/frontend
fi

npm install
npm run test -- --watch=false --no-progress --browsers=ChromeHeadlessNoSandbox