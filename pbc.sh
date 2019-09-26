
echo "mkdir"
mkdir "./apiv4"

echo "protoc"
"./bin/protoc" -I="." \
--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
--js_out="import_style=commonjs,binary:./(dist)-apiv4" --ts_out="./(dist)-apiv4" \
"apiv4.proto" \
"./include/page.proto" \
"./include/revision.proto" \
"./include/support.proto" \
"./include/user.proto" \
"./include/feed.proto"

echo "mv"
mv "./apiv4" "../node_modules/apiv4"

echo "done"