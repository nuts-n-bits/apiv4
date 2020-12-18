dist_dir="./dist"
jsout_dir="./dist/nnb"
target_dir1="../node5e/node_modules/apiv4"
target_dir2="../angular2/node_modules/apiv4"

echo "rm -rf" $jsout_dir
rm -rf $jsout_dir

echo "mkdir" $jsout_dir
mkdir $jsout_dir

echo "protoc"
"./bin/protoc" -I="./nnb" \
--plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
--js_out="import_style=commonjs,binary:"$jsout_dir --ts_out=$jsout_dir \
"./nnb/page.proto" \
"./nnb/revision.proto" \
"./nnb/support.proto" \
"./nnb/user.proto" \
"./nnb/feed.proto"

echo "rm -rf" $target_dir1
rm -rf $target_dir1
echo "rm -rf" $target_dir2
rm -rf $target_dir2

echo "cp -r" $dist_dir $target_dir1
cp -r $dist_dir $target_dir1
echo "cp -r" $dist_dir $target_dir2
cp -r $dist_dir $target_dir2

echo "done"
