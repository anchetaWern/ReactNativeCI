#!/usr/bin/env bash

echo "MY CUSTOM PRE-BUILD SCRIPT..."
if($UPDATE_JEST_SNAPSHOTS == "true")
then
  echo "Now updating the snapshots..."
  npm test -u
  echo "Done updating the snapshots"
fi