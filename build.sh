dist_dir="./dist"
target_dir="../node_modules/apiv4"

echo "rm -rf" $dist_dir $target_dir
rm -rf $dist_dir
rm -rf $target_dir

echo "mkdir" $dist_dir
mkdir $dist_dir

echo "protoc"
"./bin/protoc" -I="." \
--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
--js_out="import_style=commonjs,binary:"$dist_dir --ts_out=$dist_dir \
"apiv4.proto" \
"./include/page.proto" \
"./include/revision.proto" \
"./include/support.proto" \
"./include/user.proto" \
"./include/feed.proto"

echo "mv" $dist_dir $target_dir
mv $dist_dir $target_dir

echo "done"