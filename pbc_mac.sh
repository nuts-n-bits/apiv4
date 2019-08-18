"./bin/protoc" -I="." \
--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
--js_out="import_style=commonjs,binary:." --ts_out="." \
"apiv4.proto" "./include/page.proto" "./include/revision.proto" "./include/support.proto" "./include/user.proto" "./include/feed.proto"
