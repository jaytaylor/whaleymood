#!/usr/bin/env bash

set -o nounset
set -o errexit
set -o pipefail

cd "$(dirname "$0")"

TAR_FILE='60-minutes-of-underwater-ambient-whale-sounds.tar'

tar -cvf "${TAR_FILE}" *.m4a *.mp3 *.ogg

shasum -a 256 "${TAR_FILE}" > "${TAR_FILE}.sha256"

split --bytes 10m --suffix-length=3 --additional-suffix='.part' "${TAR_FILE}" "${TAR_FILE}."

rm -f "${TAR_FILE}"

