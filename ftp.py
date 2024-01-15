#!/usr/bin/env python3

from os import system

s_dir = "/home/kai/A_Sphinx/Teach/demo.tm-tutor.de/build/html"
t_dir = "/public_html/DEMO"

command = "lftp -e \"mirror -R " + s_dir + " " + t_dir + "\" -u fiziko,dtciag8j www225.your-server.de </dev/null"

print("\nExecuting: " + command)
system(command)
