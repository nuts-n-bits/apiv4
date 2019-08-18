"./bin/protoc" -I="." ^
--plugin="protoc-gen-ts=C:\Users\intel\Desktop\angular2\node_modules\.bin\protoc-gen-ts.cmd" ^
--js_out="import_style=commonjs,binary:." --ts_out="." ^
"apiv4.proto" "./include/page.proto" "./include/revision.proto" "./include/support.proto" "./include/user.proto" "./include/feed.proto"
