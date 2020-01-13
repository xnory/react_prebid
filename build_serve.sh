#!/bin/bash

cd /home/jnormand/sites/react-prebid/test
rm -rf ./build
npm run build
serve -s build
