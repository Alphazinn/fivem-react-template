fx_version "cerulean"
game "gta5"

author "Alpha"
description "FiveM UI Template with React"
version "1.0.0"

shared_script "shared/config.lua"
server_script "server/main.lua"
client_script "client/main.lua"

ui_page "ui/build/index.html"

files {
    "ui/build/index.html",
    "ui/build/static/css/*.css",
    "ui/build/static/js/*.js",
}

lua54 "yes"
