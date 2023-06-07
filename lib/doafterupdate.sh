#!/bin/sh

#DB_PREFIX="imapp_account"
#IM_DB_DIR="${HOME}/.im_db"
#IM_DB_FILE="${IM_DB_DIR}/${DB_PREFIX}.sqlite3"
myDir=$(
  cd $(dirname "$0")
  pwd
)
appRootDir=$(dirname "${myDir}")
#imRoot="${appRootDir}/vendor/inter-mediator/inter-mediator"
#
#sqlite3 "${IM_DB_FILE}" < "${myDir}/schema_views.sql"
#
#echo "**** Please check the README.md file. ****"

platform=`uname -a`
if [[ "${platform}" =~ "Linux" ]]; then
  sudoReq="sudo"
fi
if [[ "${platform}" =~ "Darwin" ]]; then
  sudoReq=""
fi

schemaDir="${appRootDir}/private/MySQL_Schema"
cd "${schemaDir}"
${sudoReq} mysql -uroot imapp_account < schema_update.sql
${sudoReq} mysql -uroot imapp_account < schema_views.sql
