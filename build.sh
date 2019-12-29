dist_dir="./dist"
target_dir="../node_modules/apiv4"

echo "rm -rf" $dist_dir
rm -rf $dist_dir

echo "mkdir" $dist_dir
mkdir $dist_dir

echo "protoc"
"./bin/protoc" -I="./nnb" \
--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
--js_out="import_style=commonjs,binary:"$dist_dir --ts_out=$dist_dir \
"./nnb/page.proto" \
"./nnb/revision.proto" \
"./nnb/support.proto" \
"./nnb/user.proto" \
"./nnb/feed.proto"

echo "rm -rf" -rf $target_dir
rm -rf $target_dir

echo "mv" $dist_dir $target_dir
mv $dist_dir $target_dir

echo "done"