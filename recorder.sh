#!/bin/bash
# * 14 * * * /home/iolalla/bin/recorder.sh 
today=`date '+%Y%m%d-%H%M%S'`;
filename="static/videos/$today.avi"
filenamewebm="static/videos/$today.webm"
echo $filename
/usr/bin/streamer -q -c /dev/video0 -f rgb24 -s 720x480 -r 10 -t 01:55 -o $filename
/usr/bin/ffmpeg -i $filename $filenamewebm
/bin/rm $filename
