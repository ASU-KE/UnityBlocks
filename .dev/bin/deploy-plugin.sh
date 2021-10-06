#! /bin/bash

# Checkout UnityBlocks from WordPress.org
svn co "http://svn.wp-plugins.org/unityblocks" $HOME/unityblocks

# Clean /trunk/ and copy over plugin files
rm -rf $HOME/unityblocks/trunk/*
cp -a build/unityblocks/* $HOME/unityblocks/trunk/

# Create the tag on the SVN repo and copy over plugin files
svn cp $HOME/unityblocks/trunk $HOME/unityblocks/tags/${CIRCLE_TAG}
svn commit -m "Tagging version ${CIRCLE_TAG}"

# Copy the WordPress.org assets over
rm -rf $HOME/unityblocks/assets/*
cp -a .wordpress-org/* $HOME/unityblocks/assets/

# Deploy UnityBlocks to WordPress.org
cd $HOME/unityblocks
svn add * --force
# Delete removed files
svn status | grep '^!' | awk '{print $2}' | xargs svn delete
svn ci --no-auth-cache --username ${WP_ORG_USERNAME} --password ${WP_ORG_PASSWORD} -m "Deploy new version of UnityBlocks"

CHANGELOG=$(sed -n -e '/== Changelog ==/,$p' $HOME/project/readme.txt | tail -n +3)

# Deploy a UnityBlocks Github release
ghr -t ${GH_ACCESS_TOKEN} -u ${CIRCLE_PROJECT_USERNAME} -r ${CIRCLE_PROJECT_REPONAME} -c ${CIRCLE_SHA1} -b "${CHANGELOG}" -delete ${CIRCLE_TAG} /tmp/artifacts
