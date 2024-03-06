#!/bin/bash
# Variables to be used
TARGETVAR="web"

# levels
if [ -d "./front_end/src/rust/main/levels" ]; then
    rm -rf ./front_end/src/rust/main/levels
fi

(cd ./game_engine/main/levels && wasm-pack build --target $TARGETVAR)
mv ./game_engine/main/levels/pkg ./front_end/src/rust/main/levels
