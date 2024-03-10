dist_dir="./dist"

# clear and mkdir ./dist
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

if [ $? -ne 0 ]
then
    echo "+===============+"
    echo "| protoc failed |"
    echo "+===============+"
    exit 1
fi

echo "npm pack"
npm pack
echo "done"
