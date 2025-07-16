#!/bin/bash

set -e

# env variables
SANITY_STUDIO_PROJECT_ID="${SANITY_STUDIO_PROJECT_ID}"
SANITY_STUDIO_DATASET="${SANITY_STUDIO_DATASET}"

function create_env_file
{
    echo SANITY_STUDIO_PROJECT_ID=$SANITY_STUDIO_PROJECT_ID >> .env
    echo SANITY_STUDIO_DATASET=$SANITY_STUDIO_DATASET >> .env
    echo NODE_ENV=production >> .env
}


function run
{
    create_env_file
}

run