#!/usr/bin/env bash
set -x

set -o nounset
set -o errexit
set -o pipefail

cd "$(dirname "$0")"

TAR_FILE='60-minutes-of-underwater-ambient-whale-sounds.tar'
SHA256_FILE="${TAR_FILE}.sha256"

cat ${TAR_FILE}.*.part > "${TAR_FILE}"

shasum -a 256 -c < "${SHA256_FILE}"

tar xvf "${TAR_FILE}"

rm -f "${TAR_FILE}"

